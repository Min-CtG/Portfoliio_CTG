import re

with open('js/script.js', 'r', encoding='utf-8') as f:
    js = f.read()

# 1. Add globals
if 'let scrollProgress = 0;' not in js:
    js = js.replace('let mainParticlesMaterial;', '''let mainParticlesMaterial;
let scrollProgress = 0;
window.glassDimmer = 1.0;
window.miniMaterials = [];''')

# 2. Add scrollProgress save
if 'scrollProgress = progress;' not in js:
    js = js.replace('const progress = Math.min(1, scrollY / (window.innerHeight * 0.5));', '''const progress = Math.min(1, scrollY / (window.innerHeight * 0.5));
        scrollProgress = progress;''')

# 3. Remove old opacity update
js = re.sub(r'if \([^)]*particlesMesh\.visible\)\s*\{\s*mainParticlesMaterial\.opacity = 0\.8 \* \(1 - Math\.pow\(progress, 0\.5\)\);\s*\}', '', js)

# 4. Inject glassDimmer update inside animate()
dimmer_logic = '''
        const needGlass = sidebarActive || modalActive;
        
        window.glassDimmer += ((needGlass ? 0.15 : 1.0) - window.glassDimmer) * 0.1;
        
        if (window.particlesMesh && window.particlesMesh.visible && mainParticlesMaterial) {
            mainParticlesMaterial.opacity = 0.8 * (1 - Math.pow(scrollProgress, 0.5)) * window.glassDimmer;
        }
        
        if (window.miniMaterials) {
            window.miniMaterials.forEach(m => {
                m.opacity = 0.8 * window.glassDimmer;
            });
        }
'''
if 'window.glassDimmer +=' not in js:
    js = js.replace('const needGlass = sidebarActive || modalActive;', dimmer_logic)

# 5. Push mini materials
if 'window.miniMaterials.push(material);' not in js:
    js = js.replace('const particlesMesh = new THREE.Points(geometry, material);', '''const particlesMesh = new THREE.Points(geometry, material);
    window.miniMaterials.push(material);''')

with open('js/script.js', 'w', encoding='utf-8') as f:
    f.write(js)
