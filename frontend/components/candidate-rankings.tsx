"use client";

import { Card } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Skeleton } from "@/components/ui/skeleton";
import { AlertCircle, HelpCircle, Search } from "lucide-react";

interface CandidateResult {
  id: number;
  name: string;
  filename: string;
  matchScore: number;
  matchLabel?: string;
  strengths: string[];
  redFlags: string[];
  interviewQuestions: string[];
}

interface CandidateRankingsProps {
  results: { candidates: CandidateResult[] } | null;
  isAnalyzing: boolean;
  error?: string | null;
}

function getScoreColor(score: number): string {
  if (score >= 80) return "text-green-400";
  if (score >= 60) return "text-yellow-400";
  return "text-red-400";
}

function getScoreBgColor(score: number): string {
  if (score >= 80) return "bg-green-500/10";
  if (score >= 60) return "bg-yellow-500/10";
  return "bg-red-500/10";
}

function CandidateCard({ candidate }: { candidate: CandidateResult }) {
  return (
    <Card className="bg-slate-900 border-slate-800 overflow-hidden">
      <div className="p-6 space-y-4">
        {/* Header */}
        <div className="flex items-start justify-between gap-4">
          <div className="min-w-0 flex-1">
            <h3 className="text-lg font-semibold text-white truncate">
              {candidate.name}
            </h3>
            <p className="text-xs text-slate-400 truncate">
              {candidate.filename}
            </p>
          </div>
          <div
            className={`px-4 py-2 rounded-lg ${getScoreBgColor(candidate.matchScore)} flex-shrink-0`}
          >
            <div
              className={`text-2xl font-bold ${getScoreColor(candidate.matchScore)}`}
            >
              {candidate.matchScore}%
            </div>
            <p className="text-xs text-slate-300">
              {candidate.matchLabel ?? "Match Score"}
            </p>
          </div>
        </div>

        {/* Strengths */}
        <div>
          <h4 className="text-sm font-semibold text-white mb-2">Strengths</h4>
          <ul className="space-y-1">
            {candidate.strengths.map((strength, idx) => (
              <li key={idx} className="text-sm text-slate-300 flex gap-2">
                <span className="text-green-400 flex-shrink-0">✓</span>
                <span>{strength}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Red Flags */}
        <div>
          <h4 className="text-sm font-semibold text-white mb-2">Red Flags</h4>
          <ul className="space-y-1">
            {candidate.redFlags.map((flag, idx) => (
              <li key={idx} className="text-sm text-slate-300 flex gap-2">
                <span className="text-orange-400 flex-shrink-0">⚠</span>
                <span>{flag}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Interview Questions */}
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="questions" className="border-slate-700">
            <AccordionTrigger className="text-sm font-semibold text-white hover:text-blue-400">
              <div className="flex items-center gap-2">
                <HelpCircle className="w-4 h-4" />
                Interview Questions
              </div>
            </AccordionTrigger>
            <AccordionContent className="space-y-3 pt-3">
              {candidate.interviewQuestions.map((question, idx) => (
                <div key={idx} className="text-sm text-slate-300">
                  <p className="font-medium text-white mb-1">
                    {idx + 1}. {question}
                  </p>
                </div>
              ))}
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </Card>
  );
}

function LoadingSkeleton() {
  return (
    <div className="space-y-4">
      {[1, 2, 3].map((i) => (
        <Card key={i} className="bg-slate-900 border-slate-800">
          <div className="p-6 space-y-4">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <Skeleton className="h-5 w-48 bg-slate-800 mb-2" />
                <Skeleton className="h-4 w-32 bg-slate-800" />
              </div>
              <Skeleton className="h-20 w-20 bg-slate-800 rounded-lg" />
            </div>
            <Skeleton className="h-4 w-full bg-slate-800" />
            <Skeleton className="h-4 w-full bg-slate-800" />
            <Skeleton className="h-4 w-3/4 bg-slate-800" />
          </div>
        </Card>
      ))}
    </div>
  );
}

export default function CandidateRankings({
  results,
  isAnalyzing,
  error,
}: CandidateRankingsProps) {
  return (
    <div className="sticky top-8">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-white mb-2">
          Candidate Rankings
        </h2>
        <p className="text-slate-400 text-sm">
          AI-ranked candidates based on job fit
        </p>
      </div>

      <div className="space-y-4">
        {isAnalyzing ? (
          <LoadingSkeleton />
        ) : error ? (
          <Card className="border-red-500/30 bg-red-500/10">
            <div className="p-6 flex gap-3">
              <AlertCircle className="mt-0.5 h-5 w-5 text-red-400 flex-shrink-0" />
              <div>
                <h3 className="text-sm font-semibold text-white">
                  Analysis failed
                </h3>
                <p className="mt-1 text-sm text-red-200">{error}</p>
              </div>
            </div>
          </Card>
        ) : results ? (
          results.candidates.length > 0 ? (
            results.candidates.map((candidate) => (
              <CandidateCard key={candidate.id} candidate={candidate} />
            ))
          ) : (
            <EmptyState />
          )
        ) : (
          <EmptyState />
        )}
      </div>
    </div>
  );
}

function EmptyState() {
  return (
    <Card className="bg-slate-900 border-slate-800">
      <div className="p-12 text-center">
        <div className="flex justify-center mb-4">
          <div className="p-3 bg-slate-800 rounded-full">
            <Search className="w-8 h-8 text-slate-500" />
          </div>
        </div>
        <h3 className="text-lg font-semibold text-white mb-2">
          No Candidates Yet
        </h3>
        <p className="text-slate-400 text-sm">
          Upload CVs and a job description to see AI-ranked candidate results.
        </p>
      </div>
    </Card>
  );
}
