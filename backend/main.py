from dotenv import load_dotenv
load_dotenv()

from fastapi import FastAPI, UploadFile, File, Form
from fastapi.middleware.cors import CORSMiddleware
from typing import List
from utils.validators import validate_job_description, validate_cv_files
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


@app.post("/api/analyse")
async def analyse(
    job_description: str = Form(...),
    cvs: List[UploadFile] = File(...)
):
    # Validate inputs
    job_description = validate_job_description(job_description)
    validate_cv_files(cvs)

    # Extract text from each PDF
    candidates = []
    for cv in cvs:
        file_bytes = await cv.read()
        text = extract_text_from_pdf(file_bytes, cv.filename)
        candidates.append({"filename": cv.filename, "text": text})

    # Analyse with AI
    ranked = analyze_candidates(job_description, candidates)

    return {
        "success": True,
        "count": len(candidates),
        "candidates": ranked.get("candidates", [])
    }