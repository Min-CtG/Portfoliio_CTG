import fitz
import os

pdf_path = "homepage/data/paper.pdf"
out_dir = "homepage/data/slides"

if not os.path.exists(out_dir):
    os.makedirs(out_dir)

doc = fitz.open(pdf_path)
for i in range(len(doc)):
    page = doc[i]
    # 2x scale for crisp images
    mat = fitz.Matrix(2.0, 2.0)
    pix = page.get_pixmap(matrix=mat)
    out_path = os.path.join(out_dir, f"slide_{i+1}.png")
    pix.save(out_path)

print(f"Done generating {len(doc)} images.")
