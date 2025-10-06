// Global Variables
let currentSubject = '';
let currentTopic = 1;
let currentQuestionIndex = 0;
let userAnswers = [];
let questions = [];
let reviewMode = false;
let darkMode = false;
let timer = null;
let startTime = null;

// Subject Data
const subjects = {
    digitalizacion: {
        name: 'Digitalización',
        fullName: 'Digitalización de los Sectores Productivos',
        topics: {
            1: 'Tema 1: Digitalización de los Sectores Productivos'
        }
    },
    fol: {
        name: 'FOL',
        fullName: 'Formación y Orientación Laboral',
        topics: {
            1: 'Tema 1: Salud Laboral y Condiciones de Trabajo'
        }
    },
    sistemasoperativos: {
        name: 'Sistemas Operativos',
        fullName: 'Sistemas Operativos Monopuesto',
        topics: {
            1: 'Tema 1: Introducción a los Sistemas Operativos'
        }
    },
    lenguajesmarca: {
        name: 'Lenguajes de Marca',
        fullName: 'Lenguajes de Marcas y Sistemas de Gestión',
        topics: {
            1: 'Tema 1: Introducción a los Lenguajes de Marcas'
        }
    },
    basesdatos: {
        name: 'Bases de Datos',
        fullName: 'Gestión de Bases de Datos',
        topics: {
            1: 'Tema 1: Introducción a las Bases de Datos'
        }
    },
    planificacionredes: {
        name: 'Planificación y Administración de Redes',
        fullName: 'Planificación y Administración de Redes',
        topics: {
            1: 'Tema 1: Fundamentos de Redes'
        }
    }
};

