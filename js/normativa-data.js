/**
 * Base de Datos Jurídica y Ambiental de Colombia
 * Sistema de Consulta y Análisis Ecológico
 */

const NORMATIVA_DATA = {
    metadatos: {
        titulo: "Sistema de Consulta Normativa Ambiental",
        pais: "Colombia",
        version: "2026.2"
    },

    leyes: [
        {
            id: "decreto-2811-1974",
            tipo: "Decreto Ley",
            numero: "2811",
            anio: 1974,
            fechaExpedicion: "18 de diciembre de 1974",
            tituloCorto: "Código Nacional de Recursos Naturales",
            tituloCompleto: "Por el cual se dicta el Código Nacional de Recursos Naturales Renovables y de Protección al Medio Ambiente",
            imagen: "assets/images/decreto_2811.jpg",
            bannerColor: "#2F5D34",
            descripcionBreve: "Piedra angular del derecho ambiental en Colombia. Establece el régimen de uso y preservación de la atmósfera, aguas, suelos, flora y fauna silvestre frente a factores de deterioro y contaminación.",
            estado: "Vigente con modificaciones parciales",
            autoridadPrincipal: "Ministerio de Ambiente y Desarrollo Sostenible / Corporaciones Autónomas Regionales (CAR)",
            ejesTematicos: ["Recursos Naturales", "Aguas y Atmósfera", "Fauna y Flora Silvestre", "Suelo", "Contaminación"],
            estadisticaDestacada: {
                cifra: "340",
                etiqueta: "Artículos estructurantes",
                detalle: "Primer código integral de recursos naturales en América Latina."
            },
            principiosClave: [
                "El ambiente es patrimonio común de la humanidad y necesario para la supervivencia.",
                "Uso racional y preservación de los recursos naturales renovables.",
                "Prevención y control de los efectos nocivos de la explotación de recursos.",
                "Función ecológica y social de la propiedad pública y privada."
            ],
            resumenEstructura: "Consta de 340 artículos organizados en dos grandes libros: Libro I (Del Ambiente, Factores de Deterioro y Política Ambiental) y Libro II (De los Recursos Naturales Renovables: Atmósfera, Aguas, Suelos, Flora, Fauna y Recursos Hidrobiológicos).",
            articulosDestacados: [
                {
                    numero: "Art. 1",
                    titulo: "Patrimonio Común",
                    extracto: "El ambiente es patrimonio común. El Estado y los particulares deben participar en su preservación y manejo, que son de utilidad pública e interés social.",
                    analisis: "Consagra el derecho de toda persona a gozar de un ambiente sano y el deber correlativo del Estado y la sociedad de protegerlo.",
                    categoria: "Principios Generales"
                },
                {
                    numero: "Art. 8",
                    titulo: "Factores de Deterioro Ambiental",
                    extracto: "Se consideran factores que deterioran el ambiente: la contaminación del aire, de las aguas, del suelo; la degradación y erosión; las alteraciones nocivas de la topografía; las alteraciones de la flora y fauna silvestre; la acumulación indebida de basuras y desechos.",
                    analisis: "Establece el catálogo fundacional de conductas y fenómenos que constituyen afectación o daño ambiental en Colombia.",
                    categoria: "Deterioro Ambiental"
                },
                {
                    numero: "Art. 18",
                    titulo: "Capacidad de Regeneración",
                    extracto: "La utilización de los elementos ambientales o de los recursos naturales renovables debe hacerse de manera que no sobrepase los límites de su capacidad de regeneración o renovación.",
                    analisis: "Principio de rendimiento sostenido y capacidad de carga ecológica.",
                    categoria: "Aprovechamiento Sostenible"
                },
                {
                    numero: "Art. 88",
                    titulo: "Dominio y Uso de las Aguas",
                    extracto: "Salvo derechos adquiridos por particulares, las aguas son de dominio público, inalienables e imprescriptibles. Su uso se concede mediante permiso, concesión o asociación.",
                    analisis: "Pilar del régimen hídrico colombiano: primacía del agua para consumo humano y concesiones reglamentadas.",
                    categoria: "Recurso Hídrico"
                },
                {
                    numero: "Art. 199",
                    titulo: "Protección de la Flora Silvestre",
                    extracto: "Se entiende por flora silvestre el conjunto de especies vegetales que no han sido objeto de domesticación, mejoramiento genético o cría. Su aprovechamiento requiere autorización o permiso expreso.",
                    analisis: "Regulación de aprovechamientos forestales únicos, persistentes o domésticos.",
                    categoria: "Flora Silvestre"
                },
                {
                    numero: "Art. 247",
                    titulo: "Protección de la Fauna Silvestre",
                    extracto: "La fauna silvestre que se encuentre en el territorio nacional pertenece a la Nación, salvo las especies de zoocría debidamente autorizadas.",
                    analisis: "Establece la titularidad estatal sobre los animales silvestres y la prohibición de caza o captura sin salvoconducto y autorización.",
                    categoria: "Fauna Silvestre"
                }
            ],
            concordancias: [
                "Desarrollado y fortalecido por la Ley 99 de 1993 (creación del SINA).",
                "Tipificación penal de infracciones actualizada por la Ley 2111 de 2021.",
                "Régimen sancionatorio administrativo regulado por la Ley 1333 de 2009."
            ]
        },
        {
            id: "ley-99-1993",
            tipo: "Ley",
            numero: "99",
            anio: 1993,
            fechaExpedicion: "22 de diciembre de 1993",
            tituloCorto: "Ley General Ambiental / SINA",
            tituloCompleto: "Por la cual se crea el Ministerio del Medio Ambiente, se reordena el Sector Público encargado de la gestión y conservación del medio ambiente y los recursos naturales renovables, se organiza el Sistema Nacional Ambiental, SINA, y se dictan otras disposiciones",
            imagen: "assets/images/ley_99.jpg",
            bannerColor: "#254823",
            descripcionBreve: "Reordena la institucionalidad ambiental en Colombia. Crea el Ministerio del Medio Ambiente, organiza el SINA, descentraliza la gestión mediante las 33 CARs y consagra las Licencias Ambientales y el Principio de Precaución.",
            estado: "Vigente con modificaciones parciales",
            autoridadPrincipal: "Ministerio de Ambiente y Desarrollo Sostenible / ANLA / 33 Corporaciones Autónomas Regionales (CAR) / Institutos Científicos (IDEAM, Humboldt, Sinchi, Invemar, IIAP)",
            ejesTematicos: ["Institucionalidad SINA", "Licencias Ambientales", "Principio de Precaución", "Corporaciones Autónomas (CAR)", "Participación Ciudadana"],
            estadisticaDestacada: {
                cifra: "33 CARs",
                etiqueta: "Autoridades Regionales",
                detalle: "Descentralización de la administración de cuencas y licencias ambientales."
            },
            principiosClave: [
                "El proceso de desarrollo económico y social se orientará según los principios de desarrollo sostenible de la Declaración de Río de 1992.",
                "Principio de Precaución: cuando exista peligro de daño grave e irreversible, la falta de certeza científica no postergará la adopción de medidas eficaces.",
                "La biodiversidad del país es patrimonio nacional y de interés de la humanidad.",
                "Principio de Rigor Subsidiario y Gradación Normativa entre autoridades ambientales."
            ],
            resumenEstructura: "Contiene 118 artículos divididos en 16 títulos que abarcan los Fundamentos de la Política Ambiental, Creación del MinAmbiente, Estructura del SINA, Corporaciones Autónomas Regionales, Licencias Ambientales, Tasas Retributivas y Compensatorias, y Mecanismos de Participación Ciudadana.",
            articulosDestacados: [
                {
                    numero: "Art. 1",
                    titulo: "Principios Generales Ambientales",
                    extracto: "Establece 14 principios rectores: la biodiversidad como patrimonio, zonas de páramos y nacimientos de agua como de especial protección, prevención de desastres, el que contamina paga (tasas retributivas), principio de precaución y participación ciudadana.",
                    analisis: "Base dogmática obligatoria para la interpretación y aplicación de cualquier norma o decisión ambiental en el país.",
                    categoria: "Fundamentos y Principios"
                },
                {
                    numero: "Art. 4",
                    titulo: "El Sistema Nacional Ambiental (SINA)",
                    extracto: "Define el SINA como el conjunto de orientaciones, normas, actividades, recursos, programas e instituciones que permiten la puesta en marcha de los principios generales ambientales.",
                    analisis: "Eje articulador entre Estado, ONGs, comunidades y sector privado para la gestión ecológica.",
                    categoria: "Institucionalidad"
                },
                {
                    numero: "Art. 23",
                    titulo: "Corporaciones Autónomas Regionales (CAR)",
                    extracto: "Entes corporativos de carácter público, integrados por las entidades territoriales, dotados de autonomía administrativa y financiera, encargados de administrar el medio ambiente en su respectiva jurisdicción.",
                    analisis: "Autoridad ambiental regional con facultades de otorgar licencias, permisos de vertimientos, concesiones de agua y ejercer control policivo.",
                    categoria: "Autoridades Regionales"
                },
                {
                    numero: "Art. 49",
                    titulo: "De la Licencia Ambiental",
                    extracto: "La ejecución de obras, el establecimiento de industrias o el desarrollo de cualquier actividad que pueda producir deterioro grave a los recursos naturales o al medio ambiente requerirá de una Licencia Ambiental.",
                    analisis: "Instrumento preventivo esencial que evalúa el Estudio de Impacto Ambiental (EIA) antes de iniciar megaproyectos.",
                    categoria: "Licenciamiento"
                },
                {
                    numero: "Art. 63",
                    titulo: "Rigor Subsidiario y Gradación Normativa",
                    extracto: "Las normas ambientales de las entidades territoriales (municipios/departamentos) no pueden ser más permisivas que las nacionales; únicamente pueden hacer más rigurosas las exigencias de protección.",
                    analisis: "Garantiza que la autonomía territorial sirva para maximizar la protección, nunca para debilitar los estándares nacionales.",
                    categoria: "Régimen Competencial"
                },
                {
                    numero: "Art. 76",
                    titulo: "Consulta Previa a Comunidades Étnicas",
                    extracto: "La explotación de los recursos naturales en los territorios indígenas y comunidades afrocolombianas se hará sin desmedro de su integridad cultural, social y económica, garantizando su participación.",
                    analisis: "Consagración de la consulta previa libre e informada como derecho fundamental ambiental.",
                    categoria: "Derechos Étnicos y Participación"
                }
            ],
            concordancias: [
                "Reglamentada en licenciamiento ambiental por el Decreto 1076 de 2015 (DUR Sector Ambiente).",
                "Fortalecida en cambio climático por la Ley 1931 de 2018.",
                "Competencias sancionatorias actualizadas en sede penal por la Ley 2111 de 2021."
            ]
        },
        {
            id: "ley-165-1994",
            tipo: "Ley",
            numero: "165",
            anio: 1994,
            fechaExpedicion: "9 de noviembre de 1994",
            tituloCorto: "Convenio sobre la Diversidad Biológica (CDB)",
            tituloCompleto: "Por medio de la cual se aprueba el 'Convenio sobre la Diversidad Biológica', hecho en Río de Janeiro el 5 de junio de 1992",
            imagen: "assets/images/ley_165.jpg",
            bannerColor: "#1B4332",
            descripcionBreve: "Ratifica el tratado cumbre de las Naciones Unidas sobre biodiversidad. Fija las reglas para la conservación in situ y ex situ, el uso sostenible de ecosistemas y la participación justa en los beneficios de los recursos genéticos.",
            estado: "Vigente (Tratado Internacional Ratificado)",
            autoridadPrincipal: "Ministerio de Ambiente / Instituto Alexander von Humboldt / Parques Nacionales Naturales de Colombia",
            ejesTematicos: ["Biodiversidad", "Conservación In Situ y Ex Situ", "Recursos Genéticos", "Bioseguridad", "Conocimiento Tradicional"],
            estadisticaDestacada: {
                cifra: "#2 en el Mundo",
                etiqueta: "País Megadiverso",
                detalle: "Más de 75.000 especies registradas en Colombia protegidas bajo el CDB."
            },
            principiosClave: [
                "Soberanía de los Estados sobre sus propios recursos biológicos y responsabilidad de no causar daños ecológicos a otros.",
                "Conservación in situ (en hábitats naturales y áreas protegidas SINAP) como pilar fundamental.",
                "Participación justa y equitativa en los beneficios derivados de la utilización de recursos genéticos y biotecnología.",
                "Protección y preservación de los conocimientos tradicionales de comunidades locales e indígenas."
            ],
            resumenEstructura: "Consta de 42 artículos del tratado internacional que regulan: Objetivos, Términos, Cooperación, Estrategias de Conservación In Situ y Ex Situ, Incentivos, Investigación y Capacitación, Acceso a Recursos Genéticos y Transferencia de Tecnología.",
            articulosDestacados: [
                {
                    numero: "Art. 1 (CDB)",
                    titulo: "Objetivos del Convenio",
                    extracto: "La conservación de la diversidad biológica, la utilización sostenible de sus componentes y la participación justa y equitativa en los beneficios que se deriven de la utilización de los recursos genéticos.",
                    analisis: "Los tres pilares universales de la gestión global y nacional de la biodiversidad.",
                    categoria: "Objetivos del Tratado"
                },
                {
                    numero: "Art. 8 (CDB)",
                    titulo: "Conservación In Situ",
                    extracto: "Establecer un sistema de áreas protegidas; promover la protección de ecosistemas y hábitats naturales; rehabilitar y restaurar ecosistemas degradados; impedir que se introduzcan, controlar o erradicar las especies exóticas invasoras.",
                    analisis: "Fundamento jurídico del Sistema Nacional de Áreas Protegidas (SINAP) de Colombia.",
                    categoria: "Áreas Protegidas"
                },
                {
                    numero: "Art. 9 (CDB)",
                    titulo: "Conservación Ex Situ",
                    extracto: "Adoptar medidas para la conservación de componentes de la diversidad biológica fuera de sus hábitats naturales (bancos de germoplasma, jardines botánicos, zoocriaderos, acuarios y centros de investigación).",
                    analisis: "Mecanismo complementario de rescate genético e investigación científica.",
                    categoria: "Investigación y Germoplasma"
                },
                {
                    numero: "Art. 15 (CDB)",
                    titulo: "Acceso a los Recursos Genéticos",
                    extracto: "Reconociendo los derechos soberanos de los Estados sobre sus recursos naturales, la facultad de regular el acceso a los recursos genéticos incumbe a los gobiernos nacionales y está sometida a la legislación nacional y al Consentimiento Fundamentado Previo.",
                    analisis: "Control contra la biopiratería y exigencia de contratos de acceso a recursos genéticos en Colombia.",
                    categoria: "Recursos Genéticos"
                },
                {
                    numero: "Art. 19 (CDB)",
                    titulo: "Gestión de la Biotecnología y Bioseguridad",
                    extracto: "Garantizar que se disponga de información adecuada sobre reglamentaciones de seguridad de organismos vivos modificados (OVM) resultantes de la biotecnología.",
                    analisis: "Antecedente directo del Protocolo de Cartagena sobre Seguridad de la Biotecnología.",
                    categoria: "Bioseguridad"
                }
            ],
            concordancias: [
                "Regula los compromisos de Colombia en las COP de Biodiversidad (incluida la COP16 de Cali 2024).",
                "Se articula con el Sistema Nacional de Áreas Protegidas (SINAP) regulado en el Decreto 1076 de 2015.",
                "Protección penal de especies amenazadas o endémicas tipificada en Ley 2111 de 2021."
            ]
        },
        {
            id: "ley-1931-2018",
            tipo: "Ley",
            numero: "1931",
            anio: 2018,
            fechaExpedicion: "27 de julio de 2018",
            tituloCorto: "Ley de Cambio Climático",
            tituloCompleto: "Por la cual se establecen directrices para la gestión del cambio climático",
            imagen: "assets/images/ley_1931.jpg",
            bannerColor: "#31572C",
            descripcionBreve: "Marco legal para la acción climática nacional. Crea el SISCLIMA, establece metas de mitigación de gases de efecto invernadero (GEI), medidas de adaptación ante la vulnerabilidad e introduce los Cupos Transables de Emisión (PNCTE).",
            estado: "Vigente",
            autoridadPrincipal: "Comisión Intersectorial de Cambio Climático (CICC) / MinAmbiente / DNP / IDEAM",
            ejesTematicos: ["Cambio Climático", "Mitigación GEI", "Adaptación y Resiliencia", "SISCLIMA", "Cupos Transables de Emisión", "Transición Energética"],
            estadisticaDestacada: {
                cifra: "-51% GEI",
                etiqueta: "Meta NDC al 2030",
                detalle: "Compromiso de Colombia hacia la carbono neutralidad al año 2050."
            },
            principiosClave: [
                "Autonomía y complementariedad en las decisiones interinstitucionales sobre clima.",
                "Prioridad de las medidas de adaptación en comunidades y ecosistemas de alta vulnerabilidad.",
                "Corresponsabilidad ciudadana y del sector productivo en la descarbonización.",
                "Costo-efectividad de las medidas de mitigación y transición justa."
            ],
            resumenEstructura: "Consta de 38 artículos agrupados en 6 capítulos: Disposiciones Generales, Instrumentos de Planificación (PIGCCS), Información de Cambio Climático (RENARE), Sistema de Comercio de Cupos de Emisión, Financiación y Disposiciones Finales.",
            articulosDestacados: [
                {
                    numero: "Art. 2",
                    titulo: "Objeto de la Ley",
                    extracto: "Establecer las directrices para la gestión del cambio climático en las decisiones de las personas públicas y privadas, la concurrencia de la Nación, los departamentos, municipios, distritos y autoridades ambientales para reducir la vulnerabilidad y promover un desarrollo bajo en carbono.",
                    analisis: "Integra la variable climática de forma transversal y vinculante en los Planes de Ordenamiento Territorial (POT) y Planes de Desarrollo.",
                    categoria: "Objeto e Integración"
                },
                {
                    numero: "Art. 5",
                    titulo: "Sistema Nacional de Cambio Climático (SISCLIMA)",
                    extracto: "El SISCLIMA es el conjunto de políticas, normas, procesos, entidades y recursos estatales y privados que gestionan de forma coordinada las acciones de mitigación y adaptación al cambio climático.",
                    analisis: "Estructura institucional que coordina a los ministerios sectoriales (MinMinas, MinTransporte, MinAgricultura, etc.) con MinAmbiente.",
                    categoria: "Institucionalidad Climática"
                },
                {
                    numero: "Art. 15",
                    titulo: "Planes Integrales de Gestión del Cambio Climático (PIGCCS)",
                    extracto: "Los ministerios formularán e implementarán los PIGCCS sectoriales para orientar sus sectores hacia la resiliencia y la carbono-neutralidad. Igualmente los departamentos formularán los PIGCCT territoriales.",
                    analisis: "Herramienta obligatoria de planeación para sectores como energía, transporte, agro y vivienda.",
                    categoria: "Planificación Climática"
                },
                {
                    numero: "Art. 19",
                    titulo: "Registro Nacional de Reducción de Emisiones (RENARE)",
                    extracto: "Créase el RENARE, coordinado por el IDEAM y MinAmbiente, para registrar y monitorear todas las iniciativas, proyectos de compensación de carbono y reducción de emisiones GEI en el país.",
                    analisis: "Mecanismo de transparencia contra la doble contabilidad en el mercado de carbono.",
                    categoria: "Mercado de Carbono"
                },
                {
                    numero: "Art. 30",
                    titulo: "Programa Nacional de Cupos Transables de Emisión (PNCTE)",
                    extracto: "El Gobierno Nacional creará el PNCTE mediante el cual se definirá un tope de emisiones de GEI por sectores o agentes, y se permitirá la compra y venta de cupos de emisión como instrumento económico de mercado.",
                    analisis: "Mecanismo tipo Cap-and-Trade para incentivar a la industria a invertir en tecnologías limpias.",
                    categoria: "Instrumentos Económicos"
                }
            ],
            concordancias: [
                "Alineada con los compromisos del Acuerdo de París (NDC de Colombia hacia la carbono-neutralidad al 2050).",
                "Articulada con la Ley 2476 de 2025 para la adaptación climática urbana y Soluciones basadas en la Naturaleza.",
                "Complementada por la Ley de Transición Energética (Ley 2099 de 2021)."
            ]
        },
        {
            id: "ley-2111-2021",
            tipo: "Ley",
            numero: "2111",
            anio: 2021,
            fechaExpedicion: "29 de julio de 2021",
            tituloCorto: "Ley de Delitos Ambientales",
            tituloCompleto: "Por medio de la cual se sustituye el Título XI 'De los Delitos contra los Recursos Naturales y el Medio Ambiente' de la Ley 599 de 2000 (Código Penal) y se dictan otras disposiciones",
            imagen: "assets/images/ley_2111.jpg",
            bannerColor: "#4F1D1D",
            descripcionBreve: "Transformación penal en Colombia: elimina la excarcelabilidad para crímenes ambientales graves, crea tipos penales como la Deforestación y su Financiación, e incrementa drásticamente las penas de prisión y multas pecuniarias.",
            estado: "Vigente",
            autoridadPrincipal: "Fiscalía General de la Nación (Dirección Especializada DDHH y Medio Ambiente) / Policía Ambiental / MinAmbiente",
            ejesTematicos: ["Derecho Penal Ambiental", "Deforestación", "Tráfico de Fauna y Flora", "Ecocidio y Daño Ambiental", "Financiación de Crímenes Ecológicos", "Minería Ilegal"],
            estadisticaDestacada: {
                cifra: "Hasta 15 Años",
                etiqueta: "Pena Máxima Prisión",
                detalle: "Sin beneficios de excarcelación para determinadores de deforestación masiva."
            },
            principiosClave: [
                "Inexcusabilidad y no excarcelabilidad ante conductas graves de destrucción masiva de ecosistemas.",
                "Persecución prioritaria a los determinadores y financiadores del crimen ambiental, no solo al eslabón más vulnerable.",
                "Protección penal reforzada a Parques Nacionales Naturales y Reservas Forestales.",
                "Responsabilidad penal directa de personas jurídicas y decomiso definitivo de maquinaria y activos ilícitos."
            ],
            resumenEstructura: "Reemplaza íntegramente los artículos 328 al 339 del Código Penal Colombiano, consagrando 14 delitos ambientales específicos estructurados en: Delitos contra los recursos naturales, Delitos contra la fauna y flora, Daños a los recursos naturales, y Delitos de contaminación y usurpación de tierras protegidas.",
            articulosDestacados: [
                {
                    numero: "Art. 330 (C.P.)",
                    titulo: "Deforestación",
                    extracto: "El que sin permiso de autoridad competente o con incumplimiento de la normatividad existente tale, queme, corte, arranque o destruya áreas iguales o superiores a una (1) hectárea continua o discontinua de bosque natural, incurrirá en prisión de 60 a 144 meses (5 a 12 años) y multa de 134 a 50.000 SMLMV.",
                    analisis: "Delito autónomo clave que castiga directamente la destrucción de la selva y bosques naturales.",
                    categoria: "Tipos Penales Forestales",
                    penaPrision: "60 a 144 meses (5 a 12 años)",
                    multaSMLMV: "134 a 50.000 SMLMV",
                    agravantes: "Aumenta de una tercera parte a la mitad si se comete en áreas protegidas o páramos."
                },
                {
                    numero: "Art. 330A (C.P.)",
                    titulo: "Promoción y Financiación de la Deforestación",
                    extracto: "El que promueva, financie, dirija, facilite, suministre medios o se aproveche económicamente de la deforestación incurrirá en prisión de 96 a 180 meses (8 a 15 años) y multa de 300 a 50.000 SMLMV.",
                    analisis: "Ataca las cabezas financieras y organizaciones criminales detrás del acaparamiento de tierras.",
                    categoria: "Financiación Ilícita",
                    penaPrision: "96 a 180 meses (8 a 15 años)",
                    multaSMLMV: "300 a 50.000 SMLMV",
                    agravantes: "Agravado si financia invasión a resguardos indígenas o parques nacionales."
                },
                {
                    numero: "Art. 328 (C.P.)",
                    titulo: "Aprovechamiento Ilícito de Recursos Naturales",
                    extracto: "El que con incumplimiento de la normatividad se apropie, acceda, capture, mantenga, introduzca, extraiga, explote, aproveche, exporte, transporte, comercie o beneficie especímenes, productos o partes de los recursos fáunicos, forestales, hidrobiológicos incurrirá en prisión de 60 a 135 meses.",
                    analisis: "Sanciona el tráfico ilegal de madera, pesca prohibida y extracción botánica.",
                    categoria: "Aprovechamiento Ilícito",
                    penaPrision: "60 a 135 meses (5 a 11.25 años)",
                    multaSMLMV: "134 a 43.750 SMLMV"
                },
                {
                    numero: "Art. 328A (C.P.)",
                    titulo: "Tráfico de Fauna",
                    extracto: "El que trafique, adquiera, exporte o comercialice sin permiso especímenes, productos o partes de la fauna acuática, silvestre o especies silvestres exóticas incurrirá en prisión de 60 a 135 meses y multa de 300 a 40.000 SMLMV.",
                    analisis: "Tipo penal específico e independiente para el tráfico y tenencia ilícita de animales silvestres.",
                    categoria: "Tráfico de Fauna",
                    penaPrision: "60 a 135 meses (5 a 11.25 años)",
                    multaSMLMV: "300 a 40.000 SMLMV",
                    agravantes: "Aumenta de una tercera parte a la mitad si la especie está amenazada, en veda o es endémica."
                },
                {
                    numero: "Art. 333 (C.P.)",
                    titulo: "Daño en los Recursos Naturales y Ecocidio",
                    extracto: "El que destruya, inutilice, haga desaparecer o cause un impacto ambiental grave o daño a los recursos naturales incurrirá en prisión de 60 a 135 meses. Si el daño fuere de proporciones masivas, graves y generalizadas o de largo plazo (Ecocidio), la pena será de 96 a 168 meses.",
                    analisis: "Tipificación pionera del concepto de Ecocidio en el derecho penal latinoamericano.",
                    categoria: "Ecocidio y Daño Masivo",
                    penaPrision: "60 a 168 meses (hasta 14 años en Ecocidio)",
                    multaSMLMV: "167 a 50.000 SMLMV"
                },
                {
                    numero: "Art. 337 (C.P.)",
                    titulo: "Apropiación Ilegal de Baldíos de la Nación",
                    extracto: "El que sin el lleno de los requisitos legales se apropie, usurpe, parcele o comercialice tierras baldías de la Nación pertenecientes al Sistema de Parques Nacionales o de reserva forestal incurrirá en prisión de 72 a 144 meses.",
                    analisis: "Freno penal al despojo territorial y colonización ilícita de reservas estratégicas.",
                    categoria: "Tierras y Baldíos",
                    penaPrision: "72 a 144 meses (6 a 12 años)",
                    multaSMLMV: "140 a 50.000 SMLMV"
                }
            ],
            concordancias: [
                "Deroga los artículos penales ambientales anteriores de la Ley 599 de 2000 y Ley 1453 de 2011.",
                "Se complementa administrativamente con el régimen sancionatorio de la Ley 1333 de 2009.",
                "Aplica sanciones directas sobre infracciones a los bienes protegidos por el Decreto 2811 y Ley 99."
            ]
        },
        {
            id: "ley-2476-2025",
            tipo: "Ley",
            numero: "2476",
            anio: 2025,
            fechaExpedicion: "10 de julio de 2025",
            tituloCorto: "Ley de Ciudades Verdes",
            tituloCompleto: "Por medio de la cual se promueve la transformación de los centros urbanos en ciudades verdes, biodiversas y resilientes al cambio climático, se incentivan las Soluciones basadas en la Naturaleza (SbN), se fortalecen los espacios verdes y azules, y se dictan otras disposiciones",
            imagen: "assets/images/ley_2476.jpg",
            bannerColor: "#2A6F4E",
            descripcionBreve: "Normativa vanguardista de urbanismo ecológico en Colombia. Obliga a distritos y municipios a ampliar y cualificar la infraestructura verde y azul, incorporar Soluciones basadas en la Naturaleza (SbN), reducir islas de calor urbano y proteger la conectividad ecosistémica.",
            estado: "Vigente (Promulgada el 10 de julio de 2025)",
            autoridadPrincipal: "Ministerio de Ambiente / Ministerio de Vivienda, Ciudad y Territorio / Alcaldías Municipales y Distritales / CARs",
            ejesTematicos: ["Ciudades Verdes y Biodiversas", "Soluciones basadas en la Naturaleza (SbN)", "Espacios Verdes y Azules", "Calidad del Aire y Confort Térmico", "Ordenamiento Territorial Ecológico"],
            estadisticaDestacada: {
                cifra: "15 m²/hab",
                etiqueta: "Meta Espacio Verde",
                detalle: "Estándar mínimo legal obligatorio de espacio verde efectivo por habitante."
            },
            principiosClave: [
                "Reverdecimiento urbano prioritario y justicia espacial ambiental.",
                "Integración mandatoria de Soluciones basadas en la Naturaleza (SbN) en la obra pública y privada.",
                "Preservación y restauración de la Estructura Ecológica Principal (EEP) urbana y periurbana.",
                "Protección de rondas hídricas, humedales urbanos y corredores biológicos de conexión.",
                "Fomento a bio-construcciones, techos verdes, jardines de lluvia y pavimentos permeables."
            ],
            resumenEstructura: "Consta de capítulos dedicados a: Principios y Definiciones de Infraestructura Verde/Azul, Criterios de Planificación Urbana Sostenible (POT), Estándares mínimos de Espacio Verde por Habitante, Incentivos Tributarios a Edificaciones Verdes, y Mecanismos de Financiación de SbN.",
            articulosDestacados: [
                {
                    numero: "Art. 1",
                    titulo: "Objeto y Finalidad",
                    extracto: "Establecer el marco normativo para la transformación de los centros urbanos colombianos en ciudades y territorios verdes, resilientes, sostenibles y biodiversos, mediante la conservación, uso sostenible y restauración de las estructuras ecológicas y la integración de Soluciones basadas en la Naturaleza (SbN).",
                    analisis: "Cambio de paradigma: la naturaleza como infraestructura crítica de la ciudad para enfrentar inundaciones, sequías y calor extremo.",
                    categoria: "Marco General"
                },
                {
                    numero: "Art. 4",
                    titulo: "Soluciones basadas en la Naturaleza (SbN)",
                    extracto: "Se consideran SbN prioritarias en la planeación territorial: los sistemas de drenaje urbano sostenible (SUDS), humedales artificiales, parques inundables, techos y fachadas vivas, bosques de bolsillo urbanos y reforestación con flora nativa.",
                    analisis: "Adopción de estándares internacionales de la UICN aplicados a la ingeniería y arquitectura urbana colombiana.",
                    categoria: "Infraestructura Natural"
                },
                {
                    numero: "Art. 7",
                    titulo: "Índice de Espacio Verde y Azul por Habitante",
                    extracto: "Los municipios y distritos deberán incorporar en sus Planes de Ordenamiento Territorial (POT) metas progresivas para alcanzar y mantener un mínimo de 15 metros cuadrados de espacio verde efectivo y accesible por habitante.",
                    analisis: "Estándar vinculante para cerrar la brecha de desigualdad ambiental en barrios periféricos y centros densos.",
                    categoria: "Estándares Urbanos"
                },
                {
                    numero: "Art. 11",
                    titulo: "Mitigación del Efecto 'Isla de Calor'",
                    extracto: "Las administraciones locales diseñarán planes de mitigación de temperaturas extremas en áreas hiper-urbanizadas mediante arborización perimetral, corredores de viento y superficies reflectantes y vegetales.",
                    analisis: "Respuesta de salud pública y ambiental ante el calentamiento acelerado en urbes.",
                    categoria: "Clima Urbano y Salud"
                },
                {
                    numero: "Art. 16",
                    titulo: "Incentivos Urbanísticos y Tributarios",
                    extracto: "Se autoriza a los Concejos Municipales a crear descuentos en el Impuesto Predial Unificado e incrementos en índices de edificabilidad para proyectos inmobiliarios que incorporen techos verdes certificados, aprovechamiento de aguas lluvias y SbN.",
                    analisis: "Estímulo económico para dinamizar la construcción sostenible privada.",
                    categoria: "Incentivos Económicos"
                },
                {
                    numero: "Art. 22",
                    titulo: "Protección de Cuencas y Rondas Urbanas",
                    extracto: "Queda prohibida la canalización dura o entubamiento de ríos, quebradas y humedales urbanos, priorizando la renaturalización de riberas y parques lineales biosostenibles.",
                    analisis: "Ruptura con el modelo de ingeniería gris: rescate de los cauces naturales como corredores biológicos.",
                    categoria: "Régimen Hídrico Urbano"
                }
            ],
            concordancias: [
                "Operativiza los mandatos de adaptación climática territorial de la Ley 1931 de 2018.",
                "Articula las competencias de las CAR y entidades territoriales de la Ley 99 de 1993 y Ley 388 de 1997 (POT).",
                "Garantiza el cumplimiento de las metas del Marco Global de Biodiversidad Kunming-Montreal y CDB (Ley 165 de 1994)."
            ]
        }
    ],

    tematicas: [
        { id: "all", nombre: "Todas las Normas", icono: "layers" },
        { id: "biodiversidad", nombre: "Biodiversidad y Áreas Protegidas", icono: "trees", leyes: ["ley-165-1994", "decreto-2811-1974", "ley-99-1993"] },
        { id: "delitos", nombre: "Delitos Ambientales y Sanciones", icono: "gavel", leyes: ["ley-2111-2021", "decreto-2811-1974"] },
        { id: "clima", nombre: "Cambio Climático y Emisiones", icono: "cloud-rain", leyes: ["ley-1931-2018", "ley-2476-2025"] },
        { id: "ciudades", nombre: "Ciudades Verdes y SbN", icono: "building", leyes: ["ley-2476-2025", "ley-1931-2018"] },
        { id: "institucional", nombre: "SINA, Licencias y CARs", icono: "landmark", leyes: ["ley-99-1993", "decreto-2811-1974"] },
        { id: "recursos", nombre: "Agua, Aire, Suelo, Fauna y Flora", icono: "sprout", leyes: ["decreto-2811-1974", "ley-99-1993", "ley-165-1994"] }
    ],

    lineaTiempoEvolutiva: [
        {
            anio: 1974,
            norma: "Decreto Ley 2811",
            hito: "Nacimiento del Derecho Ambiental",
            impacto: "Primer código integral de recursos naturales en América Latina; visión conservacionista y de salubridad pública.",
            imagen: "assets/images/decreto_2811.jpg"
        },
        {
            anio: 1993,
            norma: "Ley 99",
            hito: "Institucionalidad y Desarrollo Sostenible",
            impacto: "Creación del SINA, Ministerio del Medio Ambiente, CARs y adopción vinculante del Principio de Precaución.",
            imagen: "assets/images/ley_99.jpg"
        },
        {
            anio: 1994,
            norma: "Ley 165",
            hito: "Compromiso Global de Biodiversidad",
            impacto: "Ratificación del Convenio de Diversidad Biológica; protección in situ, SINAP y lucha contra la biopiratería.",
            imagen: "assets/images/ley_165.jpg"
        },
        {
            anio: 2018,
            norma: "Ley 1931",
            hito: "Gestión Climática y Descarbonización",
            impacto: "Marco vinculante de mitigación y adaptación, SISCLIMA y creación del mercado de cupos transables de carbono.",
            imagen: "assets/images/ley_1931.jpg"
        },
        {
            anio: 2021,
            norma: "Ley 2111",
            hito: "Justicia Penal Ecológica",
            impacto: "Tipificación penal sin excarcelabilidad para deforestación, tráfico de fauna, ecocidio y despojo de baldíos.",
            imagen: "assets/images/ley_2111.jpg"
        },
        {
            anio: 2025,
            norma: "Ley 2476",
            hito: "Ciudades Verdes y Soluciones Naturales",
            impacto: "Transformación urbana resiliente: estándares obligatorios de espacios verdes/azules (15 m²/hab) y SbN.",
            imagen: "assets/images/ley_2476.jpg"
        }
    ],

    graficosAmbientales: {
        deforestacion: {
            titulo: "Evolución de la Deforestación en Colombia (2018 - 2026)",
            subtitulo: "Impacto del marco penal (Ley 2111 de 2021) y metas hacia Cero Deforestación (Hectáreas / Año)",
            labels: ["2018", "2019", "2020", "2021 (Ley 2111)", "2022", "2023", "2024", "2025", "Meta 2030"],
            valores: [197159, 158894, 171685, 174103, 123517, 79256, 68400, 52100, 0]
        },
        espacioVerde: {
            titulo: "Espacio Verde Efectivo en Ciudades Principales vs. Meta Ley 2476 de 2025",
            subtitulo: "Metros cuadrados (m²) de espacio verde accesible por habitante en centros urbanos",
            labels: ["Meta Ley 2476", "Bogotá D.C.", "Medellín", "Cali", "Barranquilla", "Bucaramanga", "Pereira"],
            valores: [15.0, 4.9, 3.8, 3.1, 1.4, 5.2, 6.1]
        },
        areasProtegidas: {
            titulo: "Crecimiento de Áreas Protegidas en Colombia - SINAP (Ley 165 y Ley 99)",
            subtitulo: "Superficie acumulada bajo figuras de conservación estricta (Millones de Hectáreas)",
            labels: ["1994 (CDB)", "2000", "2005", "2010", "2015", "2020", "2024 (COP16)", "2026"],
            valores: [9.2, 11.4, 14.1, 18.5, 23.8, 31.4, 49.3, 53.8]
        },
        emisionesGEI: {
            titulo: "Distribución de Emisiones de Gases de Efecto Invernadero (GEI) por Sector (Ley 1931)",
            subtitulo: "Porcentaje de contribución sectorial al inventario nacional GEI (SISCLIMA)",
            labels: ["Deforestación & Cambio Uso Suelo (AFOLU)", "Sector Agropecuario", "Transporte Terrestre y Aéreo", "Energía e Industrias", "Residuos y Aguas Residuales"],
            valores: [42, 23, 14, 12, 9]
        }
    },

    calculadorDelitos: [
        {
            id: "deforestacion",
            nombre: "Deforestación",
            articulo: "Art. 330 Código Penal (Ley 2111)",
            conducta: "Tala, quema, corte, arranque o destrucción de bosque natural igual o mayor a 1 hectárea sin autorización previa.",
            prisionMinMeses: 60,
            prisionMaxMeses: 144,
            prisionTexto: "5 a 12 años (60 a 144 meses)",
            multaMinSMLMV: 134,
            multaMaxSMLMV: 50000,
            excarcelable: false,
            agravantes: [
                { texto: "En Áreas del Sistema de Parques Nacionales Naturales o Páramos", aumento: "+33% a +50% de la pena base" },
                { texto: "Cuando afecte fuentes hídricas abastecedoras", aumento: "+33% a +50% de la pena base" },
                { texto: "Para fines de acaparamiento de tierras o ganadería extensiva", aumento: "Agravante de máxima tasación" }
            ],
            medidasCautelares: "Incautación y comiso definitivo de motosierras, maquinaria pesada y predios involucrados."
        },
        {
            id: "financiacion-deforestacion",
            nombre: "Promoción y Financiación de la Deforestación",
            articulo: "Art. 330A Código Penal (Ley 2111)",
            conducta: "Promover, financiar, dirigir, facilitar o suministrar medios para actividades de deforestación masiva.",
            prisionMinMeses: 96,
            prisionMaxMeses: 180,
            prisionTexto: "8 a 15 años (96 a 180 meses)",
            multaMinSMLMV: 300,
            multaMaxSMLMV: 50000,
            excarcelable: false,
            agravantes: [
                { texto: "Si se aprovecha de posición de poder económico o político", aumento: "Pena máxima superior a 15 años" },
                { texto: "Financiación de invasión en resguardos indígenas", aumento: "+50% de la pena" }
            ],
            medidasCautelares: "Extinción de dominio de bienes y activos financieros ilícitos."
        },
        {
            id: "trafico-fauna",
            nombre: "Tráfico de Fauna Silvestre",
            articulo: "Art. 328A Código Penal (Ley 2111)",
            conducta: "Tráfico, adquisición, transporte, exportación o comercialización de fauna silvestre, acuática o especies exóticas.",
            prisionMinMeses: 60,
            prisionMaxMeses: 135,
            prisionTexto: "5 a 11.25 años (60 a 135 meses)",
            multaMinSMLMV: 300,
            multaMaxSMLMV: 40000,
            excarcelable: false,
            agravantes: [
                { texto: "Especie en peligro de extinción, amenazada o endémica", aumento: "+33% a +50% de la pena" },
                { texto: "Cometido mediante violencia o tratos crueles a animales", aumento: "Agravante concurrente con maltrato animal" }
            ],
            medidasCautelares: "Aprehensión preventiva inmediata de los especímenes y remisión a centros de paso o liberación."
        },
        {
            id: "ecocidio",
            nombre: "Daño en los Recursos Naturales y Ecocidio",
            articulo: "Art. 333 Código Penal (Ley 2111)",
            conducta: "Destrucción masiva, daño grave, generalizado o de largo plazo a ecosistemas estratégicos o recursos naturales.",
            prisionMinMeses: 96,
            prisionMaxMeses: 168,
            prisionTexto: "8 a 14 años (96 a 168 meses)",
            multaMinSMLMV: 167,
            multaMaxSMLMV: 50000,
            excarcelable: false,
            agravantes: [
                { texto: "Contaminación por mercurio o cianuro en fuentes de agua", aumento: "Pena máxima de hasta 14 años" },
                { texto: "Afectación de salud pública humana o biomasa completa", aumento: "+50% de la pena" }
            ],
            medidasCautelares: "Cierre definitivo de establecimientos y comiso de dragas/embarcaciones."
        },
        {
            id: "apropiacion-baldios",
            nombre: "Apropiación Ilegal de Baldíos y Parques",
            articulo: "Art. 337 Código Penal (Ley 2111)",
            conducta: "Apropiarse, usurpar, parcelar o comercializar baldíos de la Nación en Parques Nacionales o Reservas Forestales.",
            prisionMinMeses: 72,
            prisionMaxMeses: 144,
            prisionTexto: "6 a 12 años (72 a 144 meses)",
            multaMinSMLMV: 140,
            multaMaxSMLMV: 50000,
            excarcelable: false,
            agravantes: [
                { texto: "Falsedad en escrituras o documentos públicos agrarios", aumento: "Concurso con delitos contra la fe pública" }
            ],
            medidasCautelares: "Desalojo inmediato y restitución del bien baldío a la Agencia Nacional de Tierras."
        }
    ],

    casosPracticos: [
        {
            pregunta: "¿Qué norma protege un humedal o río urbano frente a obras de canalización con concreto?",
            leyPrincipal: "Ley 2476 de 2025 & Ley 99 de 1993",
            respuesta: "El Art. 22 de la Ley 2476 de 2025 prohíbe taxativamente la canalización dura o entubamiento de cuerpos de agua urbanos, obligando a priorizar Soluciones basadas en la Naturaleza (SbN), parques lineales y renaturalización de riberas. Asimismo, la Ley 99 de 1993 exige permisos y evaluación de impacto ambiental con rigor subsidiario."
        },
        {
            pregunta: "¿Qué penas enfrenta quien financie la tala masiva de bosques en la Amazonía o parques nacionales?",
            leyPrincipal: "Ley 2111 de 2021 (Art. 330A C.P.)",
            respuesta: "Enfrenta pena de prisión de 8 a 15 años (con agravantes de hasta +50% por realizarse en parques nacionales o resguardos indígenas) y multas de hasta 50.000 SMLMV, sin beneficio de excarcelación ni suspensión condicional de la pena."
        },
        {
            pregunta: "¿Cómo se regula el acceso a los recursos genéticos y biodiversidad en Colombia?",
            leyPrincipal: "Ley 165 de 1994 (CDB)",
            respuesta: "A través del principio de soberanía nacional y el consentimiento fundamentado previo (Art. 15 CDB), canalizado mediante Contratos de Acceso a Recursos Genéticos suscritos ante el Ministerio de Ambiente y Desarrollo Sostenible para evitar la biopiratería."
        },
        {
            pregunta: "¿Qué instrumento obliga a las industrias a reportar emisiones de GEI y permite comercializar cupos?",
            leyPrincipal: "Ley 1931 de 2018 (Arts. 19 y 30)",
            respuesta: "El Programa Nacional de Cupos Transables de Emisión (PNCTE) y el Registro Nacional de Reducción de Emisiones (RENARE), coordinados por MinAmbiente y el IDEAM como mecanismo de mercado para descarbonizar la economía."
        },
        {
            pregunta: "¿Cuál es el fundamento para revocar o condicionar un aprovechamiento forestal o concesión de agua?",
            leyPrincipal: "Decreto Ley 2811 de 1974 (Arts. 18, 88 y 199)",
            respuesta: "El principio de que los recursos naturales no deben sobrepasar su capacidad de regeneración biológica (Art. 18) y que las aguas y flora silvestre son bienes de dominio público sujetos a la primacía del interés social y ecológico."
        }
    ]
};
