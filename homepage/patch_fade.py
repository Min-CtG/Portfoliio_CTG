import re

with open('js/script.js', 'r', encoding='utf-8') as f:
    js = f.read()

# Replace toggle3DModel logic
old_toggle_pattern = r'window\.toggle3DModel = function\(show\) \{.*?\};'
new_toggle = '''window.modelFade = 1.0;
    window.toggle3DModel = function(show) {
        if (window.particlesMesh && window.mainParticlesMaterial) {
            if (show) {
                gsap.killTweensOf(window);
                window.particlesMesh.visible = true;
                gsap.to(window, { modelFade: 1.0, duration: 1.0 });
            } else {
                gsap.killTweensOf(window);
                gsap.to(window, { modelFade: 0.0, duration: 1.0, onComplete: () => {
                    window.particlesMesh.visible = false;
                }});
            }
        }
    };'''
js = re.sub(old_toggle_pattern, new_toggle, js, flags=re.DOTALL)

# Replace animate opacity logic
old_animate = r'mainParticlesMaterial\.opacity = 0\.8 \* \(1 - Math\.pow\(scrollProgress, 0\.5\)\) \* window\.glassDimmer;'
new_animate = 'mainParticlesMaterial.opacity = 0.8 * (1 - Math.pow(scrollProgress, 0.5)) * window.glassDimmer * (window.modelFade !== undefined ? window.modelFade : 1.0);'
js = re.sub(old_animate, new_animate, js)

with open('js/script.js', 'w', encoding='utf-8') as f:
    f.write(js)
