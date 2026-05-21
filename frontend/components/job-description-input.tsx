'use client'

import { useRef, useState } from 'react'
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import { Card } from '@/components/ui/card'
import { Upload, X, FileText, Loader2 } from 'lucide-react'

interface JobDescriptionInputProps {
  jobDescription: string
  setJobDescription: (value: string) => void
  uploadedFiles: File[]
  setUploadedFiles: (files: File[]) => void
  onAnalyze: () => void
  isAnalyzing: boolean
}

export default function JobDescriptionInput({
  jobDescription,
  setJobDescription,
  uploadedFiles,
  setUploadedFiles,
  onAnalyze,
  isAnalyzing
}: JobDescriptionInputProps) {
  const fileInputRef = useRef<HTMLInputElement>(null)
  const [dragActive, setDragActive] = useState(false)

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true)
    } else if (e.type === 'dragleave') {
      setDragActive(false)
    }
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setDragActive(false)

    const files = Array.from(e.dataTransfer.files).filter(
      file => file.type === 'application/pdf'
    )

    addFiles(files)
  }

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const files = Array.from(e.target.files)
      addFiles(files)
    }
  }

  const addFiles = (newFiles: File[]) => {
    setUploadedFiles([...uploadedFiles, ...newFiles])
  }

  const removeFile = (index: number) => {
    setUploadedFiles(uploadedFiles.filter((_, i) => i !== index))
  }

  return (
    <div className="space-y-6">
      {/* Job Description Section */}
      <Card className="bg-slate-900 border-slate-800">
        <div className="p-6">
          <label className="block text-sm font-semibold text-white mb-3">
            Job Description
          </label>
          <Textarea
            placeholder="Paste the complete job description here. Include role responsibilities, required skills, experience level, and any other relevant details..."
            value={jobDescription}
            onChange={(e) => setJobDescription(e.target.value)}
            className="min-h-48 bg-slate-800 border-slate-700 text-white placeholder:text-slate-500"
          />
        </div>
      </Card>

      {/* File Upload Section */}
      <Card className="bg-slate-900 border-slate-800">
        <div className="p-6">
          <label className="block text-sm font-semibold text-white mb-4">
            Upload Candidate CVs
          </label>

          {/* Drag & Drop Zone */}
          <div
            onDragEnter={handleDrag}
            onDragLeave={handleDrag}
            onDragOver={handleDrag}
            onDrop={handleDrop}
            onClick={() => fileInputRef.current?.click()}
            className={`relative border-2 border-dashed rounded-lg p-8 text-center cursor-pointer transition-all ${
              dragActive
                ? 'border-blue-500 bg-blue-500/5'
                : 'border-slate-700 bg-slate-800/50 hover:border-blue-500/50 hover:bg-slate-800'
            }`}
          >
            <input
              ref={fileInputRef}
              type="file"
              multiple
              accept=".pdf"
              onChange={handleFileInput}
              className="hidden"
            />
            <div className="flex flex-col items-center gap-2">
              <Upload className="w-8 h-8 text-blue-400" />
              <div>
                <p className="text-sm font-medium text-white">Drag PDF files here</p>
                <p className="text-xs text-slate-400">or click to browse</p>
              </div>
            </div>
          </div>

          {/* Uploaded Files List */}
          {uploadedFiles.length > 0 && (
            <div className="mt-4 space-y-2">
              <p className="text-xs font-medium text-slate-400 uppercase tracking-wide">
                Uploaded Files ({uploadedFiles.length})
              </p>
              <div className="space-y-2">
                {uploadedFiles.map((file, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between bg-slate-800 rounded-lg px-4 py-3 border border-slate-700"
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <FileText className="w-4 h-4 text-blue-400 flex-shrink-0" />
                      <span className="text-sm text-white truncate">{file.name}</span>
                    </div>
                    <button
                      onClick={() => removeFile(index)}
                      className="p-1 hover:bg-slate-700 rounded transition-colors flex-shrink-0"
                      aria-label="Remove file"
                    >
                      <X className="w-4 h-4 text-slate-400 hover:text-red-400" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </Card>

      {/* Analyze Button */}
      <Button
        onClick={onAnalyze}
        disabled={isAnalyzing || !jobDescription.trim() || uploadedFiles.length === 0}
        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isAnalyzing ? (
          <>
            <Loader2 className="w-4 h-4 mr-2 animate-spin" />
            Analysing Candidates...
          </>
        ) : (
          'Analyse Candidates'
        )}
      </Button>
    </div>
  )
}
