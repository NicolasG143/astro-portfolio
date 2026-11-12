export const profile = {
  name: 'Nicolás Giménez',
  nickname: 'Tuty',
  role: 'Software Engineer full-stack',
  location: 'Buenos Aires, Argentina',
  email: 'nicolasgimenezgg@gmail.com',
  cv: 'https://drive.google.com/file/d/10Saa0bYHUriSuhT2Dnonh0p2aX3-_G46/view?usp=sharing',
  social: [
    { label: 'GitHub', url: 'https://github.com/NicolasG143' },
    { label: 'LinkedIn', url: 'https://www.linkedin.com/in/nicolasgimenezgg' },
  ],
  skills: [
    {
      group: 'Front-end',
      items: ['React', 'Next.js', 'Astro', 'Tailwind CSS', 'TypeScript', 'JavaScript', 'HTML', 'CSS'],
    },
    { group: 'Back-end', items: ['Node.js', 'Express', 'Drizzle ORM', 'NGINX'] },
    { group: 'Herramientas', items: ['Git', 'GitHub', 'Cloudflare', 'Google Tag Manager', 'Resend'] },
    { group: 'Idiomas', items: ['Español (nativo)', 'Inglés (B2)'] },
  ],
} as const;

export const yearRange = (start: number, end: number) =>
  start === end ? `${start}` : `${start}–${end}`;
