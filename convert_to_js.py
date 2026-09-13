import json

with open(r"homepage/data/paper_converted.html", "r", encoding="utf-8") as f:
    content = f.read()

js_content = "const paperHtmlString = " + json.dumps(content) + ";"

with open(r"homepage/data/paperHtmlData.js", "w", encoding="utf-8") as f:
    f.write(js_content)

print("JS generated successfully.")