// Questions Database
const questionsDatabase = {
    digitalizacion: {
        1: [
            // TEMA 1: DIGITALIZACIÓN DE LOS SECTORES PRODUCTIVOS
            
            // 1.1 Cronología de las revoluciones industriales
            {
                question: "¿Cuáles son los principales cambios económicos de la Revolución Industrial?",
                options: ["Uso de materiales nuevos, nuevas fuentes de energía, invención de máquinas, sistema fabril y avances en transporte", "Solo cambios en la agricultura", "Únicamente mejoras en el transporte", "Solo invención de máquinas"],
                answer: 0
            },
            {
                question: "¿En qué año comenzó la Primera Revolución Industrial (Industria 1.0)?",
                options: ["1784", "1870", "1969", "2011"],
                answer: 0
            },
            {
                question: "¿Cuál fue la característica principal de la Primera Revolución Industrial?",
                options: ["Mecanización con energía de vapor y telares", "Electrificación y producción en masa", "Automatización con electrónica", "Digitalización con IoT"],
                answer: 0
            },
            {
                question: "¿Cuándo comenzó la Segunda Revolución Industrial (Industria 2.0)?",
                options: ["1870", "1784", "1969", "2011"],
                answer: 0
            },
            {
                question: "¿Cuáles fueron las principales características de la Segunda Revolución Industrial?",
                options: ["Introducción de electricidad y petróleo para producción masiva", "Solo mecanización con vapor", "Únicamente automatización", "Solo digitalización"],
                answer: 0
            },
            {
                question: "¿Qué países fueron potencias durante la Segunda Revolución Industrial?",
                options: ["Inglaterra, EE.UU. y Alemania", "Solo Inglaterra", "Solo EE.UU.", "Francia, España e Italia"],
                answer: 0
            },
            {
                question: "¿Cuándo comenzó la Tercera Revolución Industrial (Industria 3.0)?",
                options: ["Década de 1970", "1870", "1784", "2011"],
                answer: 0
            },
            {
                question: "¿Cuáles son las características principales de la Tercera Revolución Industrial?",
                options: ["Automatización, TIC, sistemas electrónicos, informática, ordenadores e Internet", "Solo mecanización", "Solo electrificación", "Solo digitalización"],
                answer: 0
            },
            {
                question: "¿Cuándo comenzó la Cuarta Revolución Industrial (Industria 4.0)?",
                options: ["2011", "1969", "1870", "1784"],
                answer: 0
            },
            {
                question: "¿Qué impulsa la Cuarta Revolución Industrial?",
                options: ["Aumento de datos, conectividad y robótica", "Solo la energía de vapor", "Solo la electricidad", "Solo la automatización básica"],
                answer: 0
            },
            
            // 1.2 Cuarta Revolución y Digitalización
            {
                question: "¿Qué es la digitalización?",
                options: ["Proceso de convertir elementos analógicos a digitales, permitiendo acceso real a datos desde cualquier lugar", "Solo usar computadoras", "Solo tener internet", "Solo automatizar procesos"],
                answer: 0
            },
            {
                question: "¿Cuáles son las tecnologías presentes en la digitalización?",
                options: ["Robótica, IoT, impresoras 3D, vehículos autónomos, IA", "Solo robótica", "Solo IoT", "Solo impresoras 3D"],
                answer: 0
            },
            {
                question: "¿Cuál es la clave de la transformación de organizaciones en la digitalización?",
                options: ["Computación en la nube", "Solo robótica", "Solo IA", "Solo IoT"],
                answer: 0
            },
            {
                question: "¿Cuáles son las ventajas de la computación en la nube?",
                options: ["Impulsa transformación digital, rompe barreras geográficas, almacenamiento seguro, mejores experiencias al cliente", "Solo almacenamiento", "Solo acceso remoto", "Solo reducción de costos"],
                answer: 0
            },
            
            // 1.3 Sistemas ciberfísicos (CPS)
            {
                question: "¿Qué son los sistemas ciberfísicos (CPS)?",
                options: ["Combinan hardware, software y redes para interactuar/controlar el mundo físico vía recolección de datos", "Solo hardware", "Solo software", "Solo redes"],
                answer: 0
            },
            {
                question: "¿Cuáles son algunos usos de los sistemas ciberfísicos?",
                options: ["Robots colaborativos, edificios inteligentes, vehículos autónomos, monitoreo de salud", "Solo robots", "Solo edificios", "Solo vehículos"],
                answer: 0
            },
            {
                question: "¿En qué aplicación militar se usan los sistemas ciberfísicos?",
                options: ["Vigilancia autónoma y comunicaciones en tiempo real", "Solo vigilancia", "Solo comunicaciones", "Solo armamento"],
                answer: 0
            },
            {
                question: "¿Cuál es el principal desafío en el diseño de sistemas ciberfísicos?",
                options: ["Integración de hardware/software con comportamiento humano", "Solo hardware", "Solo software", "Solo redes"],
                answer: 0
            }
        ]
    },
    fol: {
        1: [
            // TEMA 1: SALUD LABORAL Y CONDICIONES DE TRABAJO
            {
                question: "¿Qué es la salud laboral según la perspectiva bio-psico-social?",
                options: ["Estado de bienestar físico, mental y social de los trabajadores", "Solo ausencia de enfermedad física", "Únicamente bienestar psíquico", "Solo aspectos relacionados con la seguridad"],
                answer: 0
            },
            {
                question: "¿Cuáles son los aspectos que contemplan las condiciones de trabajo?",
                options: ["Entorno físico, ambiente laboral, organización del trabajo y horario", "Solo el entorno físico", "Únicamente las relaciones laborales", "Solo la maquinaria utilizada"],
                answer: 0
            },
            {
                question: "¿Cuál es una repercusión POSITIVA del trabajo?",
                options: ["Favorece las relaciones interpersonales", "Genera riesgos físicos", "Produce fatiga emocional", "Causa estrés laboral"],
                answer: 0
            },
            {
                question: "¿Cuál es una repercusión NEGATIVA del trabajo?",
                options: ["Puede generar riesgos psicosociales como estrés", "Proporciona recursos económicos", "Es un factor de desarrollo personal", "Favorece las relaciones interpersonales"],
                answer: 0
            },
            {
                question: "¿Cómo es la relación entre trabajo y salud?",
                options: ["Bidireccional: las condiciones laborales afectan la salud y se necesita salud para trabajar", "Unidireccional: solo el trabajo afecta la salud", "No existe relación entre ambos", "Solo la salud afecta al trabajo"],
                answer: 0
            },
            
            // TEMA 2: RIESGOS Y DAÑOS PROFESIONALES
            {
                question: "¿Qué es el PELIGRO en prevención de riesgos laborales?",
                options: ["La propiedad de algo para ocasionar daños", "La probabilidad de que ocurra un accidente", "Los perjuicios causados por un riesgo", "Una situación de trabajo normal"],
                answer: 0
            },
            {
                question: "¿Qué es el RIESGO en prevención de riesgos laborales?",
                options: ["La probabilidad de que la capacidad de ocasionar daños se actualice", "La propiedad de algo para ocasionar daños", "Los perjuicios causados por la materialización", "Un factor de seguridad"],
                answer: 0
            },
            {
                question: "¿Cuáles son los tres elementos que definen un riesgo laboral?",
                options: ["Tipo de suceso, agente material e identificación del daño", "Peligro, riesgo y daño", "Prevención, protección y corrección", "Trabajador, empresa y entorno"],
                answer: 0
            },
            {
                question: "¿Qué tipo de factores de riesgo suelen causar accidentes de trabajo?",
                options: ["Factores de riesgo de tipo mecánico", "Factores químicos", "Factores biológicos", "Factores psicosociales"],
                answer: 0
            },
            {
                question: "¿Qué tipo de factores de riesgo suelen causar enfermedades profesionales?",
                options: ["Factores químicos, físicos y biológicos", "Solo factores mecánicos", "Solo factores psicosociales", "Solo factores ergonómicos"],
                answer: 0
            },
            {
                question: "¿Cuáles son los factores de riesgo psicosociales?",
                options: ["Estrés, acoso laboral, síndrome de burnout", "Solo ruido y vibraciones", "Solo productos químicos", "Solo posturas inadecuadas"],
                answer: 0
            },
            {
                question: "¿Qué es un accidente de trabajo según la definición legal?",
                options: ["Lesión corporal que sufre el trabajador con ocasión o por consecuencia del trabajo", "Solo lesiones graves", "Solo accidentes mortales", "Solo lesiones en el lugar de trabajo"],
                answer: 0
            },
            {
                question: "¿Qué es una enfermedad profesional?",
                options: ["Deterioro lento y paulatino de la salud del trabajador por exposición crónica a situaciones adversas", "Solo enfermedades agudas", "Solo enfermedades contagiosas", "Solo enfermedades mentales"],
                answer: 0
            },
            {
                question: "¿Cuál es la diferencia principal entre accidente de trabajo y enfermedad profesional?",
                options: ["El accidente es súbito, la enfermedad es gradual", "No hay diferencias", "Solo el lugar donde ocurren", "Solo la gravedad"],
                answer: 0
            },
            {
                question: "¿Qué son los factores de riesgo ergonómicos?",
                options: ["Relacionados con la adaptación del trabajo al trabajador", "Solo factores químicos", "Solo factores físicos", "Solo factores mecánicos"],
                answer: 0
            }
        ]
    },
    sistemasoperativos: {
        1: [
            // TEMA 1: INTRODUCCIÓN A LOS SISTEMAS OPERATIVOS
            
            // Definiciones fundamentales
            {
                question: "¿Qué es un sistema informático según la definición del temario?",
                options: ["Sistema compuesto por hardware, software y personal para el tratamiento de la información", "Solo componentes físicos como placas y circuitos", "Únicamente programas y aplicaciones", "Solo las personas que usan ordenadores"],
                answer: 0
            },
            {
                question: "¿Cuál es la definición correcta de un sistema operativo?",
                options: ["Programa o conjunto de programas que actúa como intermediario entre el usuario y el hardware, gestionando los recursos del sistema", "Solo un programa para navegar por internet", "Únicamente software de aplicación", "Solo drivers de dispositivos"],
                answer: 0
            },
            {
                question: "¿Qué significa POST en el contexto del arranque del sistema operativo?",
                options: ["Diagnóstico inicial que verifica que no existan errores de conexión y que todos los dispositivos trabajen correctamente", "Programa para enviar correos electrónicos", "Sistema de archivos del disco duro", "Protocolo de red para internet"],
                answer: 0
            },
            {
                question: "¿Cuáles son los tres elementos básicos de un sistema informático?",
                options: ["Hardware (componente físico), Software (componente lógico), Personal (componente humano)", "Solo hardware y software", "Solo software y personal", "Solo hardware y personal"],
                answer: 0
            },
            
            // Funciones del Sistema Operativo
            {
                question: "¿Cuáles son las principales funciones de un sistema operativo?",
                options: ["Control de ejecución de programas, administración de periféricos, gestión de permisos, control de concurrencia, control de errores, administración de memoria y control de seguridad", "Solo gestión de archivos", "Solo control de usuarios", "Solo administración de memoria"],
                answer: 0
            },
            {
                question: "¿Qué función del SO se encarga de permitir que varios programas se ejecuten simultáneamente?",
                options: ["Control de concurrencia", "Administración de periféricos", "Gestión de permisos", "Control de errores"],
                answer: 0
            },
            {
                question: "¿Cuál es la estructura organizativa recomendada para un sistema operativo?",
                options: ["Estructura jerárquica con capas, donde las zonas más intensas o núcleo están más protegidas", "Estructura plana sin capas", "Solo una capa de aplicaciones", "Estructura circular"],
                answer: 0
            },
            
            // Clasificación por servicios ofrecidos - Usuarios
            {
                question: "¿Qué caracteriza a un sistema operativo monousuario?",
                options: ["Solo soporta un usuario a la vez, sin importar las características de la máquina", "Soporta múltiples usuarios simultáneamente", "Solo funciona en servidores", "Requiere conexión a red"],
                answer: 0
            },
            {
                question: "¿Qué caracteriza a un sistema operativo multiusuario?",
                options: ["Permite que varios usuarios trabajen simultáneamente, compartiendo recursos del sistema", "Solo permite un usuario a la vez", "Solo funciona en ordenadores personales", "No permite compartir recursos"],
                answer: 0
            },
            {
                question: "¿Cuál es un ejemplo de sistema operativo monousuario?",
                options: ["MS-DOS", "Linux", "Unix", "Windows Server"],
                answer: 0
            },
            
            // Clasificación por servicios ofrecidos - Tareas
            {
                question: "¿Qué es un sistema operativo monotarea?",
                options: ["Solo puede ejecutar un programa a la vez", "Puede ejecutar múltiples programas simultáneamente", "Solo funciona con una aplicación específica", "Requiere múltiples procesadores"],
                answer: 0
            },
            {
                question: "¿Qué es un sistema operativo multitarea?",
                options: ["Puede ejecutar varios programas al mismo tiempo, compartiendo el tiempo de procesador", "Solo ejecuta un programa a la vez", "Solo funciona en servidores", "Requiere múltiples usuarios"],
                answer: 0
            },
            {
                question: "¿Cuál es un ejemplo de sistema operativo multitarea?",
                options: ["Windows 10", "MS-DOS", "Sistema operativo de una calculadora", "BIOS"],
                answer: 0
            },
            
            // Clasificación por servicios ofrecidos - Procesamiento
            {
                question: "¿Qué caracteriza el procesamiento por lotes (batch)?",
                options: ["Los trabajos se ejecutan secuencialmente sin intervención del usuario", "Permite interacción constante del usuario", "Solo funciona en tiempo real", "Requiere múltiples procesadores"],
                answer: 0
            },
            {
                question: "¿Qué es el procesamiento interactivo?",
                options: ["Permite la comunicación directa entre usuario y sistema durante la ejecución", "Solo ejecuta trabajos predefinidos", "No permite intervención del usuario", "Solo funciona por lotes"],
                answer: 0
            },
            {
                question: "¿Qué caracteriza a los sistemas de tiempo real?",
                options: ["Deben responder a eventos dentro de un tiempo determinado y crítico", "No tienen restricciones de tiempo", "Solo procesan por lotes", "Solo permiten procesamiento interactivo"],
                answer: 0
            }
        ]
    },
lenguajesmarca: {
    1: [
        {
            question: "¿Qué es un lenguaje de marcas?",
            options: [
                "Un sistema de anotación que permite estructurar y dar formato a documentos mediante etiquetas",
                "Un lenguaje de programación orientado a objetos",
                "Una base de datos relacional",
                "Un protocolo de comunicación de red"
            ],
            answer: 0
        },
        {
            question: "¿Cuál es la principal característica de las etiquetas en un lenguaje de marcas?",
            options: [
                "Delimitan y definen la estructura del contenido sin formar parte del contenido visible",
                "Contienen el contenido principal del documento",
                "Solo sirven para dar color al texto",
                "Ejecutan código de programación"
            ],
            answer: 0
        },
        {
            question: "¿Qué significa que un lenguaje de marcas sea 'independiente de la plataforma'?",
            options: [
                "Puede ser interpretado por diferentes sistemas operativos y aplicaciones",
                "Solo funciona en sistemas Windows",
                "Requiere un software específico para funcionar",
                "Solo puede usarse en dispositivos móviles"
            ],
            answer: 0
        },
        {
            question: "¿Cuál de estos es un ejemplo de lenguaje de marcas?",
            options: [
                "HTML",
                "Java",
                "Python",
                "C++"
            ],
            answer: 0
        },
        {
            question: "¿Qué ventaja principal ofrecen los lenguajes de marcas para el almacenamiento de datos?",
            options: [
                "Permiten estructurar la información de forma jerárquica y legible",
                "Reducen significativamente el tamaño de los archivos",
                "Encriptan automáticamente la información",
                "Solo permiten almacenar texto plano"
            ],
            answer: 0
        },
        {
            question: "¿Qué característica hace que los lenguajes de marcas sean ideales para el intercambio de información?",
            options: [
                "Su formato de texto plano y estructura estandarizada",
                "Su capacidad de ejecutar código",
                "Su dependencia de software propietario",
                "Su formato binario comprimido"
            ],
            answer: 0
        },
        {
            question: "¿Cuál es la diferencia principal entre contenido y marcado en un documento?",
            options: [
                "El contenido es la información que se quiere transmitir, el marcado define cómo estructurarla",
                "No hay diferencia, son lo mismo",
                "El marcado contiene la información principal",
                "El contenido solo incluye imágenes"
            ],
            answer: 0
        },
        {
            question: "¿Qué permite la separación entre contenido y presentación en los lenguajes de marcas?",
            options: [
                "Modificar el aspecto visual sin alterar la estructura del contenido",
                "Ejecutar código de programación",
                "Comprimir automáticamente los archivos",
                "Encriptar la información"
            ],
            answer: 0
        },
        {
            question: "¿Cómo se denomina el documento que define la estructura y las reglas de un lenguaje de marcas?",
            options: [
                "DTD (Document Type Definition)",
                "DOM (Document Object Model)",
                "JSON Schema",
                "XSLT (Extensible Stylesheet Language Transformations)"
            ],
            answer: 0
        },
        {
            question: "¿Qué relación tiene XML con los lenguajes de marcas?",
            options: [
                "Es un estándar que define una forma flexible y extensible de crear lenguajes de marcas",
                "Es un lenguaje de programación orientado a objetos",
                "Es una base de datos documental propietaria",
                "Es una hoja de estilo para la presentación visual de HTML"
            ],
            answer: 0
        },
        {
            question: "¿Por qué los lenguajes de marcas son útiles para el intercambio de datos?",
            options: [
                "Porque su estructura jerárquica y estandarizada permite interoperabilidad entre sistemas",
                "Porque reducen el tamaño de los archivos transmitidos",
                "Porque eliminan la necesidad de validación de los datos",
                "Porque impiden la duplicación de información"
            ],
            answer: 0
        },
        {
            question: "¿Qué tipo de estructura tienen los documentos en los lenguajes de marcas?",
            options: [
                "Jerárquica o en árbol",
                "Lineal y secuencial",
                "Tabular y matricial",
                "En red o grafo dirigido"
            ],
            answer: 0
        },
        {
            question: "¿Qué relación existe entre un documento y su DTD en un lenguaje de marcas?",
            options: [
                "El DTD define las reglas que debe cumplir el documento",
                "El DTD contiene los datos que el documento mostrará",
                "El DTD describe la apariencia visual del documento",
                "El DTD actúa como un archivo de respaldo del documento"
            ],
            answer: 0
        },
        {
            question: "¿Qué caracteriza a los lenguajes de marcas frente a los lenguajes de programación?",
            options: [
                "Describen la estructura y contenido de los datos, no su comportamiento",
                "Permiten ejecutar código directamente en el procesador",
                "Se utilizan para compilar programas ejecutables",
                "Dependen de un entorno de desarrollo integrado (IDE)"
            ],
            answer: 0
        },
        {
            question: "¿Qué permite la utilización de etiquetas anidadas en un lenguaje de marcas?",
            options: [
                "Representar la jerarquía de la información contenida",
                "Acelerar la carga del documento en el navegador",
                "Reducir el tamaño del archivo",
                "Generar automáticamente metadatos visuales"
            ],
            answer: 0
        },
        {
            question: "¿Qué beneficio aporta la independencia de formato en los lenguajes de marcas?",
            options: [
                "Facilita que la información pueda procesarse en distintos entornos y aplicaciones",
                "Permite que el documento solo pueda abrirse con un programa específico",
                "Garantiza la seguridad frente a errores sintácticos",
                "Evita la necesidad de definir una estructura jerárquica"
            ],
            answer: 0
        },
        {
            question: "¿Qué propiedad comparten todos los lenguajes de marcas?",
            options: [
                "La separación entre contenido, estructura y presentación",
                "La dependencia de un compilador específico",
                "El uso obligatorio de etiquetas predefinidas por el sistema",
                "La ejecución de código binario"
            ],
            answer: 0
        },
        {
            question: "¿Qué ventaja ofrece XML frente a HTML?",
            options: [
                "Permite definir etiquetas personalizadas adaptadas a cada tipo de información",
                "Es más rápido de procesar por los navegadores web",
                "No requiere validación mediante DTD",
                "Tiene una sintaxis más simple y menos estricta"
            ],
            answer: 0
        },
        {
            question: "¿Qué permite la estandarización de los lenguajes de marcas?",
            options: [
                "Garantizar la compatibilidad entre distintos sistemas y plataformas",
                "Limitar la creación de nuevos tipos de documentos",
                "Reducir el tamaño de los archivos de configuración",
                "Evitar el uso de etiquetas semánticas"
            ],
            answer: 0
        },
        {
            question: "¿Qué diferencia principal hay entre las etiquetas de apertura y de cierre en un lenguaje de marcas?",
            options: [
                "Las etiquetas de cierre incluyen una barra inclinada (/) antes del nombre",
                "Las etiquetas de cierre determinan el formato visual del contenido",
                "Las etiquetas de apertura contienen los datos principales",
                "Las etiquetas de cierre son opcionales en todos los casos"
            ],
            answer: 0
        }
    ]
    },
    basesdatos: {
    1: [
        {
            question: "¿Qué se entiende por base de datos según el temario?",
            options: [
                "Una colección de datos relacionados entre sí con significado implícito",
                "Un conjunto de programas que gestionan la información de usuario",
                "Una lista de archivos almacenados en disco duro",
                "Un documento con datos no estructurados"
            ],
            answer: 0
        },
        {
            question: "¿Qué determina el significado de un dato dentro de una base de datos?",
            options: [
                "El contexto en el que se utiliza",
                "El formato del registro en disco",
                "El tamaño del campo",
                "El número de usuarios conectados"
            ],
            answer: 0
        },
        {
            question: "¿Qué herramienta software permite definir, crear y mantener una base de datos?",
            options: [
                "El Sistema Gestor de Bases de Datos (SGBD)",
                "El sistema operativo",
                "El compilador SQL",
                "El servidor de aplicaciones"
            ],
            answer: 0
        },
        {
            question: "¿Qué modelo de base de datos utiliza una estructura en forma de árbol?",
            options: [
                "El modelo jerárquico",
                "El modelo en red",
                "El modelo relacional",
                "El modelo multidimensional"
            ],
            answer: 0
        },
        {
            question: "¿Qué modelo de base de datos permite relaciones más complejas entre registros que el jerárquico?",
            options: [
                "El modelo en red",
                "El modelo relacional",
                "El modelo multidimensional",
                "El modelo orientado a objetos"
            ],
            answer: 0
        },
        {
            question: "¿Cómo se estructuran los datos en el modelo relacional?",
            options: [
                "En tablas compuestas por filas (tuplas) y columnas (atributos)",
                "En listas de registros ordenados alfabéticamente",
                "En árboles de decisión",
                "En matrices de bits"
            ],
            answer: 0
        },
        {
            question: "¿Qué tipo de base de datos utiliza más de dos dimensiones para representar la información?",
            options: [
                "La base de datos multidimensional",
                "La base de datos relacional",
                "La base de datos jerárquica",
                "La base de datos en red"
            ],
            answer: 0
        },
        {
            question: "¿Qué tipo de datos maneja de forma natural una base de datos orientada a objetos?",
            options: [
                "Gráficos, imágenes, voz y texto",
                "Solo datos numéricos",
                "Archivos de texto plano",
                "Tablas con claves primarias"
            ],
            answer: 0
        },
        {
            question: "¿Cuál de las siguientes es una ventaja de las bases de datos relacionales?",
            options: [
                "Menor redundancia de datos",
                "Mayor duplicación de registros",
                "Requieren menos formación del personal",
                "Se instalan sin coste"
            ],
            answer: 0
        },
        {
            question: "¿Qué función cumplen las claves primarias en una base de datos?",
            options: [
                "Identificar de forma única cada registro de una tabla",
                "Conectar bases de datos distintas entre sí",
                "Determinar el tamaño del archivo",
                "Aumentar la velocidad del procesador"
            ],
            answer: 0
        },
        {
            question: "¿Qué relación se establece mediante una clave foránea?",
            options: [
                "Entre una tabla y otra a través de un campo común",
                "Entre una fila y una columna de la misma tabla",
                "Entre un registro y un índice hash",
                "Entre un archivo y su directorio"
            ],
            answer: 0
        },
        {
            question: "¿Qué garantiza la restricción de integridad referencial?",
            options: [
                "Que los valores de las claves foráneas existan en la tabla referenciada",
                "Que los datos sean siempre numéricos",
                "Que todas las tablas tengan el mismo número de columnas",
                "Que las vistas estén actualizadas automáticamente"
            ],
            answer: 0
        },
        {
            question: "¿Qué son los metadatos?",
            options: [
                "Datos que describen otros datos de la base de datos",
                "Copias de seguridad de los datos almacenados",
                "Registros redundantes eliminados del sistema",
                "Campos de texto utilizados como comentarios"
            ],
            answer: 0
        },
        {
            question: "¿Qué es una vista en una base de datos?",
            options: [
                "Una tabla virtual obtenida a partir de una o varias tablas mediante una consulta",
                "Una copia física de una tabla de la base de datos",
                "Una herramienta para editar metadatos",
                "Una restricción sobre los tipos de datos"
            ],
            answer: 0
        },
        {
            question: "¿Qué es un procedimiento almacenado?",
            options: [
                "Un conjunto de instrucciones SQL guardadas en la base de datos para su ejecución",
                "Un archivo externo con comandos del sistema",
                "Un tipo de metadato descriptivo",
                "Una consulta temporal"
            ],
            answer: 0
        },
        {
            question: "¿Qué se entiende por almacenamiento primario en un sistema informático?",
            options: [
                "La memoria principal o RAM y las memorias caché",
                "Los discos duros externos",
                "Los backups automáticos",
                "Los archivos comprimidos del sistema"
            ],
            answer: 0
        },
        {
            question: "¿Qué tipo de organización de archivos utiliza un fichero de índice para acceder a los registros?",
            options: [
                "La organización indexada",
                "La organización secuencial",
                "La organización por dispersión",
                "La organización relativa"
            ],
            answer: 0
        },
        {
            question: "¿Qué caracteriza a la organización de archivos por dispersión o hash?",
            options: [
                "Los registros se almacenan según una función hash aplicada a un campo clave",
                "Los registros se ordenan alfabéticamente en el disco",
                "Cada registro se enlaza con el siguiente mediante punteros",
                "Todos los registros se guardan en un único bloque físico"
            ],
            answer: 0
        },
        {
            question: "¿Qué función cumple un índice secundario?",
            options: [
                "Permitir el acceso a registros según un campo distinto al de ordenamiento principal",
                "Eliminar duplicados de datos redundantes",
                "Definir la estructura de las tablas relacionales",
                "Acelerar la escritura de registros en disco"
            ],
            answer: 0
        },
        {
            question: "¿Qué tipo de índice utiliza estructuras de árbol para mejorar la búsqueda?",
            options: [
                "Índices multinivel o árboles B/B+",
                "Índices secuenciales simples",
                "Índices hash directos",
                "Índices por dispersión aleatoria"
            ],
            answer: 0
        },
        {
            question: "¿Qué componente del SGBD contiene la definición de las estructuras de datos y restricciones?",
            options: [
                "El catálogo o diccionario de datos",
                "El optimizador de consultas",
                "El planificador de tareas",
                "El sistema de recuperación"
            ],
            answer: 0
        },
        {
            question: "¿Qué tipo de usuario se encarga de definir la estructura de la base de datos y sus restricciones?",
            options: [
                "El diseñador de base de datos",
                "El administrador del sistema",
                "El usuario final",
                "El programador de aplicaciones"
            ],
            answer: 0
        },
        {
            question: "¿Cuál de las siguientes NO es una función principal de un SGBD?",
            options: [
                "Reducir el tamaño físico de los archivos binarios",
                "Garantizar la integridad y recuperación de los datos",
                "Controlar la concurrencia de accesos simultáneos",
                "Incorporar un catálogo de metadatos"
            ],
            answer: 0
        },
        {
            question: "¿Qué tipo de SGBD permite que varios usuarios accedan simultáneamente a los datos?",
            options: [
                "El SGBD multiusuario",
                "El SGBD monousuario",
                "El SGBD distribuido",
                "El SGBD centralizado"
            ],
            answer: 0
        },
        {
            question: "¿Qué tipo de SGBD se encuentra distribuido en varios equipos conectados en red?",
            options: [
                "El SGBD distribuido",
                "El SGBD centralizado",
                "El SGBD relacional",
                "El SGBD local"
            ],
            answer: 0
        },
        {
            question: "¿Qué tipo de SGBD se clasifica según el tipo de datos que maneja, como relacionales o XML?",
            options: [
                "Según el tipo de datos soportados",
                "Según el número de usuarios",
                "Según la arquitectura física",
                "Según el modelo de seguridad"
            ],
            answer: 0
        },
        {
            question: "¿Cuál de los siguientes SGBD se considera libre y de código abierto?",
            options: [
                "PostgreSQL",
                "Oracle Database",
                "Microsoft SQL Server",
                "IBM Db2"
            ],
            answer: 0
        },
        {
            question: "¿Qué tipo de SGBD se clasifica como comercial?",
            options: [
                "Oracle o SQL Server",
                "MySQL o PostgreSQL",
                "LibreOffice Base",
                "MongoDB"
            ],
            answer: 0
        },
        {
            question: "¿Qué ventaja ofrecen los SGBD libres según el temario?",
            options: [
                "Disponibilidad abierta y gratuita en la red",
                "Mayor rendimiento que los comerciales",
                "No requieren mantenimiento",
                "Incluyen soporte empresarial garantizado"
            ],
            answer: 0
        },
        {
            question: "¿Qué lenguaje soportan la mayoría de los SGBD relacionales?",
            options: [
                "SQL",
                "HTML",
                "XML",
                "Python"
            ],
            answer: 0
        }
        ]
    },
    planificacionredes: {
"1": [
      {
        "question": "¿Qué es una red informática?",
        "options": [
          "Un conjunto de ordenadores conectados para compartir recursos y servicios",
          "Un programa de comunicación entre usuarios",
          "Un tipo de servidor web",
          "Un protocolo de transferencia de archivos"
        ],
        "answer": 0
      },
      {
        "question": "¿Qué componente de red se encarga de conectar varios dispositivos en una LAN?",
        "options": [
          "Router",
          "Switch",
          "Servidor DNS",
          "Firewall"
        ],
        "answer": 1
      },
      {
        "question": "¿Cuál es la principal función de una Intranet?",
        "options": [
          "Permitir el acceso público a servicios web",
          "Ofrecer servicios de Internet dentro de una red privada empresarial",
          "Sustituir Internet en redes domésticas",
          "Compartir archivos entre diferentes empresas"
        ],
        "answer": 1
      },
      {
        "question": "¿Qué topología conecta todas las estaciones a un nodo central?",
        "options": ["Bus", "Anillo", "Estrella", "Malla"],
        "answer": 2
      },
      {
        "question": "¿Qué tipo de red abarca áreas geográficas muy grandes como países o continentes?",
        "options": ["LAN", "MAN", "WAN", "PAN"],
        "answer": 2
      },
      {
        "question": "¿Qué tipo de red utiliza Bluetooth como tecnología de conexión?",
        "options": ["PAN", "LAN", "MAN", "WAN"],
        "answer": 0
      },
      {
        "question": "¿Cuál es la velocidad típica de una LAN moderna?",
        "options": ["10 Mbps", "100/1000 Mbps o más", "1 Mbps", "56 Kbps"],
        "answer": 1
      },
      {
        "question": "¿Qué ventaja tiene la topología en estrella?",
        "options": [
          "Fácil diagnóstico de fallos y flexibilidad en ampliaciones",
          "Requiere poco cableado",
          "Es más rápida que la topología en malla",
          "Evita totalmente las averías"
        ],
        "answer": 0
      },
      {
        "question": "¿Qué base usa el sistema binario?",
        "options": ["8", "10", "2", "16"],
        "answer": 2
      },
      {
        "question": "¿Qué sistema numérico utiliza los símbolos 0 al 9 y A al F?",
        "options": ["Decimal", "Octal", "Binario", "Hexadecimal"],
        "answer": 3
      },
      {
        "question": "¿Qué organización define estándares como IEEE 802.3 y 802.11?",
        "options": ["ANSI", "ITU", "IEEE", "ISO"],
        "answer": 2
      },
      {
        "question": "¿Cuál es la función principal de la ISO?",
        "options": [
          "Regular las telecomunicaciones internacionales",
          "Normalizar estándares técnicos voluntarios a nivel mundial",
          "Desarrollar sistemas operativos",
          "Gestionar las direcciones IP"
        ],
        "answer": 1
      },
      {
        "question": "¿Qué característica de una arquitectura de red permite su crecimiento sin afectar el rendimiento?",
        "options": ["Tolerancia a fallos", "Escalabilidad", "Seguridad", "Calidad de servicio"],
        "answer": 1
      },
      {
        "question": "¿Cuál de las siguientes NO es una característica básica de las arquitecturas de red?",
        "options": ["Seguridad", "Escalabilidad", "Interactividad visual", "Tolerancia a fallos"],
        "answer": 2
      },
      {
        "question": "¿Qué capa del modelo TCP/IP se encarga de la segmentación de datos y control de errores de extremo a extremo?",
        "options": ["Aplicación", "Transporte", "Internet", "Acceso a red"],
        "answer": 1
      },
      {
        "question": "¿Qué protocolo pertenece a la capa de transporte?",
        "options": ["IP", "TCP", "ARP", "HTTP"],
        "answer": 1
      },
      {
        "question": "¿Qué capa del modelo OSI se encarga de transmitir los bits por el medio físico?",
        "options": ["Enlace de datos", "Red", "Física", "Transporte"],
        "answer": 2
      },
      {
        "question": "¿Cuál es la función del nivel de enlace de datos en el modelo OSI?",
        "options": [
          "Gestionar direcciones lógicas",
          "Detectar y retransmitir tramas con errores",
          "Definir la codificación de los bits",
          "Establecer sesiones entre procesos"
        ],
        "answer": 1
      },
      {
        "question": "¿Qué nivel del modelo OSI se encarga de cifrar y comprimir los datos?",
        "options": ["Presentación", "Sesión", "Transporte", "Aplicación"],
        "answer": 0
      },
      {
        "question": "¿Cuál es la misión principal del nivel de red?",
        "options": [
          "Transmitir bits por el cable",
          "Gestionar las direcciones físicas",
          "Encaminar paquetes entre redes",
          "Establecer sesiones entre usuarios"
        ],
        "answer": 2
      },
      {
        "question": "¿Qué capa del modelo TCP/IP corresponde al nivel de Internet del modelo OSI?",
        "options": ["Aplicación", "Transporte", "Red", "Acceso a red"],
        "answer": 2
      },
      {
        "question": "¿Qué capa OSI agrupa las funciones de sesión, presentación y aplicación en el modelo TCP/IP?",
        "options": ["Transporte", "Aplicación", "Red", "Enlace"],
        "answer": 1
      },
      {
        "question": "¿Cuál es el propósito de la encapsulación en redes?",
        "options": [
          "Agregar cabeceras y colas en cada capa para el envío de datos",
          "Reducir el tamaño de los paquetes",
          "Eliminar redundancias en los protocolos",
          "Evitar la fragmentación"
        ],
        "answer": 0
      },
      {
        "question": "¿Qué estándar define la transmisión sobre líneas telefónicas?",
        "options": ["Serie V de la ITU", "IEEE 802.3", "ISO 9001", "POSIX"],
        "answer": 0
      },
      {
        "question": "¿Qué protocolo pertenece a la capa de aplicación en TCP/IP?",
        "options": ["IP", "ARP", "DNS", "PPP"],
        "answer": 2
      },
      {
        "question": "¿Qué característica define la tolerancia a fallos en una red?",
        "options": [
          "Evitar que un emisor rápido sature al receptor",
          "Disponer de rutas alternativas ante errores",
          "Permitir la conexión de diferentes tipos de redes",
          "Encriptar la información transmitida"
        ],
        "answer": 1
      },
      {
        "question": "¿Qué nivel del modelo OSI se encarga del control de flujo extremo a extremo?",
        "options": ["Red", "Transporte", "Enlace", "Aplicación"],
        "answer": 1
      },
      {
        "question": "¿Qué tipo de red interconecta varios edificios en una ciudad?",
        "options": ["PAN", "LAN", "MAN", "WAN"],
        "answer": 2
      },
      {
        "question": "¿Qué protocolo permite la traducción de direcciones IP a direcciones físicas?",
        "options": ["ARP", "DNS", "DHCP", "TCP"],
        "answer": 0
      },
      {
        "question": "¿Qué topología proporciona mayor redundancia y seguridad al tener múltiples caminos entre nodos?",
        "options": ["Malla", "Bus", "Anillo", "Estrella"],
        "answer": 0
      },
      {
        "question": "¿Qué tipo de red inalámbrica conecta directamente dispositivos sin punto de acceso?",
        "options": [
          "Red de infraestructura",
          "Red bridge",
          "Red Ad hoc",
          "Red cliente-servidor"
        ],
        "answer": 2
      },
      {
        "question": "¿Qué es una red de infraestructura Wi-Fi?",
        "options": [
          "Una red donde los dispositivos se conectan entre sí sin intermediarios",
          "Una red con un punto de acceso que conecta dispositivos a la red cableada",
          "Una red exclusivamente para dispositivos móviles",
          "Una red formada por puentes inalámbricos"
        ],
        "answer": 1
      },
      {
        "question": "¿Qué tipo de red inalámbrica conecta dos redes LAN por medio de puntos de acceso?",
        "options": ["Red Ad hoc", "Red de infraestructura", "Red bridge", "Red troncal"],
        "answer": 2
      },
      {
        "question": "¿Qué técnica garantiza la confidencialidad en las comunicaciones de red?",
        "options": ["Multiplexación", "Encaminamiento", "Cifrado de datos", "Control de flujo"],
        "answer": 2
      },
      {
        "question": "¿Qué protocolo de aplicación permite transferir archivos entre cliente y servidor?",
        "options": ["SMTP", "HTTP", "FTP", "DNS"],
        "answer": 2
      }
        ]
    }
};

