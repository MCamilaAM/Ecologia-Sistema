# Sistema de Legislación y Gestión Ecológica en Colombia

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)](https://developer.mozilla.org/es/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white)](https://developer.mozilla.org/es/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)](https://developer.mozilla.org/es/docs/Web/JavaScript)
[![Chart.js](https://img.shields.io/badge/Chart.js-FF6384?style=flat-square&logo=chartdotjs&logoColor=white)](https://www.chartjs.org/)
[![Lucide Icons](https://img.shields.io/badge/Lucide_Icons-F06A6A?style=flat-square&logo=lucide&logoColor=white)](https://lucide.dev/)

Plataforma web interactiva para la consulta, análisis dogmático, seguimiento normativo y evaluación de indicadores ecológicos de las leyes estructurantes en Colombia: desde el Código de Recursos Naturales de 1974 hasta las leyes más recientes de sostenibilidad y resiliencia climática.

---

## 🌿 Características Principales

- 📖 **Catálogo Normativo Integral:** Análisis detallado de las 6 normas ambientales fundamentales de Colombia:
  1. **Decreto Ley 2811 de 1974** – Código Nacional de Recursos Naturales Renovables.
  2. **Ley 99 de 1993** – Creación del SINA y del Ministerio del Medio Ambiente.
  3. **Ley 1333 de 2009** – Procedimiento Sancionatorio Ambiental e infracciones.
  4. **Ley 1931 de 2018** – Directrices para la Gestión del Cambio Climático.
  5. **Ley 2111 de 2021** – Nuevo Título de Delitos contra los Recursos Naturales en el Código Penal.
  6. **Ley 2450 de 2025** – Ciudades Verdes, Infraestructura Ecológica y Resiliencia Urbana.
- 📊 **Gráficas e Indicadores Ambientales:** Visualizaciones dinámicas con **Chart.js** (evolución de la deforestación histórica, sanciones impuestas por el SINA, metas de reducción de emisiones GEI, transición de delitos penales e índice de biodiversidad).
- 📜 **Buscador y Visor de Articulado:** Explorador interactivo con filtrado por palabras clave, categorías temáticas y desglose con análisis jurídico.
- ⚖️ **Calculador / Tipificador de Delitos (Ley 2111 de 2021):** Simulador de penas, multas en SMLMV, causales de agravación y competencias judiciales aplicables a infracciones penales ecológicas.
- ⏳ **Línea de Tiempo Evolutiva (1974 - 2025):** Recorrido cronológico interactivo que ilustra los hitos y transformaciones del marco normativo colombiano.
- 💡 **Casos Prácticos & FAQ:** Guías de resolución a dilemas comunes en derecho ambiental, licenciamiento, procedimientos sancionatorios y competencias institucionales (ANLA, CAR, MinAmbiente).
- 🔖 **Gestor de Favoritos:** Marcado y guardado de artículos y normas clave con persistencia local en `localStorage`.
- 🖨️ **Accesibilidad y Reportes:** Herramientas para ajuste de escala tipográfica y modo de exportación/impresión a PDF.

---

## 📁 Estructura del Proyecto

```text
Ecologia-Sistema/
│
├── Proyecto.html         # Página principal y estructura de la aplicación
├── README.md             # Documentación del sistema
├── .gitignore            # Exclusiones de control de versiones
│
├── css/
│   └── styles.css        # Hoja de estilos (Diseño botánico editorial, responsive)
│
├── js/
│   ├── normativa-data.js # Base de datos estructurada con normas, artículos y métricas
│   └── app.js            # Lógica interactiva, enrutamiento por pestañas y gráficos
│
└── assets/
    └── images/           # Recursos gráficos e imágenes ilustrativas
```

---

## 🚀 Instalación y Uso Local

No requiere la instalación de servidores complejos ni dependencias de backend. Para ejecutar el proyecto localmente:

1. **Clonar el repositorio:**
   ```bash
   git clone https://github.com/MCamilaAM/Ecologia-Sistema.git
   cd Ecologia-Sistema
   ```

2. **Abrir la aplicación:**
   - Haz doble clic en el archivo `Proyecto.html` para abrirlo en cualquier navegador moderno (Google Chrome, Mozilla Firefox, Microsoft Edge, Safari, etc.).
   - O utiliza una extensión como **Live Server** en Visual Studio Code.

---

## 🛠️ Tecnologías Utilizadas

- **HTML5 Semántico:** Estructura accesible y modular.
- **CSS3 Personalizado:** Sistema de diseño editorial botánico claro con variables CSS, animaciones suaves y maquetación en Flexbox y CSS Grid.
- **JavaScript (ES6+):** Programación modular sin frameworks pesados para un rendimiento ágil.
- **[Chart.js](https://www.chartjs.org/):** Renderizado de gráficos de datos ecológicos interactivos.
- **[Lucide Icons](https://lucide.dev/):** Iconografía moderna y limpia.
- **Google Fonts:** Tipografías *Outfit* y *Plus Jakarta Sans*.

---

## ⚖️ Licencia y Créditos

Desarrollado como recurso académico y pedagógico para el estudio del Derecho Ambiental y la Gestión Ecológica en Colombia.
