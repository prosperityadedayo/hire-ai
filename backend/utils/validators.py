from fastapi import HTTPException, UploadFile
from typing import List


def validate_job_description(job_description: str) -> str:
    """Validate and clean job description."""
    if not job_description or not job_description.strip():
        raise HTTPException(
            status_code=400,
            detail={
                "code": "MISSING_JOB_DESCRIPTION",
                "message": "job_description field is required"
            }
        )
    return job_description.strip()


def validate_cv_files(cvs: List[UploadFile]) -> None:
    """Validate CV file list."""
    if not cvs:
        raise HTTPException(
            status_code=400,
            detail={
                "code": "NO_FILES_UPLOADED",
                "message": "At least one CV file is required"
            }
        )

    if len(cvs) > 5:
        raise HTTPException(
            status_code=400,
            detail={
                "code": "TOO_MANY_FILES",
                "message": "Maximum 5 CVs per request"
            }
        )

    for cv in cvs:
        if not cv.filename or not cv.filename.endswith(".pdf"):
            raise HTTPException(
                status_code=400,
                detail={
                    "code": "INVALID_FILE_TYPE",
                    "message": f"{cv.filename} is not a PDF"
                }
            )