// DOM Elements
const loadingScreen = document.getElementById('loading-screen');
const appContent = document.getElementById('app-content');
const homeScreen = document.getElementById('home-screen');
const subjectScreen = document.getElementById('subject-screen');
const quizScreen = document.getElementById('quiz-screen');
const resultsScreen = document.getElementById('results-screen');

// Initialize App
document.addEventListener('DOMContentLoaded', function() {
    // Load saved preferences
    loadPreferences();
    
    // Show loading screen briefly
    setTimeout(() => {
        loadingScreen.style.opacity = '0';
        setTimeout(() => {
            loadingScreen.style.display = 'none';
            appContent.classList.remove('hidden');
            showHome();
        }, 500);
    }, 1500);
});

// Navigation Functions
function showHome() {
    hideAllScreens();
    homeScreen.classList.remove('hidden');
    homeScreen.classList.add('fade-in');
    
    // Hide timer and progress
    document.getElementById('timer').classList.add('hidden');
    document.getElementById('progress-info').classList.add('hidden');
    
    // Reset current subject
    currentSubject = '';
    currentTopic = 1;
}

function selectSubject(subject) {
    if (!subjects[subject]) return;
    
    currentSubject = subject;
    showSubject(subject);
}

function showSubject(subject) {
    if (!subjects[subject]) return;
    
    hideAllScreens();
    subjectScreen.classList.remove('hidden');
    subjectScreen.classList.add('fade-in');
    
    // Update breadcrumb and header
    document.getElementById('current-subject-name').textContent = subjects[subject].name;
    document.getElementById('subject-title').textContent = subjects[subject].fullName;
    document.getElementById('subject-description').textContent = 'Selecciona el tema que quieres estudiar';
    
    // Populate topics
    const topicsGrid = document.getElementById('topics-grid');
    topicsGrid.innerHTML = '';
    
    Object.entries(subjects[subject].topics).forEach(([topicId, topicName]) => {
        const topicCard = document.createElement('div');
        topicCard.className = 'topic-card';
        topicCard.onclick = () => startQuiz(subject, parseInt(topicId));
        
        topicCard.innerHTML = `
            <h3>${topicName}</h3>
            <p>Cuestionario disponible</p>
        `;
        
        topicsGrid.appendChild(topicCard);
    });
}

