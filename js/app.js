/**
 * Aplicación de Consulta Normativa y Análisis Ecológico de Colombia
 * Versión Limpia Editorial y Botánica
 */

document.addEventListener('DOMContentLoaded', () => {
    // Estado global de la aplicación
    const state = {
        currentView: 'leyes',
        selectedCategory: 'all',
        searchQuery: '',
        favorites: JSON.parse(localStorage.getItem('eco_normativa_favs') || '[]'),
        fontSizeLevel: 0,
        chartsInitialized: false,
        chartInstances: {}
    };

    // Referencias al DOM
    const navButtons = document.querySelectorAll('.nav-tab-btn');
    const viewSections = document.querySelectorAll('.view-section');
    const searchInput = document.getElementById('mainSearchInput');
    const searchClearBtn = document.getElementById('searchClearBtn');
    const searchSubmitBtn = document.getElementById('searchSubmitBtn');
    const categoryTagsContainer = document.getElementById('categoryTags');
    const lawsContainer = document.getElementById('lawsGrid');
    const articlesContainer = document.getElementById('articlesResultsList');
    const timelineContainer = document.getElementById('timelineContainer');
    const faqContainer = document.getElementById('faqContainer');
    const favoritesContainer = document.getElementById('favoritesGrid');
    const lawModal = document.getElementById('lawModal');
    const modalBody = document.getElementById('modalContentBody');
    const modalCloseBtn = document.getElementById('modalCloseBtn');
    const toastContainer = document.getElementById('toastContainer');
    const quickLawButtons = document.querySelectorAll('.law-quick-btn');

    // Inicialización
    initCategories();
    renderLawsGrid();
    renderTimeline();
    renderFaqGrid();
    initCrimeCalculator();
    setupEventListeners();

    // ==========================================
    // 1. RENDERIZADO DE CATEGORÍAS & FILTROS
    // ==========================================
    function initCategories() {
        if (!categoryTagsContainer) return;
        categoryTagsContainer.innerHTML = '';

        NORMATIVA_DATA.tematicas.forEach(cat => {
            const btn = document.createElement('button');
            btn.className = `chip-btn ${state.selectedCategory === cat.id ? 'active' : ''}`;
            btn.innerHTML = `<i data-lucide="${cat.icono}" style="width: 15px; height: 15px;"></i> ${cat.nombre}`;
            btn.addEventListener('click', () => {
                state.selectedCategory = cat.id;
                document.querySelectorAll('.chip-btn').forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                applyFiltersAndSearch();
            });
            categoryTagsContainer.appendChild(btn);
        });
        if (window.lucide) lucide.createIcons();
    }

    // ==========================================
    // 2. RENDERIZADO DE CARDS DE LEYES (SIN HASHTAGS Y CON FOTOS ÚNICAS)
    // ==========================================
    function renderLawsGrid(filteredLeyes = NORMATIVA_DATA.leyes) {
        if (!lawsContainer) return;
        lawsContainer.innerHTML = '';

        if (filteredLeyes.length === 0) {
            lawsContainer.innerHTML = `
                <div style="grid-column: 1 / -1; background: #fff; padding: 48px; text-align: center; border-radius: var(--radius-lg); border: 1px solid var(--border-subtle);">
                    <i data-lucide="search-x" style="width: 48px; height: 48px; color: var(--primary-moss); margin-bottom: 12px;"></i>
                    <h3 style="font-size: 1.3rem; color: var(--primary-forest); margin-bottom: 8px;">No se encontraron normas con los criterios ingresados</h3>
                    <p style="color: var(--text-muted); font-size: 0.95rem;">Prueba buscando términos como "deforestación", "ciudades verdes", "SINA", "precaución" o "2025".</p>
                </div>
            `;
            if (window.lucide) lucide.createIcons();
            return;
        }

        filteredLeyes.forEach(ley => {
            const isFav = state.favorites.some(f => f.id === ley.id && f.type === 'ley');
            const card = document.createElement('div');
            card.className = 'editorial-law-card';
            card.innerHTML = `
                <div>
                    <div class="law-card-image-wrap">
                        <img src="${ley.imagen}" alt="${ley.tituloCorto}" class="law-card-img" loading="lazy">
                        <span class="law-card-badge-floating">${ley.tipo} ${ley.numero}</span>
                        <span class="law-card-year-pill"><i data-lucide="calendar" style="width: 12px; height: 12px; display: inline-block; vertical-align: middle;"></i> ${ley.anio}</span>
                    </div>

                    <div class="law-card-body">
                        <h3 class="law-card-title">${ley.tituloCorto}</h3>
                        <p class="law-card-fulltitle" title="${ley.tituloCompleto}">${ley.tituloCompleto}</p>

                        ${ley.estadisticaDestacada ? `
                            <div class="law-stat-highlight-box">
                                <div class="law-stat-number">${ley.estadisticaDestacada.cifra}</div>
                                <div class="law-stat-label">${ley.estadisticaDestacada.etiqueta}: ${ley.estadisticaDestacada.detalle}</div>
                            </div>
                        ` : ''}

                        <p class="law-card-desc">${highlightText(ley.descripcionBreve, state.searchQuery)}</p>

                        <div class="law-card-tags">
                            ${ley.ejesTematicos.map(tag => `<span class="law-tag-chip">${tag}</span>`).join('')}
                        </div>
                    </div>
                </div>

                <div class="law-card-actions-row">
                    <button class="btn-consultar-norma" data-law-id="${ley.id}">
                        <span>Consultar Norma</span>
                        <i data-lucide="arrow-right" style="width: 16px; height: 16px;"></i>
                    </button>
                    <button class="btn-bookmark-card ${isFav ? 'active' : ''}" data-fav-id="${ley.id}" data-fav-type="ley" title="${isFav ? 'Quitar de favoritos' : 'Guardar en favoritos'}">
                        <i data-lucide="bookmark" style="width: 18px; height: 18px; ${isFav ? 'fill: currentColor;' : ''}"></i>
                    </button>
                </div>
            `;
            lawsContainer.appendChild(card);
        });

        // Event listeners
        lawsContainer.querySelectorAll('.btn-consultar-norma').forEach(btn => {
            btn.addEventListener('click', () => {
                const lawId = btn.getAttribute('data-law-id');
                openLawModal(lawId);
            });
        });

        lawsContainer.querySelectorAll('.btn-bookmark-card').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.stopPropagation();
                const id = btn.getAttribute('data-fav-id');
                toggleFavorite(id, 'ley');
            });
        });

        if (window.lucide) lucide.createIcons();
    }

    // ==========================================
    // 3. RENDERIZADO DE GRÁFICAS AMBIENTALES (CHART.JS)
    // ==========================================
    function initEnvironmentalCharts() {
        if (state.chartsInitialized || !window.Chart) return;

        const dataGraficos = NORMATIVA_DATA.graficosAmbientales;

        // Chart 1: Deforestación
        const ctxDeforestacion = document.getElementById('chartDeforestacion');
        if (ctxDeforestacion) {
            state.chartInstances.deforestacion = new Chart(ctxDeforestacion, {
                type: 'line',
                data: {
                    labels: dataGraficos.deforestacion.labels,
                    datasets: [{
                        label: 'Hectáreas Deforestadas / Año',
                        data: dataGraficos.deforestacion.valores,
                        borderColor: '#274324',
                        backgroundColor: 'rgba(62, 99, 56, 0.15)',
                        borderWidth: 3,
                        fill: true,
                        tension: 0.35,
                        pointBackgroundColor: '#C25E3E',
                        pointBorderColor: '#FFFFFF',
                        pointBorderWidth: 2,
                        pointRadius: 5
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                        legend: { display: false },
                        tooltip: {
                            callbacks: {
                                label: (ctx) => `${ctx.parsed.y.toLocaleString()} hectáreas`
                            }
                        }
                    },
                    scales: {
                        y: {
                            beginAtZero: true,
                            grid: { color: '#EAE5D9' },
                            ticks: {
                                callback: (v) => `${(v / 1000).toFixed(0)}k ha`
                            }
                        },
                        x: { grid: { display: false } }
                    }
                }
            });
        }

        // Chart 2: Espacio Verde Urbano
        const ctxEspacio = document.getElementById('chartEspacioVerde');
        if (ctxEspacio) {
            state.chartInstances.espacioVerde = new Chart(ctxEspacio, {
                type: 'bar',
                data: {
                    labels: dataGraficos.espacioVerde.labels,
                    datasets: [{
                        label: 'm² de espacio verde / habitante',
                        data: dataGraficos.espacioVerde.valores,
                        backgroundColor: [
                            '#274324',
                            '#5B8A4E',
                            '#5B8A4E',
                            '#5B8A4E',
                            '#C25E3E',
                            '#5B8A4E',
                            '#5B8A4E'
                        ],
                        borderRadius: 8
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                        legend: { display: false },
                        tooltip: {
                            callbacks: {
                                label: (ctx) => `${ctx.parsed.y} m²/hab`
                            }
                        }
                    },
                    scales: {
                        y: {
                            beginAtZero: true,
                            grid: { color: '#EAE5D9' },
                            ticks: { callback: (v) => `${v} m²` }
                        },
                        x: { grid: { display: false } }
                    }
                }
            });
        }

        // Chart 3: Áreas Protegidas SINAP
        const ctxAreas = document.getElementById('chartAreasProtegidas');
        if (ctxAreas) {
            state.chartInstances.areasProtegidas = new Chart(ctxAreas, {
                type: 'line',
                data: {
                    labels: dataGraficos.areasProtegidas.labels,
                    datasets: [{
                        label: 'Millones de Hectáreas Protegidas',
                        data: dataGraficos.areasProtegidas.valores,
                        borderColor: '#10B981',
                        backgroundColor: 'rgba(16, 185, 129, 0.12)',
                        borderWidth: 3,
                        fill: true,
                        tension: 0.3,
                        pointBackgroundColor: '#274324',
                        pointBorderColor: '#FFFFFF',
                        pointBorderWidth: 2,
                        pointRadius: 5
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                        legend: { display: false },
                        tooltip: {
                            callbacks: {
                                label: (ctx) => `${ctx.parsed.y} Millones de Hectáreas`
                            }
                        }
                    },
                    scales: {
                        y: {
                            beginAtZero: true,
                            grid: { color: '#EAE5D9' },
                            ticks: { callback: (v) => `${v} M ha` }
                        },
                        x: { grid: { display: false } }
                    }
                }
            });
        }

        // Chart 4: Emisiones GEI por Sector
        const ctxEmisiones = document.getElementById('chartEmisionesGEI');
        if (ctxEmisiones) {
            state.chartInstances.emisionesGEI = new Chart(ctxEmisiones, {
                type: 'doughnut',
                data: {
                    labels: dataGraficos.emisionesGEI.labels,
                    datasets: [{
                        data: dataGraficos.emisionesGEI.valores,
                        backgroundColor: [
                            '#C25E3E',
                            '#496E3D',
                            '#D97706',
                            '#274324',
                            '#8FA28D'
                        ],
                        borderWidth: 2,
                        borderColor: '#FFFFFF'
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                        legend: {
                            position: 'bottom',
                            labels: {
                                boxWidth: 12,
                                font: { size: 11, family: 'Outfit' }
                            }
                        },
                        tooltip: {
                            callbacks: {
                                label: (ctx) => ` ${ctx.label}: ${ctx.parsed}%`
                            }
                        }
                    }
                }
            });
        }

        state.chartsInitialized = true;
    }

    // ==========================================
    // 4. BÚSQUEDA Y RENDERIZADO DE ARTÍCULOS
    // ==========================================
    function renderArticlesList(articles) {
        if (!articlesContainer) return;
        articlesContainer.innerHTML = '';

        const counterElem = document.getElementById('articlesResultsCount');
        if (counterElem) counterElem.textContent = `${articles.length} artículos`;

        if (articles.length === 0) {
            articlesContainer.innerHTML = `
                <div style="background: #fff; padding: 48px; text-align: center; border-radius: var(--radius-lg); border: 1px solid var(--border-subtle);">
                    <i data-lucide="file-search" style="width: 48px; height: 48px; color: var(--primary-moss); margin-bottom: 12px;"></i>
                    <h3 style="font-size: 1.3rem; color: var(--primary-forest); margin-bottom: 8px;">No se encontraron artículos que coincidan</h3>
                    <p style="color: var(--text-muted); font-size: 0.95rem;">Intenta con palabras clave como "delito", "fauna", "cambio climático", "espacios verdes", o "licencia".</p>
                </div>
            `;
            if (window.lucide) lucide.createIcons();
            return;
        }

        articles.forEach(art => {
            const isFav = state.favorites.some(f => f.id === `${art.lawId}_${art.numero}` && f.type === 'articulo');
            const card = document.createElement('div');
            card.className = 'editorial-article-card';
            card.innerHTML = `
                <div class="article-header-meta">
                    <div style="display: flex; align-items: center; gap: 10px;">
                        <span class="article-norm-pill">${art.lawTipo} ${art.lawNumero} (${art.lawAnio})</span>
                        <strong style="color: var(--primary-forest); font-size: 1.1rem;">${art.numero}</strong>
                    </div>
                    <span style="font-size: 0.8rem; color: var(--text-muted); background: var(--bg-subtle); padding: 3px 10px; border-radius: var(--radius-full); font-weight: 600;">${art.categoria}</span>
                </div>
                <h4 class="article-title-text">${highlightText(art.titulo, state.searchQuery)}</h4>
                <div class="article-quote-box">
                    "${highlightText(art.extracto, state.searchQuery)}"
                </div>
                <p class="article-analysis-box">
                    <strong>Análisis e Impacto Práctico:</strong> ${highlightText(art.analisis, state.searchQuery)}
                </p>
                ${art.penaPrision ? `
                    <div class="article-penalties-row">
                        <span class="article-pena-tag">
                            <i data-lucide="shield-alert" style="width: 14px; height: 14px; display: inline-block; vertical-align: middle;"></i> Prisión: ${art.penaPrision}
                        </span>
                        <span class="article-multa-tag">
                            <i data-lucide="coins" style="width: 14px; height: 14px; display: inline-block; vertical-align: middle;"></i> Multa: ${art.multaSMLMV}
                        </span>
                    </div>
                ` : ''}
                <div class="article-footer-actions">
                    <button class="btn-editorial-action btn-copy-citation" data-citation="${art.lawTipo} ${art.lawNumero} de ${art.lawAnio}, ${art.numero} - ${art.titulo}">
                        <i data-lucide="copy" style="width: 14px; height: 14px;"></i>
                        <span>Copiar Cita</span>
                    </button>
                    <button class="btn-editorial-action btn-fav-art ${isFav ? 'active' : ''}" data-art-id="${art.lawId}_${art.numero}" data-law-id="${art.lawId}" data-art-num="${art.numero}" data-art-title="${art.titulo}">
                        <i data-lucide="bookmark" style="width: 14px; height: 14px; ${isFav ? 'fill: currentColor;' : ''}"></i>
                        <span>${isFav ? 'Guardado' : 'Guardar'}</span>
                    </button>
                    <button class="btn-editorial-action btn-view-full-law" data-law-id="${art.lawId}">
                        <i data-lucide="external-link" style="width: 14px; height: 14px;"></i>
                        <span>Ver Ley Completa</span>
                    </button>
                </div>
            `;
            articlesContainer.appendChild(card);
        });

        // Event listeners
        articlesContainer.querySelectorAll('.btn-copy-citation').forEach(btn => {
            btn.addEventListener('click', () => {
                const citation = btn.getAttribute('data-citation');
                navigator.clipboard.writeText(citation).then(() => {
                    showToast('Cita legal copiada al portapapeles', 'success');
                });
            });
        });

        articlesContainer.querySelectorAll('.btn-fav-art').forEach(btn => {
            btn.addEventListener('click', () => {
                const artId = btn.getAttribute('data-art-id');
                const lawId = btn.getAttribute('data-law-id');
                const artNum = btn.getAttribute('data-art-num');
                const artTitle = btn.getAttribute('data-art-title');
                toggleFavorite(artId, 'articulo', { lawId, artNum, artTitle });
            });
        });

        articlesContainer.querySelectorAll('.btn-view-full-law').forEach(btn => {
            btn.addEventListener('click', () => {
                const lawId = btn.getAttribute('data-law-id');
                openLawModal(lawId);
            });
        });

        if (window.lucide) lucide.createIcons();
    }

    // ==========================================
    // 5. LÍNEA DE TIEMPO EVOLUTIVA (CON FOTOS ESPECÍFICAS)
    // ==========================================
    function renderTimeline() {
        if (!timelineContainer) return;
        timelineContainer.innerHTML = '';

        NORMATIVA_DATA.lineaTiempoEvolutiva.forEach(item => {
            const node = document.createElement('div');
            node.className = 'timeline-editorial-item';
            node.innerHTML = `
                <div class="timeline-bullet-node"></div>
                <div class="timeline-card-content" style="display: flex; gap: 20px; align-items: center; flex-wrap: wrap;">
                    <img src="${item.imagen}" alt="${item.norma}" style="width: 90px; height: 90px; border-radius: var(--radius-md); object-fit: cover; box-shadow: var(--shadow-soft);">
                    <div style="flex: 1; min-width: 240px;">
                        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 4px;">
                            <span class="timeline-year-badge">${item.anio}</span>
                            <span class="timeline-hito-pill">${item.hito}</span>
                        </div>
                        <h3 class="timeline-norma-name">${item.norma}</h3>
                        <p class="timeline-desc-text">${item.impacto}</p>
                    </div>
                </div>
            `;
            timelineContainer.appendChild(node);
        });
    }

    // ==========================================
    // 6. CASOS PRÁCTICOS & FAQ
    // ==========================================
    function renderFaqGrid() {
        if (!faqContainer) return;
        faqContainer.innerHTML = '';

        NORMATIVA_DATA.casosPracticos.forEach(caso => {
            const card = document.createElement('div');
            card.className = 'faq-editorial-card';
            card.innerHTML = `
                <div class="faq-badge-top">Pregunta / Escenario Jurídico</div>
                <h4 class="faq-question-title">${caso.pregunta}</h4>
                <span class="faq-norm-tag"><i data-lucide="scale" style="width: 12px; height: 12px; display: inline-block; vertical-align: middle;"></i> ${caso.leyPrincipal}</span>
                <p class="faq-answer-text">${caso.respuesta}</p>
            `;
            faqContainer.appendChild(card);
        });
        if (window.lucide) lucide.createIcons();
    }

    // ==========================================
    // 7. CALCULADOR DE DELITOS (LEY 2111)
    // ==========================================
    function initCrimeCalculator() {
        const selectCrime = document.getElementById('calcCrimeSelect');
        const agravantesContainer = document.getElementById('calcAgravantesList');
        const penaDisplay = document.getElementById('calcPenaOutput');
        const multaDisplay = document.getElementById('calcMultaOutput');
        const conductDesc = document.getElementById('calcConductDesc');
        const cautelarDesc = document.getElementById('calcCautelarDesc');
        const artBadge = document.getElementById('calcArtBadge');

        if (!selectCrime) return;

        selectCrime.innerHTML = '';
        NORMATIVA_DATA.calculadorDelitos.forEach(crime => {
            const opt = document.createElement('option');
            opt.value = crime.id;
            opt.textContent = `${crime.nombre} (${crime.articulo})`;
            selectCrime.appendChild(opt);
        });

        function updateCalculator() {
            const selectedId = selectCrime.value;
            const crime = NORMATIVA_DATA.calculadorDelitos.find(c => c.id === selectedId);
            if (!crime) return;

            if (artBadge) artBadge.textContent = crime.articulo;
            if (conductDesc) conductDesc.textContent = crime.conducta;
            if (cautelarDesc) cautelarDesc.textContent = crime.medidasCautelares;

            agravantesContainer.innerHTML = '';
            crime.agravantes.forEach((agr, idx) => {
                const label = document.createElement('label');
                label.className = 'crime-checkbox-card';
                label.innerHTML = `
                    <input type="checkbox" class="agravante-checkbox" data-index="${idx}">
                    <span>${agr.texto} <strong style="color: var(--primary-forest); font-size: 0.8rem;">(${agr.aumento})</strong></span>
                `;
                agravantesContainer.appendChild(label);
            });

            function recalculatePenalties() {
                const checkboxes = agravantesContainer.querySelectorAll('.agravante-checkbox:checked');
                let hasAgravante = checkboxes.length > 0;

                if (!hasAgravante) {
                    penaDisplay.textContent = crime.prisionTexto;
                    multaDisplay.textContent = `${crime.multaMinSMLMV.toLocaleString()} a ${crime.multaMaxSMLMV.toLocaleString()} SMLMV`;
                } else {
                    const aggravatedMin = Math.round(crime.prisionMinMeses * 1.33);
                    const aggravatedMax = Math.round(crime.prisionMaxMeses * 1.50);
                    const minYears = (aggravatedMin / 12).toFixed(1);
                    const maxYears = (aggravatedMax / 12).toFixed(1);

                    penaDisplay.innerHTML = `<span>${minYears} a ${maxYears} años (${aggravatedMin} a ${aggravatedMax} meses)</span>`;
                    multaDisplay.innerHTML = `<span>${Math.round(crime.multaMinSMLMV * 1.33).toLocaleString()} a ${crime.multaMaxSMLMV.toLocaleString()} SMLMV</span>`;
                }
            }

            agravantesContainer.querySelectorAll('.agravante-checkbox').forEach(chk => {
                chk.addEventListener('change', recalculatePenalties);
            });

            recalculatePenalties();
        }

        selectCrime.addEventListener('change', updateCalculator);
        updateCalculator();
    }

    // ==========================================
    // 8. BÚSQUEDA Y FILTRADO INTEGRADO
    // ==========================================
    function applyFiltersAndSearch() {
        const query = (state.searchQuery || '').trim().toLowerCase();
        const catId = state.selectedCategory;

        // 1. Filtrar leyes
        let filteredLeyes = NORMATIVA_DATA.leyes.filter(ley => {
            if (catId !== 'all') {
                const categoryObj = NORMATIVA_DATA.tematicas.find(t => t.id === catId);
                if (categoryObj && !categoryObj.leyes.includes(ley.id)) {
                    return false;
                }
            }

            if (!query) return true;

            const inId = ley.id.toLowerCase().includes(query);
            const inNum = ley.numero.toLowerCase().includes(query);
            const inAnio = ley.anio.toString().includes(query);
            const inTituloCorto = ley.tituloCorto.toLowerCase().includes(query);
            const inTituloCompleto = ley.tituloCompleto.toLowerCase().includes(query);
            const inDesc = ley.descripcionBreve.toLowerCase().includes(query);
            const inTags = ley.ejesTematicos.some(t => t.toLowerCase().includes(query));
            const inArticles = ley.articulosDestacados.some(a => 
                a.numero.toLowerCase().includes(query) ||
                a.titulo.toLowerCase().includes(query) ||
                a.extracto.toLowerCase().includes(query) ||
                a.analisis.toLowerCase().includes(query)
            );

            return inId || inNum || inAnio || inTituloCorto || inTituloCompleto || inDesc || inTags || inArticles;
        });

        renderLawsGrid(filteredLeyes);

        // 2. Filtrar artículos
        let allArticles = [];
        NORMATIVA_DATA.leyes.forEach(ley => {
            ley.articulosDestacados.forEach(art => {
                allArticles.push({
                    ...art,
                    lawId: ley.id,
                    lawTipo: ley.tipo,
                    lawNumero: ley.numero,
                    lawAnio: ley.anio,
                    lawTitulo: ley.tituloCorto
                });
            });
        });

        let filteredArticles = allArticles.filter(art => {
            if (catId !== 'all') {
                const categoryObj = NORMATIVA_DATA.tematicas.find(t => t.id === catId);
                if (categoryObj && !categoryObj.leyes.includes(art.lawId)) {
                    return false;
                }
            }

            if (!query) return true;

            const inNum = art.numero.toLowerCase().includes(query);
            const inTitulo = art.titulo.toLowerCase().includes(query);
            const inExtracto = art.extracto.toLowerCase().includes(query);
            const inAnalisis = art.analisis.toLowerCase().includes(query);
            const inLaw = art.lawTitulo.toLowerCase().includes(query) || art.lawNumero.includes(query);

            return inNum || inTitulo || inExtracto || inAnalisis || inLaw;
        });

        renderArticlesList(filteredArticles);
    }

    function highlightText(text, query) {
        if (!text) return '';
        if (!query || query.trim() === '') return text;
        const cleanQuery = query.trim().replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
        const regex = new RegExp(`(${cleanQuery})`, 'gi');
        return text.replace(regex, '<mark style="background: #FEF08A; color: #1C2E1A; padding: 1px 4px; border-radius: 3px;">$1</mark>');
    }

    // ==========================================
    // 9. MODAL DE LEY COMPLETA (LIGHT THEME CON FOTOS REALES)
    // ==========================================
    function openLawModal(lawId) {
        const ley = NORMATIVA_DATA.leyes.find(l => l.id === lawId);
        if (!ley || !modalBody || !lawModal) return;

        const isFav = state.favorites.some(f => f.id === ley.id && f.type === 'ley');

        modalBody.innerHTML = `
            <div style="display: flex; gap: 20px; align-items: center; margin-bottom: 24px; border-bottom: 2px solid var(--border-subtle); padding-bottom: 20px; flex-wrap: wrap;">
                <img src="${ley.imagen}" alt="${ley.tituloCorto}" style="width: 120px; height: 120px; border-radius: var(--radius-md); object-fit: cover; box-shadow: var(--shadow-soft);">
                <div style="flex: 1; min-width: 260px;">
                    <div style="display: flex; gap: 10px; align-items: center; margin-bottom: 6px; flex-wrap: wrap;">
                        <span class="law-card-badge-floating" style="position: static;">${ley.tipo} ${ley.numero}</span>
                        <span style="font-size: 0.85rem; color: var(--text-muted); font-weight: 600;"><i data-lucide="calendar" style="width: 14px; height: 14px; display: inline-block; vertical-align: middle;"></i> Promulgación: ${ley.fechaExpedicion}</span>
                        <span style="background: var(--primary-light); color: var(--primary-forest); font-size: 0.8rem; padding: 2px 10px; border-radius: 9999px; font-weight: 700;">
                            ${ley.estado}
                        </span>
                    </div>
                    <h2 style="font-size: 1.8rem; font-weight: 800; color: var(--primary-forest); margin-bottom: 4px;">${ley.tituloCorto}</h2>
                    <p style="font-size: 0.92rem; color: var(--text-muted);">${ley.tituloCompleto}</p>
                </div>
            </div>

            <div style="margin-bottom: 24px;">
                <h4 style="color: var(--primary-forest); font-size: 1.1rem; font-weight: 800; margin-bottom: 8px; display: flex; align-items: center; gap: 8px;">
                    <i data-lucide="info" style="width: 18px; height: 18px; color: var(--primary-moss);"></i> Descripción y Alcance
                </h4>
                <p style="color: var(--text-body); font-size: 0.95rem; line-height: 1.6;">${ley.descripcionBreve}</p>
                <div style="margin-top: 10px; background: var(--bg-subtle); padding: 12px 16px; border-radius: var(--radius-md); border-left: 3px solid var(--primary-forest);">
                    <strong style="color: var(--primary-forest); font-size: 0.85rem;">Autoridad Competente:</strong>
                    <span style="color: var(--text-body); font-size: 0.88rem;"> ${ley.autoridadPrincipal}</span>
                </div>
            </div>

            <div style="margin-bottom: 24px;">
                <h4 style="color: var(--primary-forest); font-size: 1.1rem; font-weight: 800; margin-bottom: 12px; display: flex; align-items: center; gap: 8px;">
                    <i data-lucide="sparkles" style="width: 18px; height: 18px; color: var(--primary-moss);"></i> Principios Clave y Fundamentos
                </h4>
                <ul style="list-style: none; display: flex; flex-direction: column; gap: 8px;">
                    ${ley.principiosClave.map(p => `
                        <li style="display: flex; align-items: flex-start; gap: 10px; font-size: 0.92rem; color: var(--text-body);">
                            <i data-lucide="check-circle-2" style="width: 16px; height: 16px; color: var(--primary-moss); flex-shrink: 0; margin-top: 3px;"></i>
                            <span>${p}</span>
                        </li>
                    `).join('')}
                </ul>
            </div>

            <div style="margin-bottom: 24px;">
                <h4 style="color: var(--primary-forest); font-size: 1.1rem; font-weight: 800; margin-bottom: 12px; display: flex; align-items: center; gap: 8px;">
                    <i data-lucide="book-open" style="width: 18px; height: 18px; color: var(--primary-moss);"></i> Articulado Destacado
                </h4>
                <div style="display: flex; flex-direction: column; gap: 14px;">
                    ${ley.articulosDestacados.map(art => `
                        <div style="background: var(--bg-subtle); border: 1px solid var(--border-subtle); border-radius: var(--radius-md); padding: 18px;">
                            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 6px;">
                                <strong style="color: var(--primary-forest); font-size: 1.05rem;">${art.numero} - ${art.titulo}</strong>
                                <span style="font-size: 0.78rem; font-weight: 700; color: var(--primary-moss); background: var(--bg-surface); padding: 2px 8px; border-radius: 4px;">${art.categoria}</span>
                            </div>
                            <p style="font-size: 0.92rem; color: var(--text-primary); font-style: italic; margin-bottom: 8px; border-left: 3px solid var(--primary-leaf); padding-left: 10px;">
                                "${art.extracto}"
                            </p>
                            <p style="font-size: 0.88rem; color: var(--text-muted);">
                                <strong>Impacto Práctico:</strong> ${art.analisis}
                            </p>
                            ${art.penaPrision ? `
                                <div style="margin-top: 10px; font-size: 0.82rem; color: #991B1B; background: #FEE2E2; padding: 6px 12px; border-radius: 6px; font-weight: 700;">
                                    ⚖️ Sanción Penal: ${art.penaPrision} | Multa: ${art.multaSMLMV}
                                </div>
                            ` : ''}
                        </div>
                    `).join('')}
                </div>
            </div>

            <div style="margin-bottom: 24px;">
                <h4 style="color: var(--primary-forest); font-size: 1.1rem; font-weight: 800; margin-bottom: 10px; display: flex; align-items: center; gap: 8px;">
                    <i data-lucide="git-merge" style="width: 18px; height: 18px; color: var(--primary-moss);"></i> Concordancias y Articulación
                </h4>
                <ul style="list-style: none; display: flex; flex-direction: column; gap: 6px;">
                    ${ley.concordancias.map(c => `
                        <li style="font-size: 0.88rem; color: var(--text-muted); display: flex; align-items: center; gap: 8px;">
                            <i data-lucide="link" style="width: 14px; height: 14px; color: var(--primary-moss);"></i> ${c}
                        </li>
                    `).join('')}
                </ul>
            </div>

            <div style="display: flex; justify-content: space-between; align-items: center; padding-top: 20px; border-top: 2px solid var(--border-subtle); flex-wrap: wrap; gap: 10px;">
                <button class="btn-editorial-action" id="modalPrintBtn">
                    <i data-lucide="printer" style="width: 16px; height: 16px;"></i> Imprimir Ficha Jurídica
                </button>
                <div style="display: flex; gap: 10px;">
                    <button class="btn-editorial-action" id="modalCopyFullBtn">
                        <i data-lucide="copy" style="width: 16px; height: 16px;"></i> Copiar Resumen
                    </button>
                    <button class="btn-editorial-action ${isFav ? 'active' : ''}" id="modalFavBtn">
                        <i data-lucide="bookmark" style="width: 16px; height: 16px; ${isFav ? 'fill: currentColor;' : ''}"></i> ${isFav ? 'En Favoritos' : 'Guardar en Favoritos'}
                    </button>
                </div>
            </div>
        `;

        document.getElementById('modalPrintBtn')?.addEventListener('click', () => {
            window.print();
        });

        document.getElementById('modalCopyFullBtn')?.addEventListener('click', () => {
            const summary = `${ley.tituloCorto} (${ley.tipo} ${ley.numero} de ${ley.anio})\n${ley.tituloCompleto}\n\nAlcance: ${ley.descripcionBreve}\nAutoridad: ${ley.autoridadPrincipal}`;
            navigator.clipboard.writeText(summary).then(() => {
                showToast('Resumen de norma copiado', 'success');
            });
        });

        document.getElementById('modalFavBtn')?.addEventListener('click', () => {
            toggleFavorite(ley.id, 'ley');
            openLawModal(lawId);
        });

        lawModal.classList.add('active');
        if (window.lucide) lucide.createIcons();
    }

    function closeModal() {
        if (lawModal) lawModal.classList.remove('active');
    }

    // ==========================================
    // 10. GESTOR DE FAVORITOS
    // ==========================================
    function toggleFavorite(id, type, meta = {}) {
        const existingIndex = state.favorites.findIndex(f => f.id === id && f.type === type);
        if (existingIndex >= 0) {
            state.favorites.splice(existingIndex, 1);
            showToast('Elemento removido de favoritos', 'info');
        } else {
            state.favorites.push({ id, type, meta, timestamp: new Date().toISOString() });
            showToast('Elemento guardado en favoritos', 'success');
        }

        localStorage.setItem('eco_normativa_favs', JSON.stringify(state.favorites));
        renderLawsGrid();
        applyFiltersAndSearch();
        renderFavoritesView();
    }

    function renderFavoritesView() {
        if (!favoritesContainer) return;
        favoritesContainer.innerHTML = '';

        if (state.favorites.length === 0) {
            favoritesContainer.innerHTML = `
                <div style="grid-column: 1 / -1; background: #fff; padding: 48px; text-align: center; border-radius: var(--radius-lg); border: 1px solid var(--border-subtle);">
                    <i data-lucide="bookmark" style="width: 48px; height: 48px; color: var(--accent-amber); margin-bottom: 12px;"></i>
                    <h3 style="font-size: 1.3rem; color: var(--primary-forest); margin-bottom: 8px;">No tienes elementos guardados en favoritos</h3>
                    <p style="color: var(--text-muted); font-size: 0.95rem;">Haz clic en el ícono de marcador en cualquier ley o artículo para tener acceso directo rápido.</p>
                </div>
            `;
            if (window.lucide) lucide.createIcons();
            return;
        }

        state.favorites.forEach(fav => {
            if (fav.type === 'ley') {
                const ley = NORMATIVA_DATA.leyes.find(l => l.id === fav.id);
                if (!ley) return;
                const card = document.createElement('div');
                card.className = 'editorial-law-card';
                card.style.padding = '20px';
                card.innerHTML = `
                    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px;">
                        <span class="law-card-badge-floating" style="position: static;">${ley.tipo} ${ley.numero}</span>
                        <button class="btn-bookmark-card active" data-del-id="${fav.id}" data-del-type="ley" title="Quitar">
                            <i data-lucide="trash-2" style="width: 18px; height: 18px; color: var(--accent-ruby);"></i>
                        </button>
                    </div>
                    <h4 style="color: var(--primary-forest); font-size: 1.15rem; font-weight: 800; margin-bottom: 6px;">${ley.tituloCorto}</h4>
                    <p style="color: var(--text-muted); font-size: 0.85rem; margin-bottom: 14px;">${ley.descripcionBreve}</p>
                    <button class="btn-consultar-norma" data-law-id="${ley.id}" style="width: 100%; justify-content: center;">
                        <i data-lucide="external-link" style="width: 16px; height: 16px;"></i> Abrir Ficha
                    </button>
                `;
                favoritesContainer.appendChild(card);
            } else if (fav.type === 'articulo') {
                const [lawId, artNum] = fav.id.split('_');
                const ley = NORMATIVA_DATA.leyes.find(l => l.id === lawId);
                const art = ley ? ley.articulosDestacados.find(a => a.numero === artNum) : null;
                if (!art) return;

                const card = document.createElement('div');
                card.className = 'editorial-law-card';
                card.style.padding = '20px';
                card.innerHTML = `
                    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px;">
                        <span class="article-norm-pill">${ley.tipo} ${ley.numero}</span>
                        <button class="btn-bookmark-card active" data-del-id="${fav.id}" data-del-type="articulo" title="Quitar">
                            <i data-lucide="trash-2" style="width: 18px; height: 18px; color: var(--accent-ruby);"></i>
                        </button>
                    </div>
                    <h4 style="color: var(--primary-forest); font-size: 1.1rem; font-weight: 800; margin-bottom: 6px;">${art.numero} - ${art.titulo}</h4>
                    <p style="color: var(--text-muted); font-size: 0.85rem; font-style: italic; margin-bottom: 14px;">"${art.extracto}"</p>
                    <button class="btn-consultar-norma" data-law-id="${ley.id}" style="width: 100%; justify-content: center;">
                        <i data-lucide="book-open" style="width: 16px; height: 16px;"></i> Ver en Ley
                    </button>
                `;
                favoritesContainer.appendChild(card);
            }
        });

        favoritesContainer.querySelectorAll('[data-del-id]').forEach(btn => {
            btn.addEventListener('click', () => {
                const id = btn.getAttribute('data-del-id');
                const type = btn.getAttribute('data-del-type');
                toggleFavorite(id, type);
            });
        });

        favoritesContainer.querySelectorAll('.btn-consultar-norma').forEach(btn => {
            btn.addEventListener('click', () => {
                const lawId = btn.getAttribute('data-law-id');
                openLawModal(lawId);
            });
        });

        if (window.lucide) lucide.createIcons();
    }

    // ==========================================
    // 11. TOAST NOTIFICATIONS
    // ==========================================
    function showToast(message, type = 'info') {
        if (!toastContainer) return;
        const toast = document.createElement('div');
        toast.className = 'toast-editorial';
        const icon = type === 'success' ? 'check-circle-2' : (type === 'error' ? 'alert-circle' : 'info');
        toast.innerHTML = `
            <i data-lucide="${icon}" style="width: 18px; height: 18px;"></i>
            <span>${message}</span>
        `;
        toastContainer.appendChild(toast);
        if (window.lucide) lucide.createIcons();

        setTimeout(() => {
            toast.style.opacity = '0';
            toast.style.transform = 'translateY(10px)';
            toast.style.transition = 'all 0.3s ease';
            setTimeout(() => toast.remove(), 300);
        }, 3200);
    }

    // ==========================================
    // 12. EVENT LISTENERS & NAVEGACIÓN
    // ==========================================
    function setupEventListeners() {
        navButtons.forEach(btn => {
            btn.addEventListener('click', () => {
                const viewId = btn.getAttribute('data-view');
                switchView(viewId);
            });
        });

        function switchView(viewId) {
            state.currentView = viewId;
            navButtons.forEach(b => b.classList.toggle('active', b.getAttribute('data-view') === viewId));
            viewSections.forEach(section => {
                section.classList.toggle('active', section.id === `view-${viewId}`);
            });

            if (viewId === 'metricas') {
                setTimeout(initEnvironmentalCharts, 50);
            } else if (viewId === 'favoritos') {
                renderFavoritesView();
            }
            window.scrollTo({ top: 380, behavior: 'smooth' });
        }

        // Quick Law Selector Buttons in Hero
        quickLawButtons.forEach(btn => {
            btn.addEventListener('click', () => {
                const lawId = btn.getAttribute('data-law');
                openLawModal(lawId);
            });
        });

        // Search Input Events
        if (searchInput) {
            searchInput.addEventListener('input', (e) => {
                state.searchQuery = e.target.value;
                if (searchClearBtn) {
                    searchClearBtn.style.display = state.searchQuery ? 'block' : 'none';
                }
                applyFiltersAndSearch();
            });

            searchInput.addEventListener('keydown', (e) => {
                if (e.key === 'Enter') {
                    applyFiltersAndSearch();
                }
            });
        }

        if (searchClearBtn) {
            searchClearBtn.addEventListener('click', () => {
                searchInput.value = '';
                state.searchQuery = '';
                searchClearBtn.style.display = 'none';
                applyFiltersAndSearch();
                searchInput.focus();
            });
        }

        if (searchSubmitBtn) {
            searchSubmitBtn.addEventListener('click', () => {
                applyFiltersAndSearch();
                if (state.currentView !== 'leyes' && state.currentView !== 'articulos') {
                    switchView('articulos');
                }
            });
        }

        // Modal Close
        if (modalCloseBtn) modalCloseBtn.addEventListener('click', closeModal);
        if (lawModal) {
            lawModal.addEventListener('click', (e) => {
                if (e.target === lawModal) closeModal();
            });
        }

        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && lawModal && lawModal.classList.contains('active')) {
                closeModal();
            }
        });

        // Font size accessibility toggle
        const fontBtn = document.getElementById('fontSizeBtn');
        if (fontBtn) {
            fontBtn.addEventListener('click', () => {
                state.fontSizeLevel = (state.fontSizeLevel + 1) % 3;
                if (state.fontSizeLevel === 0) {
                    document.documentElement.style.fontSize = '16px';
                    showToast('Tamaño de fuente: Normal', 'info');
                } else if (state.fontSizeLevel === 1) {
                    document.documentElement.style.fontSize = '17.5px';
                    showToast('Tamaño de fuente: Grande', 'info');
                } else {
                    document.documentElement.style.fontSize = '19px';
                    showToast('Tamaño de fuente: Extra Grande', 'info');
                }
            });
        }

        // Print page button
        const printNavBtn = document.getElementById('printPageBtn');
        if (printNavBtn) {
            printNavBtn.addEventListener('click', () => {
                window.print();
            });
        }
    }

    // Load initial search results
    applyFiltersAndSearch();
});
