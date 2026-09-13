import fitz
import json
import re

doc = fitz.open("homepage/data/paper.pdf")
slides = []

for i in range(len(doc)):
    page = doc[i]
    
    # Extract text blocks
    blocks = page.get_text("blocks")
    
    text_blocks = [b for b in blocks if b[6] == 0]
    if not text_blocks:
        continue
        
    # Sort blocks top-to-bottom, then left-to-right
    text_blocks.sort(key=lambda b: (round(b[1]/20)*20, b[0]))
    
    title = text_blocks[0][4].strip().replace('\n', ' ')
    
    content_blocks = []
    for b in text_blocks[1:]:
        text = b[4].strip()
        text = re.sub(r'\s+', ' ', text)
        if text:
            content_blocks.append(text)
            
    slides.append({
        "page": i + 1,
        "title": title,
        "blocks": content_blocks
    })

with open("homepage/data/paperSlides.js", "w", encoding="utf-8") as f:
    f.write("const paperSlidesData = " + json.dumps(slides, ensure_ascii=False, indent=2) + ";")