// Función para mezclar aleatoriamente un array (algoritmo Fisher-Yates)
function shuffleArray(array) {
    const shuffled = [...array]; // Crear una copia del array
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

// Función para mezclar las opciones de una pregunta manteniendo la respuesta correcta
function shuffleQuestionOptions(question) {
    const originalCorrectAnswer = question.answer;
    const originalOptions = [...question.options];
    
    // Crear array de índices para rastrear las posiciones originales
    const indexMap = originalOptions.map((option, index) => ({ option, originalIndex: index }));
    
    // Mezclar el array de índices
    const shuffledIndexMap = shuffleArray(indexMap);
    
    // Crear las nuevas opciones mezcladas
    const shuffledOptions = shuffledIndexMap.map(item => item.option);
    
    // Encontrar la nueva posición de la respuesta correcta
    const newCorrectAnswer = shuffledIndexMap.findIndex(item => item.originalIndex === originalCorrectAnswer);
    
    return {
        ...question,
        options: shuffledOptions,
        answer: newCorrectAnswer
    };
}

function startQuiz(subject, topic) {
    currentSubject = subject;
    currentTopic = topic;
    currentQuestionIndex = 0;
    userAnswers = [];
    reviewMode = false;
    
    // Get questions for this subject and topic
    const originalQuestions = questionsDatabase[subject] && questionsDatabase[subject][topic] ? 
                questionsDatabase[subject][topic] : [];
    
    if (originalQuestions.length === 0) {
        alert('No hay preguntas disponibles para este tema.');
        return;
    }
    
    // Mezclar el orden de las preguntas
    const shuffledQuestions = shuffleArray(originalQuestions);
    
    // Mezclar las opciones de cada pregunta
    questions = shuffledQuestions.map(question => shuffleQuestionOptions(question));
    
    // Initialize user answers array
    userAnswers = new Array(questions.length).fill(null);
    
    hideAllScreens();
    quizScreen.classList.remove('hidden');
    quizScreen.classList.add('fade-in');
    
    // Update breadcrumb
    document.getElementById('breadcrumb-subject').textContent = subjects[subject].name;
    document.getElementById('breadcrumb-topic').textContent = subjects[subject].topics[topic];
    
    // Show timer and progress
    document.getElementById('timer').classList.remove('hidden');
    document.getElementById('progress-info').classList.remove('hidden');
    
    // Start timer
    startTimer();
    
    // Show first question
    showQuestion();
    updateProgress();
}

function hideAllScreens() {
    homeScreen.classList.add('hidden');
    subjectScreen.classList.add('hidden');
    quizScreen.classList.add('hidden');
    resultsScreen.classList.add('hidden');
}

// Quiz Functions
function showQuestion() {
    if (currentQuestionIndex >= questions.length) {
        showResults();
        return;
    }
    
    const question = questions[currentQuestionIndex];
    
    // Update question
    document.getElementById('question').textContent = `${currentQuestionIndex + 1}. ${question.question}`;
    
    // Update options
    const optionsContainer = document.getElementById('options');
    optionsContainer.innerHTML = '';
    
    question.options.forEach((option, index) => {
        const optionElement = document.createElement('div');
        optionElement.className = 'option';
        optionElement.textContent = option;
        optionElement.onclick = () => selectOption(index);
        
        // Show previous selection
        if (userAnswers[currentQuestionIndex] === index) {
            optionElement.classList.add('selected');
        }
        
        // Show correct/incorrect in review mode
        if (reviewMode) {
            if (index === question.answer) {
                optionElement.classList.add('correct');
            } else if (userAnswers[currentQuestionIndex] === index && index !== question.answer) {
                optionElement.classList.add('incorrect');
            }
        }
        
        // Clean immediate feedback classes when showing new question
        optionElement.classList.remove('immediate-correct', 'immediate-incorrect');
        
        optionsContainer.appendChild(optionElement);
    });
    
    // Update navigation buttons
    document.getElementById('prev-btn').disabled = currentQuestionIndex === 0;
    document.getElementById('next-btn').textContent = 
        currentQuestionIndex === questions.length - 1 ? 'Finalizar' : 'Siguiente';
    
    // Update question counter
    document.getElementById('question-counter').textContent = 
        `${currentQuestionIndex + 1}/${questions.length}`;
}

function selectOption(optionIndex) {
    if (reviewMode) return;
    
    userAnswers[currentQuestionIndex] = optionIndex;
    const currentQuestion = questions[currentQuestionIndex];
    const correctAnswer = currentQuestion.answer;
    
    // Update visual selection and show immediate feedback
    document.querySelectorAll('.option').forEach((option, index) => {
        // Remove all previous classes
        option.classList.remove('selected', 'immediate-correct', 'immediate-incorrect');
        
        if (index === optionIndex) {
            option.classList.add('selected');
            // Show immediate feedback
            if (index === correctAnswer) {
                option.classList.add('immediate-correct');
            } else {
                option.classList.add('immediate-incorrect');
                // Also highlight the correct answer
                document.querySelectorAll('.option')[correctAnswer].classList.add('immediate-correct');
            }
        }
    });
    
    // Add a small delay before allowing navigation to let user see the feedback
    const nextBtn = document.getElementById('next-btn');
    const prevBtn = document.getElementById('prev-btn');
    
    // Temporarily disable navigation buttons
    nextBtn.disabled = true;
    prevBtn.disabled = true;
    
    // Re-enable after 1.5 seconds
    setTimeout(() => {
        nextBtn.disabled = false;
        prevBtn.disabled = currentQuestionIndex === 0;
    }, 1500);
}

function nextQuestion() {
    if (currentQuestionIndex < questions.length - 1) {
        currentQuestionIndex++;
        showQuestion();
        updateProgress();
    } else {
        showResults();
    }
}

function prevQuestion() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        showQuestion();
        updateProgress();
    }
}

