import importlib.util
import os
import sys
from pathlib import Path

pdf_path = r"C:\Users\eliud\OneDrive\Desktop\MyFile\南网样本.pdf"
print("PDF path exists:", os.path.exists(pdf_path))
print("PDF path:", pdf_path)

candidates = []
for mod in ['pypdf', 'PyPDF2', 'pdfplumber', 'fitz', 'pdfminer', 'pdfminer.high_level']:
    spec = importlib.util.find_spec(mod)
    candidates.append((mod, bool(spec)))
print('module checks:', candidates)

for mod in ['pypdf', 'PyPDF2', 'pdfplumber']:
    try:
        if mod == 'pypdf':
            from pypdf import PdfReader
        elif mod == 'PyPDF2':
            from PyPDF2 import PdfReader
        else:
            import pdfplumber
            PdfReader = None
        if PdfReader is not None:
            reader = PdfReader(pdf_path)
            print('pages', len(reader.pages))
            txt = "\n\n".join(page.extract_text() or "" for page in reader.pages[:5])
            print(txt[:4000])
            break
    except Exception as e:
        print(mod, 'failed', repr(e))

if importlib.util.find_spec('fitz'):
    try:
        import fitz
        doc = fitz.open(pdf_path)
        print('fitz pages', len(doc))
        txt = "\n\n".join(page.get_text() for page in doc[:5])
        print(txt[:4000])
    except Exception as e:
        print('fitz failed', repr(e))

for cmd in ['pdftotext', 'mutool']:
    import shutil
    print(cmd, 'exists', shutil.which(cmd))
