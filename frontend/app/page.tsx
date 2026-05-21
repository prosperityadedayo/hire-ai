'use client'

import { useState } from 'react'
import JobDescriptionInput from '@/components/job-description-input'
import CandidateRankings from '@/components/candidate-rankings'
import { Briefcase } from 'lucide-react'

export default function Home() {
  const [jobDescription, setJobDescription] = useState('')
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([])
  const [isAnalyzing, setIsAnalyzing] = useState(false)
  const [results, setResults] = useState<any>(null)

  const handleAnalyze = async () => {
    if (!jobDescription.trim() || uploadedFiles.length === 0) {
      alert('Please enter a job description and upload at least one CV')
      return
    }

    setIsAnalyzing(true)
    // Simulate API call - in a real app, this would send to your backend
    setTimeout(() => {
      // Mock results for demonstration
      setResults({
        candidates: [
          {
            id: 1,
            name: 'Sarah Johnson',
            filename: 'sarah-johnson.pdf',
            matchScore: 92,
            strengths: [
              '8 years of relevant experience',
              'Strong leadership background',
              'Proven track record with similar roles',
              'Excellent communication skills'
            ],
            redFlags: [
              'Recently changed jobs (2x in 3 years)',
              'Gap in employment (6 months)'
            ],
            interviewQuestions: [
              'Can you walk us through your most significant project achievement?',
              'How do you approach team management and delegation?',
              'Tell us about a time you had to learn a completely new skill quickly.'
            ]
          },
          {
            id: 2,
            name: 'Michael Chen',
            filename: 'michael-chen.pdf',
            matchScore: 78,
            strengths: [
              '5 years of experience in the field',
              'Technical expertise matches requirements',
              'Certifications in relevant areas',
              'Positive references'
            ],
            redFlags: [
              'Limited management experience',
              'Education level below preference'
            ],
            interviewQuestions: [
              'What are your long-term career goals?',
              'Describe a challenging situation and how you resolved it.',
              'How do you stay updated with industry trends?'
            ]
          },
          {
            id: 3,
            name: 'Emily Rodriguez',
            filename: 'emily-rodriguez.pdf',
            matchScore: 65,
            strengths: [
              'Relevant degree and certifications',
              'Enthusiastic and quick learner',
              'Good communication skills',
              'Flexible and adaptable'
            ],
            redFlags: [
              'Limited experience (only 2 years)',
              'No direct experience in primary role',
              'May require significant training'
            ],
            interviewQuestions: [
              'What attracted you to this role?',
              'How do you handle feedback and criticism?',
              'Describe your ideal work environment.'
            ]
          }
        ]
      })
      setIsAnalyzing(false)
    }, 2000)
  }

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
              <p className="text-sm text-slate-400">AI-powered candidate ranking for your business</p>
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
          />
        </div>
      </div>
    </main>
  )
}
