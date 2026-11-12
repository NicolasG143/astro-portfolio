import type { Lang } from '../i18n/ui';

const shared = {
  name: 'Nicolás Giménez',
  nickname: 'Tuty',
  email: 'nicolasgimenezgg@gmail.com',
  social: [
    { label: 'GitHub', url: 'https://github.com/NicolasG143' },
    { label: 'LinkedIn', url: 'https://www.linkedin.com/in/nicolasgimenezgg' },
  ],
};

const front = ['React', 'Next.js', 'Astro', 'Tailwind CSS', 'TypeScript', 'JavaScript', 'HTML', 'CSS'];
const back = ['Node.js', 'Express', 'PostgreSQL', 'Drizzle ORM', 'NGINX'];
const tools = ['Git', 'GitHub', 'Cloudflare', 'Google Tag Manager', 'Resend'];

const localized = {
  es: {
    role: 'Software Engineer full-stack',
    location: 'Buenos Aires, Argentina',
    cv: 'https://drive.google.com/file/d/1PR-0fl9LPA7of98ONMy_1qrB3-NW-fzr/view?usp=drive_link',
    skills: [
      { group: 'Front-end', items: front },
      { group: 'Back-end', items: back },
      { group: 'Herramientas', items: tools },
      { group: 'Idiomas', items: ['Español (nativo)', 'Inglés (B2)'] },
    ],
  },
  en: {
    role: 'full-stack Software Engineer',
    location: 'Buenos Aires, Argentina',
    cv: 'https://drive.google.com/file/d/1O8Gw7vqJEMitHG0ia7XbJYSQpf_4aur-/view?usp=drive_link',
    skills: [
      { group: 'Front-end', items: front },
      { group: 'Back-end', items: back },
      { group: 'Tools', items: tools },
      { group: 'Languages', items: ['Spanish (native)', 'English (B2)'] },
    ],
  },
} satisfies Record<Lang, unknown>;

export const getProfile = (lang: Lang) => ({ ...shared, ...localized[lang] });

export const yearRange = (start: number, end: number) => (start === end ? `${start}` : `${start}–${end}`);