function updateProgress() {
    const progress = ((currentQuestionIndex + 1) / questions.length) * 100;
    document.documentElement.style.setProperty('--progress', `${progress}%`);
}

// Results Functions
function showResults() {
    stopTimer();
    
    hideAllScreens();
    resultsScreen.classList.remove('hidden');
    resultsScreen.classList.add('fade-in');
    
    // Calculate results
    let correctAnswers = 0;
    userAnswers.forEach((answer, index) => {
        if (answer === questions[index].answer) {
            correctAnswers++;
        }
    });
    
    const percentage = Math.round((correctAnswers / questions.length) * 100);
    const timeSpent = getTimeSpent();
    
    // Generate results HTML
    const resultsContent = document.getElementById('results-content');
    resultsContent.innerHTML = `
        <div class="results-stats">
            <div class="stat-item">
                <div class="stat-value">${correctAnswers}/${questions.length}</div>
                <div class="stat-label">Respuestas Correctas</div>
            </div>
            <div class="stat-item">
                <div class="stat-value">${percentage}%</div>
                <div class="stat-label">Puntuación</div>
            </div>
            <div class="stat-item">
                <div class="stat-value">${timeSpent}</div>
                <div class="stat-label">Tiempo</div>
            </div>
        </div>
        <div class="results-message">
            ${getResultsMessage(percentage)}
        </div>
    `;
}

