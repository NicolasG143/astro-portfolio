export const languages = { es: 'Español', en: 'English' } as const;
export type Lang = keyof typeof languages;
export const defaultLang: Lang = 'es';
export const langs = Object.keys(languages) as Lang[];

const es = {
  'meta.title': 'Nicolás Giménez, Software Engineer full-stack en Buenos Aires',
  'meta.description':
    'Nicolás “Tuty” Giménez construye sitios y sistemas web rápidos, accesibles y fáciles de usar con Next.js, React, Node.js y Astro.',
  skip: 'Saltar al contenido',
  'nav.main': 'Principal',
  'nav.mobile': 'Principal, móvil',
  'nav.home': 'Tuty, ir al inicio',
  'nav.work': 'Trabajos',
  'nav.projects': 'Proyectos',
  'nav.about': 'Sobre mí',
  'nav.contact': 'Contacto',
  'lang.switch': 'English',
  'lang.switchLabel': 'Ver el sitio en inglés',
  'theme.toDark': 'Usar modo oscuro',
  'theme.toLight': 'Usar modo claro',
  'menu.open': 'Abrir menú',
  'menu.close': 'Cerrar menú',
  'copy.label': 'Copiar mail',
  'copy.done': 'Mail copiado',
  'copy.failed': 'No se pudo copiar',
  'copy.failedLong': 'No se pudo copiar. Seleccioná el mail y copialo a mano.',
  'cv.view': 'Ver CV',
  'cv.viewMine': 'Ver mi CV',
  'hero.body':
    'Hago sitios y sistemas web rápidos, accesibles y fáciles de usar. Trabajo con Next.js, React, Node.js y Astro: diseño la interfaz, escribo la lógica del servidor y cuido la infraestructura que lo sostiene.',
  'hero.write': 'Escribime',
  'hero.social': 'Redes',
  'carousel.label': 'Trabajos destacados',
  'carousel.role': 'carrusel',
  'carousel.pick': 'Elegir trabajo destacado',
  'carousel.show': 'Mostrar {name}',
  'carousel.open': '{name}, ver el trabajo',
  'carousel.pause': 'Pausar el carrusel',
  'carousel.play': 'Reanudar el carrusel',
  'work.marquee': 'trabajos',
  'work.title': 'Trabajos',
  'work.intro': 'Trabajos freelance desde {year}. Cada uno tiene su página con lo que hice y cómo lo resolví.',
  'work.filter': 'Filtrar trabajos por tecnología',
  'work.all': 'Todas',
  'work.countAll': 'Mostrando los {n} trabajos.',
  'work.countOne': '{n} trabajo con {tech}.',
  'work.countMany': '{n} trabajos con {tech}.',
  'projects.title': 'Proyectos personales',
  'projects.intro': 'Cosas que hago por mi cuenta, para aprender y probar ideas.',
  'about.title': 'Sobre mí',
  'about.statement': 'De la interfaz a la infraestructura, conozco el ciclo completo.',
  'about.p1':
    'Me gusta construir sitios y aplicaciones, pero sobre todo herramientas que le hagan el día más fácil a quien las usa: un formulario que se entiende, un panel que no te deja cargar un dato mal, una página que carga al instante.',
  'about.p2': 'Cada tecnología nueva es un desafío para mí. No me alcanza con usarla: quiero entender cómo funciona por dentro.',
  'contact.title': 'hablemos.',
  'contact.body': '¿Tenés un proyecto en mente? Contame qué necesitás y te respondo por mail.',
  'contact.write': 'Escribime',
  'contact.copy': 'Copiar {email}',
  'job.back': 'Volver a todos los trabajos',
  'job.role': 'Rol',
  'job.period': 'Período',
  'job.stack': 'Tecnologías',
  'job.links': 'Enlaces',
  'job.moreShots': 'Más capturas',
  'job.next': 'Siguiente trabajo',
  'job.title': '{company}, trabajo de Nicolás Giménez',
  'project.back': 'Volver a los proyectos',
  'project.year': 'Año',
  'project.next': 'Siguiente proyecto',
  'project.view': 'Ver proyecto',
  'project.title': '{name}, proyecto de Nicolás Giménez',
  'project.label': 'Proyecto',
};

