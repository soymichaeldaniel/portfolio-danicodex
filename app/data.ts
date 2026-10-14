export type CourseCategory = 'inicio' | 'programacion' | 'proyectos';

export interface Course { slug: string; title: string; description: string; category: CourseCategory; level: string; lessons: string; url: string; thumbnail: string; }
export interface Project {
  title: string;
  description: string;
  technologies: string[];
  visibility: 'public' | 'private';
  repoUrl?: string;
  liveUrl?: string;
  thumbnail?: string;
  highlights: string[];
  accent: string;
}

export const courses: Course[] = [
  { slug: 'pseint-desde-cero', title: 'Lógica de Programación con PSeInt', description: 'Domina algoritmos, variables, condicionales y ciclos con ejercicios progresivos desde cero.', category: 'inicio', level: 'Principiante', lessons: '47 lecciones', url: 'https://www.youtube.com/playlist?list=PLZmtYtnx3IcUR9P1pZ7VOWlzvizYB6EF-', thumbnail: 'https://i.ytimg.com/vi/I9zCEqyDeYg/hqdefault.jpg' },
  { slug: 'html5-desde-cero', title: 'HTML5 desde Cero', description: 'Entiende cómo funciona la web y construye páginas con una base semántica sólida.', category: 'inicio', level: 'Principiante', lessons: '22 lecciones', url: 'https://www.youtube.com/playlist?list=PLZmtYtnx3IcUTlaEly3oC6LMpJJ3SmT2-', thumbnail: 'https://i.ytimg.com/vi/NmKc5o8tEgA/hqdefault.jpg' },
  { slug: 'python-30-dias', title: 'Aprende Python en 30 Días', description: 'Una ruta diaria y práctica para dar tus primeros pasos con Python y ganar constancia.', category: 'programacion', level: 'Principiante', lessons: '30 lecciones', url: 'https://www.youtube.com/playlist?list=PLZmtYtnx3IcV8Be2ld0-vOwev5Hxw13ho', thumbnail: 'https://i.ytimg.com/vi/izEmMKkakac/hqdefault.jpg' },
  { slug: 'javascript-esencial', title: 'JavaScript Esencial', description: 'Aprende los conceptos que hacen que tus interfaces cobren vida en el navegador.', category: 'programacion', level: 'Principiante', lessons: '5 videos', url: 'https://www.youtube.com/playlist?list=PLZmtYtnx3IcURKJyzil6hk4-e_Zn5FKTY', thumbnail: 'https://i.ytimg.com/vi/G_8ryIgbRZw/hqdefault.jpg' },
  { slug: 'mysql-bases-datos', title: 'MySQL y Bases de Datos', description: 'Crea tablas, relaciona información y practica SQL con un proyecto real en MySQL Workbench.', category: 'programacion', level: 'Principiante', lessons: '5 videos', url: 'https://www.youtube.com/playlist?list=PLZmtYtnx3IcVKflKV9VoSXs3uce1_knMX', thumbnail: 'https://i.ytimg.com/vi/jRSv4ERH9Dg/hqdefault.jpg' },
  { slug: 'react-js', title: 'Aprende React JS', description: 'Primeros componentes y conceptos de React para llevar tus interfaces al siguiente nivel.', category: 'programacion', level: 'Intermedio', lessons: '2 videos', url: 'https://www.youtube.com/playlist?list=PLZmtYtnx3IcXsIHRNMg3TzssSsp-PQ3PI', thumbnail: 'https://i.ytimg.com/vi/4tVy4A1WDlY/hqdefault.jpg' },
  { slug: 'cpp', title: 'Todo sobre C++', description: 'Ejercicios y proyectos para practicar lógica y programación estructurada con C++.', category: 'programacion', level: 'Principiante', lessons: '5 videos', url: 'https://www.youtube.com/playlist?list=PLZmtYtnx3IcXg71iKA-0QR_c9oA50EWyM', thumbnail: 'https://i.ytimg.com/vi/q-Gb2hDR2Gc/hqdefault.jpg' },
  { slug: 'proyectos-javascript', title: 'Proyectos con JavaScript', description: 'Construye interfaces y utilidades reales mientras dominas el DOM y la lógica del navegador.', category: 'proyectos', level: 'Práctico', lessons: '44 videos', url: 'https://www.youtube.com/playlist?list=PLZmtYtnx3IcX1NV76bJym4KYG95SC60iq', thumbnail: 'https://i.ytimg.com/vi/ZSSOiJaMIk0/hqdefault.jpg' },
  { slug: 'carrito-compras', title: 'Carrito de Compras', description: 'Maqueta y programa un carrito de compras completo con HTML, CSS y JavaScript.', category: 'proyectos', level: 'Práctico', lessons: '3 videos', url: 'https://www.youtube.com/playlist?list=PLZmtYtnx3IcUJJXViV5yN9nKDbpIbDDq-', thumbnail: 'https://i.ytimg.com/vi/I9byWaeC9e8/hqdefault.jpg' },
  { slug: 'formularios-fullstack', title: 'Formulario, PHP y MySQL', description: 'Desarrolla, valida y conecta un formulario con PHP y una base de datos MySQL.', category: 'proyectos', level: 'Intermedio', lessons: '5 lecciones', url: 'https://www.youtube.com/playlist?list=PLZmtYtnx3IcX1PXnSdrn0G80iO2mwD9Cr', thumbnail: 'https://i.ytimg.com/vi/nLvg_sqNYB0/hqdefault.jpg' },
];