function getResultsMessage(percentage) {
    if (percentage >= 90) {
        return '<p style="color: var(--success-color);">¡Excelente! Dominas muy bien el tema.</p>';
    } else if (percentage >= 70) {
        return '<p style="color: var(--primary-color);">¡Bien hecho! Tienes un buen conocimiento del tema.</p>';
    } else if (percentage >= 50) {
        return '<p style="color: var(--warning-color);">Necesitas repasar algunos conceptos.</p>';
    } else {
        return '<p style="color: var(--error-color);">Te recomendamos estudiar más este tema.</p>';
    }
}

function restartQuiz() {
    currentQuestionIndex = 0;
    userAnswers = [];
    reviewMode = false;
    startTimer();
    
    hideAllScreens();
    quizScreen.classList.remove('hidden');
    showQuestion();
    updateProgress();
}

// Timer Functions
function startTimer() {
    startTime = Date.now();
    timer = setInterval(updateTimer, 1000);
}

function stopTimer() {
    if (timer) {
        clearInterval(timer);
        timer = null;
    }
}

function updateTimer() {
    if (!startTime) return;
    
    const elapsed = Date.now() - startTime;
    const minutes = Math.floor(elapsed / 60000);
    const seconds = Math.floor((elapsed % 60000) / 1000);
    
    document.getElementById('timer').textContent = 
        `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

function getTimeSpent() {
    if (!startTime) return '00:00';
    
    const elapsed = Date.now() - startTime;
    const minutes = Math.floor(elapsed / 60000);
    const seconds = Math.floor((elapsed % 60000) / 1000);
    
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

// Mode Functions
function toggleReviewMode() {
    reviewMode = !reviewMode;
    const button = document.getElementById('toggle-review-mode');
    
    if (reviewMode) {
        button.innerHTML = '<i class="fas fa-eye-slash"></i> Salir Repaso';
        button.style.background = 'var(--warning-color)';
    } else {
        button.innerHTML = '<i class="fas fa-eye"></i> Modo Repaso';
        button.style.background = 'rgba(255, 255, 255, 0.1)';
    }
    
    document.body.classList.toggle('review-mode', reviewMode);
    showQuestion();
}

function toggleDarkMode() {
    darkMode = !darkMode;
    document.body.classList.toggle('dark-mode', darkMode);
    
    const button = document.getElementById('toggle-dark-mode');
    if (darkMode) {
        button.innerHTML = '<i class="fas fa-sun"></i> Modo Claro';
    } else {
        button.innerHTML = '<i class="fas fa-moon"></i> Modo Oscuro';
    }
    
    // Save preference
    localStorage.setItem('darkMode', darkMode);
}

// Preferences Functions
function loadPreferences() {
    // Load dark mode preference
    const savedDarkMode = localStorage.getItem('darkMode');
    if (savedDarkMode === 'true') {
        darkMode = true;
        document.body.classList.add('dark-mode');
        document.getElementById('toggle-dark-mode').innerHTML = '<i class="fas fa-sun"></i> Modo Claro';
    }
}

// Keyboard Navigation
document.addEventListener('keydown', function(event) {
    if (quizScreen.classList.contains('hidden')) return;
    
    switch(event.key) {
        case 'ArrowLeft':
            if (!document.getElementById('prev-btn').disabled) {
                prevQuestion();
            }
            break;
        case 'ArrowRight':
            nextQuestion();
            break;
        case '1':
        case '2':
        case '3':
        case '4':
            const optionIndex = parseInt(event.key) - 1;
            if (optionIndex < questions[currentQuestionIndex].options.length) {
                selectOption(optionIndex);
            }
            break;
    }
});

// Add CSS for results stats
const additionalCSS = `
.results-stats {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
    gap: 1.5rem;
    margin-bottom: 2rem;
}

.stat-item {
    text-align: center;
    padding: 1rem;
    background: var(--background-light);
    border-radius: var(--radius-lg);
    border: 1px solid var(--border-color);
}

.stat-value {
    font-size: 2rem;
    font-weight: 700;
    color: var(--primary-color);
    margin-bottom: 0.5rem;
}

.stat-label {
    font-size: 0.875rem;
    color: var(--text-secondary);
    font-weight: 500;
}

.results-message {
    text-align: center;
    font-size: 1.125rem;
    font-weight: 500;
    margin-bottom: 2rem;
}
`;

// Inject additional CSS
const style = document.createElement('style');
style.textContent = additionalCSS;
document.head.appendChild(style);