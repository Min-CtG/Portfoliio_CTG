import re

with open('artworks.html', 'r', encoding='utf-8') as f:
    html = f.read()

# Replace the HTML container
html = re.sub(
    r'<div id="category-back-btn".*?</section>',
    '''<div id="category-back-btn" style="display: none; width: 100%; max-width: 1400px; margin: 0 auto 2rem auto; padding: 0 4rem;">
        <button onclick="showCategories()" class="btn-primary" style="background: transparent; border: 1px solid var(--primary-color); padding: 0.8rem 1.5rem; font-size: 0.9rem; margin: 0;">&larr; BACK TO CATEGORIES</button>
        <h2 id="current-category-title" style="margin-top: 1.5rem; color: var(--text-color); font-family: var(--font-tech); font-weight: 300; letter-spacing: 2px;">CATEGORY</h2>
    </div>
    
    <div id="dynamic-content-area"></div>''',
    html, flags=re.DOTALL
)

js_update = '''
        function showCategories() {
            const container = document.getElementById('dynamic-content-area');
            const backBtn = document.getElementById('category-back-btn');
            const hero = document.querySelector('.exhibition-hero');
            
            if (window.toggle3DModel) window.toggle3DModel(true);
            
            if (container && typeof artworksData !== 'undefined') {
                backBtn.style.display = 'none';
                hero.style.display = 'flex';
                
                let html = '<section class="portfolio-deck" style="padding-top: 10vh;">';
                artworksData.categories.forEach(cat => {
                    html += `
                    <div class="portfolio-card" onclick="openCategory('${cat.id}')">
                        <div class="card-image-placeholder" style="background: url('${cat.cover}') center/cover; position: relative;">
                        </div>
                        <div class="card-info" style="padding: 1.5rem;">
                            <p>${cat.count} Works</p>
                            <h3>${cat.title}</h3>
                        </div>
                    </div>`;
                });
                html += '</section>';
                container.innerHTML = html;
            }
        }

        function openCategory(catId) {
            const cat = artworksData.categories.find(c => c.id === catId);
            if (!cat) return;
            
            currentWorks = cat.works; 
            
            if (window.toggle3DModel) window.toggle3DModel(false);
            
            const container = document.getElementById('dynamic-content-area');
            const backBtn = document.getElementById('category-back-btn');
            const catTitle = document.getElementById('current-category-title');
            const hero = document.querySelector('.exhibition-hero');
            
            hero.style.display = 'none';
            backBtn.style.display = 'block';
            catTitle.innerText = cat.title.toUpperCase();
            
            if (window.lenis) {
                window.lenis.scrollTo(0, { immediate: true });
            } else {
                window.scrollTo(0, 0);
            }
            
            let html = '';
            
            if (cat.id === "APHANTASIA") {
                const desc1 = "이 작품은 시각적 상상력이 부재한 상태를 뜻하는 아판타시아 증후군과 고대 조각상의 구조적 본질을 결합하여 새로운 해석을 시도한 작업이다. 아판타시아를 겪는 사람들은 머릿속으로 이미지를 시각화하지 못하지만, 이는 오히려 형태와 본질에 대한 독창적인 접근을 가능하게 한다는 점에서 예술적 가능성을 발견할 수 있다.<br><br>고대 조각상의 견고한 형상과 아판타시아의 비물질적 특성은 상반되면서도 조화를 이루며, 이를 통해 시각 예술의 새로운 해석을 탐구했다.<br>작품에서는 고대 조각상의 완전함에 흐릿하거나 추상적인 요소를 더해 '형태를 상상하지 못하는 상상력'이라는 역설적 개념을 시각적으로 구현했다.<br><br>이 작품은 단순한 시각적 아름다움을 넘어 인간의 인지적 다양성과 심리적 경험을 철학적으로 탐구하는 의의를 지닌다.<br>고대 미술의 정형성을 현대적이고 추상적인 디자인 기법으로 재해석함으로써, 보이지 않는 이미지를 시각적으로 구현하는 독창적인 시도를 통해 시각디자인의 융합 가능성을 제시했다.";
                
                const desc2 = "아판타시아 증후군은 머릿속에서<br>이미지를 상상하기 어려운 상태를<br>뜻하지만, 창의성은 단순히 시각적<br>상상력에만 의존하지 않는다.<br>창의성은 문제를 해결하고 새로운<br>관점을 제시하며 독창적인<br>아이디어를 만들어내는 능력이다.<br>당신은 단순히 눈에 보이는 것뿐<br>아니라 감각, 경험, 논리, 그리고<br>독특한 사고 과정을 통해 창의성을<br>발휘할 수 있다. 시각적 이미지를<br>떠올리지 못한다고 해서 당신의<br>상상력이 부족하다고 생각하지<br>말라. 오히려 당신의 특별한 사고<br>방식이 세상에 새로운 영감을 줄<br>가능성이 크다.<br><br>아판타시아를 가진 수많은 사람들이<br>음악, 문학, 과학, 기술 등 다양한<br>분야에서 큰 업적을 이뤘다. 당신의<br>강점은 자신만의 독창적인 방식으로<br>세상을 바라보고, 표현하고,<br>창조하는 데 있다<br><br><strong>&quot;상상이 아닌, 창조로 말하라.&quot;</strong><br>당신의 이야기와 아이디어는 그<br>자체로 충분히 특별하다.";

                const posters = cat.works.filter(w => w.is_poster);
                const others = cat.works.filter(w => !w.is_poster);
                
                html += `<div style="max-width: 1400px; margin: 0 auto; padding: 0 4rem;"><p style="color: var(--text-muted); font-size: 1.1rem; line-height: 1.8; font-family: var(--font-body); margin-bottom: 2rem;">${desc1}</p></div>`;
                
                html += '<section class="portfolio-deck" style="padding-top: 0;">';
                posters.forEach(art => {
                    html += `
                    <div class="portfolio-card" onclick="openProject('${art.id}')">
                        <div class="card-image-placeholder" style="background: url('${art.thumb}') center/cover; position: relative;">
                        </div>
                        <div class="card-info" style="padding: 1.5rem;">
                            <p>${art.sub}</p>
                            <h3>${art.title}</h3>
                        </div>
                    </div>`;
                });
                html += '</section>';
                
                html += `<div style="max-width: 1400px; margin: 2rem auto; padding: 0 4rem;"><p style="color: var(--text-muted); font-size: 1.1rem; line-height: 1.8; font-family: var(--font-body); margin-bottom: 2rem;">${desc2}</p></div>`;
                
                html += '<section class="portfolio-deck" style="padding-top: 0;">';
                others.forEach(art => {
                    html += `
                    <div class="portfolio-card" onclick="openProject('${art.id}')">
                        <div class="card-image-placeholder" style="background: url('${art.thumb}') center/cover; position: relative;">
                        </div>
                        <div class="card-info" style="padding: 1.5rem;">
                            <p>${art.sub}</p>
                            <h3>${art.title}</h3>
                        </div>
                    </div>`;
                });
                html += '</section>';
                
            } else {
                html += '<section class="portfolio-deck" style="padding-top: 0;">';
                cat.works.forEach(art => {
                    html += `
                    <div class="portfolio-card" onclick="openProject('${art.id}')">
                        <div class="card-image-placeholder" style="background: url('${art.thumb}') center/cover; position: relative;">
                        </div>
                        <div class="card-info" style="padding: 1.5rem;">
                            <p>${art.sub}</p>
                            <h3>${art.title}</h3>
                        </div>
                    </div>`;
                });
                html += '</section>';
            }
            
            container.innerHTML = html;
        }
'''

html = re.sub(r'function showCategories\(\) \{.*?container\.innerHTML = html;\s*\}\s*\}', js_update, html, flags=re.DOTALL)
html = re.sub(r'function showCategories\(\) \{.*?deck\.innerHTML = html;\s*\}\s*\}', js_update, html, flags=re.DOTALL) # in case it was the old state

with open('artworks.html', 'w', encoding='utf-8') as f:
    f.write(html)
