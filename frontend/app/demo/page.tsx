"use client";

import { useState } from "react";
import JobDescriptionInput from "@/components/job-description-input";
import CandidateRankings from "@/components/candidate-rankings";
import { Briefcase } from "lucide-react";
import { analyseCandidates } from "@/lib/api";

export default function Home() {
  const [jobDescription, setJobDescription] = useState("");
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [results, setResults] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);

  const handleAnalyze = async () => {
    if (!jobDescription.trim() || uploadedFiles.length === 0) {
      alert("Please enter a job description and upload at least one CV");
      return;
    }

    setError(null);
    setIsAnalyzing(true);
    try {
      const analysis = await analyseCandidates(jobDescription, uploadedFiles);
      setResults({
        candidates: analysis.candidates.map((candidate, index) => ({
          id: candidate.rank ?? index + 1,
          ...candidate,
        })),
      });
    } catch (requestError) {
      const message =
        requestError instanceof Error
          ? requestError.message
          : "Failed to analyse candidates.";
      setResults(null);
      setError(message);
      alert(message);
    } finally {
      setIsAnalyzing(false);
    }
  };

  return (
    <main className="min-h-screen bg-slate-950">
      {/* Header */}
      <header className="border-b border-slate-800 bg-slate-950">
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-blue-600 rounded-lg">
              <Briefcase className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-white">HireAI</h1>
              <p className="text-sm text-slate-400">
                AI-powered candidate ranking for your business
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Panel - Input */}
          <JobDescriptionInput
            jobDescription={jobDescription}
            setJobDescription={setJobDescription}
            uploadedFiles={uploadedFiles}
            setUploadedFiles={setUploadedFiles}
            onAnalyze={handleAnalyze}
            isAnalyzing={isAnalyzing}
          />

          {/* Right Panel - Results */}
          <CandidateRankings
            results={results}
            isAnalyzing={isAnalyzing}
            error={error}
          />
        </div>
      </div>
    </main>
  );
}
