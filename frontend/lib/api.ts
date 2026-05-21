const DEFAULT_API_BASE_URL = "https://hire-ai-3qmb.onrender.com";

export const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_BASE_URL?.replace(/\/$/, "") ??
  DEFAULT_API_BASE_URL;

export interface AnalysisCandidate {
  filename: string;
  name: string;
  matchScore: number;
  matchLabel?: string;
  strengths: string[];
  redFlags: string[];
  interviewQuestions: string[];
  rank?: number;
}

export interface AnalysisResponse {
  success: boolean;
  count: number;
  candidates: AnalysisCandidate[];
}

export async function analyseCandidates(
  jobDescription: string,
  cvs: File[],
): Promise<AnalysisResponse> {
  const formData = new FormData();
  formData.append("job_description", jobDescription);

  cvs.forEach((file) => {
    formData.append("cvs", file);
  });

  const response = await fetch(new URL("/api/analyse", API_BASE_URL), {
    method: "POST",
    body: formData,
  });

  const payload = await response.json().catch(() => null);

  if (!response.ok) {
    const detail = payload?.detail;
    const message =
      typeof detail === "string"
        ? detail
        : detail?.message ||
          payload?.message ||
          "Failed to analyse candidates.";

    throw new Error(message);
  }

  return payload as AnalysisResponse;
}
