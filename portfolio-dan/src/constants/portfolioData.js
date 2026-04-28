/**
 * PORTFOLIO CONSTANTS
 * Información sobre el perfil, skills, experiencia y proyectos
 */

export const PROFILE = {
  name: 'Daniel Oswaldo',
  lastName: 'Juárez Herrera',
  role: 'Software Developer',
  title: 'Full Stack Developer',
  bio: 'Desarrollador Junior comprometido con la excelencia técnica y el crecimiento continuo. Graduado como Perito en Informática y becario de la Fundación Juan Bautista Gutiérrez , mi propósito es desarrollar soluciones innovadoras que generen un impacto positivo en la sociedad.',
  cv: '/Daniel Juarez_CV.pdf',
  email: 'djuarez232003@gmail.com',
  location: 'Guatemala',
};

export const SOCIAL_LINKS = [
  {
    id: 1,
    name: 'GitHub',
    url: 'https://github.com',
    icon: 'GitHub',
  },
  {
    id: 2,
    name: 'LinkedIn',
    url: 'https://linkedin.com',
    icon: 'LinkedIn',
  },
  {
    id: 3,
    name: 'Email',
    url: 'mailto:djuarez232003@gmail.com',
    icon: 'Mail',
  },
];

export const TECH_STACK = {
  'Lenguajes': [
    { name: 'JavaScript', level: 85 },
    { name: 'TypeScript', level: 75 },
    { name: 'Java', level: 80 },
    { name: 'Python', level: 70 },
    { name: 'R', level: 65 },
  ],
  'Frontend': [
    { name: 'React', level: 85 },
    { name: 'Next.js', level: 75 },
    { name: 'Angular', level: 80 },
    { name: 'Tailwind CSS', level: 90 },
    { name: 'HTML/CSS', level: 95 },
  ],
  'Backend': [
    { name: 'Node.js', level: 80 },
    { name: 'NestJS', level: 75 },
    { name: 'REST APIs', level: 85 },
    { name: 'GraphQL', level: 70 },
  ],
  'Móvil': [
    { name: 'Kotlin', level: 75 },
    { name: 'Flutter', level: 75 },
    { name: 'Jetpack Compose', level: 70 },
  ],
  'Bases de Datos': [
    { name: 'PostgreSQL', level: 85 },
    { name: 'MySQL', level: 80 },
    { name: 'MongoDB', level: 75 },
  ],
  'DevOps & Herramientas': [
    { name: 'Git/GitHub', level: 90 },
    { name: 'Docker', level: 70 },
    { name: 'Figma', level: 85 },
    { name: 'Vite', level: 85 },
  ],
};

export const EXPERIENCE = [
  {
    id: 1,
    title: 'Desarrollador de Software',
    company: 'SSASA',
    period: 'Julio - Diciembre 2022',
    description: 'Soporte y resolución de incidencias en plataforma financiera PreCREDITPRO. Ejecución de consultas SQL, mantenimiento de bases de datos y corrección de errores en producción.',
    highlights: [
      'Resolución de incidencias críticas en producción',
      'Optimización de queries SQL',
      'Mantenimiento preventivo de base de datos',
    ],
    technologies: ['SQL', 'PostgreSQL', 'Java'],
  },
  {
    id: 2,
    title: 'Embajador & Becario',
    company: 'Fundación Juan Bautista Gutiérrez',
    period: '2024 - Presente',
    description: 'Liderazgo en desarrollo de proyectos internos y mentoría a estudiantes. Implementación de soluciones innovadoras con enfoque en impacto social.',
    highlights: [
      'Mentorías a programadores júnior',
      'Desarrollo de proyectos internos',
      'Participación en hackathons y eventos tech',
    ],
    technologies: ['React', 'Node.js', 'Leadership'],
  },
];

export const PROJECTS = [
  {
    id: 1,
    title: 'Portal de Gestión Educativa',
    description: 'Plataforma web completa para administración de instituciones educativas. Sistema de matricula, calificaciones, reportes y comunicación profesor-estudiante.',
    period: '2024 - 2025',
    technologies: ['React', 'Vite', 'Tailwind CSS', 'Node.js'],
    highlights: [
      'Dashboard interactivo en tiempo real',
      'Sistema de reportes PDF automatizado',
      'Autenticación y roles de usuario',
      'Interfaz intuitiva y responsiva',
    ],
    images: ['/Proyecto11.png', '/Proyecto12.png', '/Proyecto13.png'],
    link: '#',
    featured: true,
  },
  {
    id: 2,
    title: 'Aplicación Móvil de HorasBecas',
    description: 'App móvil nativa para gestión de Horas becas de la Universis. Seguimiento de Horas y Asiganción.',
    period: '2024',
    technologies: ['Kotlin', 'Firebase', 'Material Design', 'Jetpack'],
    highlights: [
      'Arquitectura MVVM escalable',
      'Sincronización en tiempo real',
      'Notificaciones inteligentes',
      'Gráficos avanzados de analytics',
    ],
    images: ['/Proyecto21.png', '/Proyecto22.png', '/Proyecto23.png'],
    link: '#',
    featured: true,
  },
  {
    id: 3,
    title: 'Eduvial',
    description: 'Plaraforma movil para aprender el uso de las leyes de transito de Guatemala. Contiene cuestionarios, simuladores de examen y recursos educativos.',
    period: '2023 - 2024',
    technologies: ['Flutter', 'Node.js', 'PostgreSQL', 'Stripe API'],
    highlights: [
      'Diseño responsivo en múltiples dispositivos',
      'Carrito de compras optimizado',
      'Panel de admin con estadísticas',
      'Sistema de notificaciones en tiempo real',
    ],
    images: ['/Proyecto31.png', '/Proyecto32.png', '/Proyecto33.png'],
    link: '#',
    featured: false,
  },
  {
    id: 4,
    title: 'E-commerce Multiplataforma',
    description: 'Solución completa de comercio electrónico con web. Integración y gestión de inventario.',
    period: '2023',
    technologies: ['React', 'Express.js' ],
    highlights: [
      'Control de disponibilidad automático',
      'Reportes de ocupación y ingresos',
      'Integración con sistemas de pago',
    ],
    images: ['/Proyecto41.png', '/Proyecto42.png', '/Proyecto43.png'],
    link: '#',
    featured: false,
  },
];


export const SOFT_SKILLS = [
  { name: 'Proactividad' },
  { name: 'Orientación a Resultados' },
  { name: 'Aprendizaje Continuo' },
  { name: 'Trabajo en Equipo' },
  { name: 'Creatividad' },
  { name: 'Comunicación' },
];

export const EDUCATION = [
  {
    id: 1,
    degree: 'Ingeniería en Ciencias de la Computación',
    school: 'Universidad del Valle de Guatemala (UVG)',
    year: '4to año | 2025',
    status: 'En Progreso',
  },
  {
    id: 2,
    degree: 'Perito en Informática',
    school: 'Instituto Técnico La Salle',
    year: '2021',
    status: 'Completado',
  },
];

export const INTERESTS = [
  { name: 'Fotografía' },
  { name: 'Arte & Diseño' },
  { name: 'Tecnología' },
  { name: 'Viajes' },
];
