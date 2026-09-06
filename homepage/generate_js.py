import json
import os

artworks_root = 'assets/ARTWORKS'
categories = []

for cat in os.listdir(artworks_root):
    if cat == 'images': continue
    cat_path = os.path.join(artworks_root, cat)
    if not os.path.isdir(cat_path): continue
    
    desc_path = os.path.join(cat_path, 'desc.txt')
    desc = ''
    if os.path.exists(desc_path):
        with open(desc_path, 'r', encoding='utf-8') as f:
            desc = f.read()
            
    files = [f for f in os.listdir(cat_path) if f != 'desc.txt']
    
    works_map = {}
    for f in files:
        base = f.replace('_thumb.webp', '').replace('_full.webp', '').replace('.jpg', '').replace('.png', '')
        if base not in works_map:
            works_map[base] = {'thumb': None, 'full': None}
            
        if f.endswith('_thumb.webp'): works_map[base]['thumb'] = f
        elif f.endswith('_full.webp'): works_map[base]['full'] = f
        else:
            if not works_map[base]['full']: works_map[base]['full'] = f
            if not works_map[base]['thumb']: works_map[base]['thumb'] = f
            
    works = []
    cover = None
    for k in sorted(works_map.keys()):
        item = works_map[k]
        if item['thumb'] and not item['full']: item['full'] = item['thumb']
        if item['full'] and not item['thumb']: item['thumb'] = item['full']
        if not item['full']: continue
        
        title = k.replace('_', ' ').title()
        
        works.append({
            'id': ''.join(e for e in k if e.isalnum() or e == '_'),
            'sub': '2026',
            'title': title,
            'desc': 'A digital restoration and exploration of form and space. Rendered in full high-fidelity 3D.',
            'thumb': 'assets/ARTWORKS/' + cat + '/' + item['thumb'],
            'image': 'assets/ARTWORKS/' + cat + '/' + item['full']
        })
        
        # Specifically look for PORTFOLIO for cover
        if 'PORTFOLIO' in k.upper():
            cover = 'assets/ARTWORKS/' + cat + '/' + item['thumb']
            
    if not cover and len(works) > 0:
        cover = works[0]['thumb']
            
    categories.append({
        'id': ''.join(e for e in cat if e.isalnum() or e == '_'),
        'title': cat,
        'cover': cover,
        'count': len(works),
        'desc': desc,
        'works': works
    })

categories.sort(key=lambda x: x['title'])
out = {'categories': categories}

with open('data/artworksData.js', 'w', encoding='utf-8') as f:
    f.write('const artworksData = ' + json.dumps(out, ensure_ascii=False, indent=4) + ';')

print('Generated successfully with Python!')