const en: Record<keyof typeof es, string> = {
  'meta.title': 'Nicolás Giménez, full-stack Software Engineer in Buenos Aires',
  'meta.description':
    'Nicolás “Tuty” Giménez builds fast, accessible and easy-to-use websites and web systems with Next.js, React, Node.js and Astro.',
  skip: 'Skip to content',
  'nav.main': 'Main',
  'nav.mobile': 'Main, mobile',
  'nav.home': 'Tuty, go to home',
  'nav.work': 'Work',
  'nav.projects': 'Projects',
  'nav.about': 'About',
  'nav.contact': 'Contact',
  'lang.switch': 'Español',
  'lang.switchLabel': 'View the site in Spanish',
  'theme.toDark': 'Switch to dark mode',
  'theme.toLight': 'Switch to light mode',
  'menu.open': 'Open menu',
  'menu.close': 'Close menu',
  'copy.label': 'Copy email',
  'copy.done': 'Email copied',
  'copy.failed': "Couldn't copy",
  'copy.failedLong': "Couldn't copy. Select the email and copy it manually.",
  'cv.view': 'View CV',
  'cv.viewMine': 'View my CV',
  'hero.body':
    'I build fast, accessible and easy-to-use websites and web systems. I work with Next.js, React, Node.js and Astro: I design the interface, write the server logic and look after the infrastructure that runs it.',
  'hero.write': 'Get in touch',
  'hero.social': 'Social',
  'carousel.label': 'Featured work',
  'carousel.role': 'carousel',
  'carousel.pick': 'Choose featured work',
  'carousel.show': 'Show {name}',
  'carousel.open': '{name}, view the project',
  'carousel.pause': 'Pause the carousel',
  'carousel.play': 'Resume the carousel',
  'work.marquee': 'work',
  'work.title': 'Work',
  'work.intro': 'Freelance work since {year}. Each project has its own page with what I did and how I approached it.',
  'work.filter': 'Filter work by technology',
  'work.all': 'All',
  'work.countAll': 'Showing all {n} projects.',
  'work.countOne': '{n} project using {tech}.',
  'work.countMany': '{n} projects using {tech}.',
  'projects.title': 'Personal projects',
  'projects.intro': 'Things I build on my own, to learn and try out ideas.',
  'about.title': 'About',
  'about.statement': 'From the interface to the infrastructure, I know the whole cycle.',
  'about.p1':
    'I enjoy building websites and apps, but above all tools that make life easier for the people who use them: a form that makes sense, a panel that won’t let you enter bad data, a page that loads instantly.',
  'about.p2': 'Every new technology is a challenge for me. Using it isn’t enough: I want to understand how it works under the hood.',
  'contact.title': 'let’s talk.',
  'contact.body': 'Have a project in mind? Tell me what you need and I’ll get back to you by email.',
  'contact.write': 'Email me',
  'contact.copy': 'Copy {email}',
  'job.back': 'Back to all work',
  'job.role': 'Role',
  'job.period': 'Period',
  'job.stack': 'Technologies',
  'job.links': 'Links',
  'job.moreShots': 'More screenshots',
  'job.next': 'Next project',
  'job.title': '{company}, work by Nicolás Giménez',
  'project.back': 'Back to projects',
  'project.year': 'Year',
  'project.next': 'Next project',
  'project.view': 'View project',
  'project.title': '{name}, a project by Nicolás Giménez',
  'project.label': 'Project',
};

const ui = { es, en } as const;
export type UiKey = keyof typeof es;

export const useTranslations =
  (lang: Lang) =>
  (key: UiKey, vars: Record<string, string | number> = {}) =>
    ui[lang][key].replace(/\{(\w+)\}/g, (_, name: string) => String(vars[name] ?? `{${name}}`));

export const toLang = (value: string | undefined): Lang =>
  value && value in languages ? (value as Lang) : defaultLang;

const workSegment: Record<Lang, string> = { es: 'trabajos', en: 'work' };

/** Prefixes a path with the locale; the default locale has no prefix. */
export const localePath = (lang: Lang, path = '/') => (lang === defaultLang ? path : `/${lang}${path}`);

export const jobPath = (lang: Lang, slug: string) => localePath(lang, `/${workSegment[lang]}/${slug}/`);

const projectSegment: Record<Lang, string> = { es: 'proyectos', en: 'projects' };

export const projectPath = (lang: Lang, slug: string) => localePath(lang, `/${projectSegment[lang]}/${slug}/`);

export const homePath = (lang: Lang, hash = '') => `${localePath(lang, '/')}${hash}`;
