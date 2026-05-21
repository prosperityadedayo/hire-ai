import os
import json
from typing import List, Dict, Any
from openai import OpenAI
from fastapi import HTTPException

# Initialize the OpenAI client. 
# It will automatically look for the OPENAI_API_KEY environment variable.
client = OpenAI()

def analyze_candidates(job_description: str, candidates: List[Dict[str, str]]) -> Dict[str, Any]:
    """
    Sends candidate CV texts and the job description to GPT-4o.
    Returns a ranked JSON object containing assessments for each candidate.
    
    Args:
        job_description: The text of the target job description.
        candidates: A list of dicts, each with 'filename' and 'text'.
    """
    if not os.getenv("OPENAI_API_KEY"):
        raise HTTPException(
            status_code=500, 
            detail="OPENAI_API_KEY is not set in the environment variables."
        )

    # Build the structured prompt
    prompt = f"Job Description:\n{job_description}\n\n"
    prompt += "Candidates to assess:\n"
    for cand in candidates:
        prompt += f"--- START CANDIDATE (Filename: {cand['filename']}) ---\n"
        prompt += f"{cand['text']}\n"
        prompt += f"--- END CANDIDATE ---\n\n"

    system_instruction = (
        "You are an expert HR AI assistant. Analyze the provided CVs against the job description. "
        "You must return a valid JSON object containing an array of candidate assessments. "
        "Sort the candidates automatically by their matchScore in descending order and assign a 'rank' "
        "integer (1 being the best match).\n\n"
        "The output must strictly follow this JSON schema:\n"
        "{\n"
        "  \"candidates\": [\n"
        "    {\n"
        "      \"filename\": \"string\",\n"
        "      \"name\": \"Extracted Name or 'Unknown'\",\n"
        "      \"matchScore\": 85, // integer 0-100\n"
        "      \"matchLabel\": \"Strong Match\" | \"Partial Match\" | \"Weak Match\",\n"
        "      \"strengths\": [\"array of 2-4 strings\"],\n"
        "      \"redFlags\": [\"array of 1-3 strings\"],\n"
        "      \"interviewQuestions\": [\"exactly 3 tailored questions\"],\n"
        "      \"rank\": 1 // integer based on sorting by matchScore\n"
        "    }\n"
        "  ]\n"
        "}"
    )

    try:
        # Requesting GPT-4o with JSON Mode enabled
        response = client.chat.completions.create(
            model="gpt-4o",
            response_format={"type": "json_object"},
            messages=[
                {"role": "system", "content": system_instruction},
                {"role": "user", "content": prompt}
            ],
            temperature=0.2 # Lower temperature for more consistent, analytical scoring
        )

        # Parse the raw string response into a Python dictionary
        result = json.loads(response.choices[0].message.content)
        return result

    except Exception as exc:
        raise HTTPException(
            status_code=500,
            detail=f"Failed to analyze candidates via OpenAI API: {exc}"
        ) from exc