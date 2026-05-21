import io
import pdfplumber
from fastapi import HTTPException


def extract_text_from_pdf(file_bytes: bytes, filename: str = "file.pdf") -> str:
    """
    Extract raw text from a PDF given its bytes.

    Args:
        file_bytes: Raw bytes of the uploaded PDF file.
        filename:   Original filename, used only for error messages.

    Returns:
        A single string containing the text of all pages joined by newlines.

    Raises:
        HTTPException 400: If the bytes cannot be opened as a PDF.
        HTTPException 500: If the extracted text is under 100 characters,
                           which typically means a scanned / image-only PDF.
    """
    try:
        with pdfplumber.open(io.BytesIO(file_bytes)) as pdf:
            pages_text = []
            for page in pdf.pages:
                text = page.extract_text()
                if text:
                    pages_text.append(text)

            full_text = "\n".join(pages_text).strip()

    except Exception as exc:
        raise HTTPException(
            status_code=400,
            detail=f"Could not open '{filename}' as a PDF: {exc}",
        ) from exc

    if len(full_text) < 100:
        raise HTTPException(
            status_code=500,
            detail=(
                f"'{filename}' appears to be a scanned / image-only PDF. "
                "Extractable text is under 100 characters. "
                "Please upload a text-based PDF."
            ),
        )

    return full_text
