from fastapi import FastAPI, UploadFile, File, Form
from fastapi.middleware.cors import CORSMiddleware
from typing import List
from fastapi import FastAPI, UploadFile, File, Form, HTTPException
from fastapi.responses import JSONResponse
from parsers.pdf_parser import extract_text_from_pdf
from services.ai_analyzer import analyze_candidates


app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/health")
def health_check():
    return {"status": "ok"}



app = FastAPI(title="HireAI Backend")

@app.post("/api/analyse")
async def analyse_candidates_endpoint(
    job_description: str = Form(..., description="The criteria to evaluate candidates against."),
    files: List[UploadFile] = File(..., description="One or more candidate CV PDF files.")
):
    """
    Accepts a job description and multiple CV files.
    Parses each PDF, analyzes the candidates using GPT-4o, 
    and returns a ranked evaluation payload.
    """
    # 1. Validate inputs
    if not job_description.strip():
        raise HTTPException(status_code=400, detail="Job description cannot be empty.")
    
    if not files:
        raise HTTPException(status_code=400, detail="At least one CV file must be uploaded.")

    parsed_candidates = []

    # 2. Extract text from each uploaded PDF
    for file in files:
        # Read the raw file bytes
        file_bytes = await file.read()
        
        # Extract text using your Commit 1 PDF parser
        text_content = extract_text_from_pdf(file_bytes, filename=file.filename)
        
        # Append structured data for the AI Analyzer payload
        parsed_candidates.append({
            "filename": file.filename,
            "text": text_content
        })

    # 3. Send parsed data to the AI Analyzer (Commit 2)
    analysis_results = analyze_candidates(job_description, parsed_candidates)

    # 4. Return the structured, ranked response back to the client
    return JSONResponse(
        status_code=200,
        content={
            "success": True,
            "total_candidates": len(parsed_candidates),
            "data": analysis_results.get("candidates", [])
        }
    )