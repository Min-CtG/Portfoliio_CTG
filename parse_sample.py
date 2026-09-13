with open("homepage/data/paper_converted.html", "r", encoding="utf-8") as f:
    text = f.read()
start = text.find('<div id="pf1"')
end = text.find('<div id="pf2"')
with open("sample.html", "w", encoding="utf-8") as out:
    out.write(text[start:end])