export const featuredCourses = courses.slice(0, 3);

export const projects: Project[] = [
  {
    title: 'Qhatu',
    description: 'Marketplace social para descubrir productos, conocer las historias de sus creadores y apoyar emprendimientos locales.',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'PostgreSQL', 'Prisma', 'Supabase', 'Auth.js'],
    visibility: 'private',
    liveUrl: 'https://qhatu-market.vercel.app/',
    thumbnail: '/qhatu-thumbnail.png',
    highlights: ['Perfiles de emprendimientos y catálogo de productos con imágenes.', 'Autenticación con Google y panel para gestionar negocios y productos.', 'Favoritos y reseñas conectados a una base de datos relacional.'],
    accent: 'blue',
  },
  {
    title: 'Cutflow Cleaner',
    description: 'Aplicación de escritorio para sincronizar una grabación de pantalla y una cámara, revisar silencios y exportar ambos videos con los mismos cortes.',
    technologies: ['Tauri', 'Rust', 'React', 'TypeScript', 'FFmpeg'],
    visibility: 'private',
    thumbnail: '/cutflow-cleaner-thumbnail.png',
    highlights: ['Sincronización de pantalla y cámara a partir del audio.', 'Ajustes de umbral, duración mínima y margen antes de analizar los silencios.', 'Revisión de cortes y exportación de dos MP4 alineados con procesamiento local.'],
    accent: 'purple',
  },
  {
    title: 'Finanzas Conectadas',
    description: 'Aplicación para organizar ingresos, registrar gastos y comparar presupuestos con el gasto real a lo largo del año.',
    technologies: ['Next.js', 'TypeScript', 'Supabase', 'PostgreSQL'],
    visibility: 'private',
    liveUrl: 'https://finances-personales-app.vercel.app/',
    highlights: ['Presupuestos por categoría, fuentes de ingreso y traslado de saldo entre meses.', 'Gráficos y seguimiento anual con alertas de sobrepresupuesto.', 'Autenticación, políticas RLS y modo demostración con datos locales.'],
    accent: 'cyan',
  },
  {
    title: 'Votómetro',
    description: 'Plataforma cívica para explorar afinidades con propuestas de las Elecciones Perú 2026 de forma clara y accesible.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Datos'],
    visibility: 'public',
    repoUrl: 'https://github.com/soymichaeldaniel/votometro',
    liveUrl: 'https://votometrolat.com/',
    thumbnail: '/votometro-thumbnail.png',
    highlights: ['Exploración interactiva de afinidades con propuestas electorales.', 'Presentación accesible de información para comparar opciones.'],
    accent: 'blue',
  },
  {
    title: 'Music Player',
    description: 'Reproductor de música para Android que organiza la biblioteca del teléfono y permite escuchar archivos locales sin conexión.',
    technologies: ['Kotlin', 'Android', 'Media3', 'ExoPlayer'],
    visibility: 'private',
    highlights: ['Búsqueda por título o artista, favoritos y carátulas de álbumes.', 'Reproducción en segundo plano y controles en la notificación multimedia.', 'Cola de reproducción, avance, modo aleatorio y repetición.'],
    accent: 'orange',
  },
  {
    title: 'Cinergia',
    description: 'Sitio web de una comunidad universitaria de ingeniería que conecta estudiantes, ideas y oportunidades de desarrollo profesional.',
    technologies: ['Next.js', 'React', 'TypeScript', 'CSS Modules'],
    visibility: 'public',
    repoUrl: 'https://github.com/soymichaeldaniel/cinergia',
    liveUrl: 'https://cinergia.vercel.app/',
    thumbnail: '/cinergia-thumbnail.png',
    highlights: ['Páginas de inicio y nosotros con componentes reutilizables.', 'Carruseles de fotografías y aliados, y animaciones de aparición.', 'Secciones para presentar carreras, principios, equipo y actividades.'],
    accent: 'yellow',
  },
  {
    title: 'Michael OS',
    description: 'Mi portfolio convertido en un escritorio interactivo de inspiración retro: una forma de explorar mis proyectos, cursos y perfil profesional.',
    technologies: ['React', 'TypeScript', 'CSS'],
    visibility: 'public',
    repoUrl: 'https://github.com/soymichaeldaniel/portfolio-danicodex',
    liveUrl: 'https://michaeldanielos.vercel.app/?app=welcome',
    thumbnail: '/michael-os-thumbnail.png',
    highlights: ['Ventanas interactivas con arrastre, minimizado y barra de tareas.', 'Aplicaciones para proyectos, cursos, tecnologías y consulta del CV.', 'Vista móvil adaptada y acceso directo al perfil para reclutadores.'],
    accent: 'blue',
  },
];
