import re

with open('artworks.html', 'r', encoding='utf-8') as f:
    html = f.read()

# The new desc2 string
new_desc2 = 'const desc2 = "아판타시아 증후군은 머릿속에서 이미지를 상상하기 어려운 상태를 뜻하지만, 창의성은 단순히 시각적 상상력에만 의존하지 않는다. 창의성은 문제를 해결하고 새로운 관점을 제시하며 독창적인 아이디어를 만들어내는 능력이다. 당신은 단순히 눈에 보이는 것뿐 아니라 감각, 경험, 논리, 그리고 독특한 사고 과정을 통해 창의성을 발휘할 수 있다. 시각적 이미지를 떠올리지 못한다고 해서 당신의 상상력이 부족하다고 생각하지 말라. 오히려 당신의 특별한 사고 방식이 세상에 새로운 영감을 줄 가능성이 크다.<br><br>아판타시아를 가진 수많은 사람들이 음악, 문학, 과학, 기술 등 다양한 분야에서 큰 업적을 이뤘다. 당신의 강점은 자신만의 독창적인 방식으로 세상을 바라보고, 표현하고, 창조하는 데 있다.<br><br><strong>&quot;상상이 아닌, 창조로 말하라.&quot;</strong><br>당신의 이야기와 아이디어는 그 자체로 충분히 특별하다.";'

# We need to replace the old desc2 which has multiple <br> tags.
# We can just use a regex to find `const desc2 = "...";` and replace it.
html = re.sub(r'const desc2 = "[^"]*";', new_desc2, html)

with open('artworks.html', 'w', encoding='utf-8') as f:
    f.write(html)
