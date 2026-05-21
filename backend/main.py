from fastapi import FastAPI, UploadFile, File, Form
from fastapi.middleware.cors import CORSMiddleware
from typing import List
from utils.validators import validate_job_description, validate_cv_files

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

    # TODO: Extract text from PDFs (Dev 2)
    # TODO: Send to AI for analysis (Dev 2)

    # Placeholder response for now
    return {
        "success": True,
        "count": len(cvs),
        "candidates": []
    }