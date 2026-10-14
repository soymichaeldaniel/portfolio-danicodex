/* eslint-disable next/no-html-link-for-pages -- static export uses full-page internal navigation */
import { ArrowUpRight } from 'lucide-react';

const socials = [
  ['YouTube', 'https://www.youtube.com/@soymichaeldaniel'],
  ['GitHub', 'https://github.com/soymichaeldaniel'],
  ['Instagram', 'https://www.instagram.com/soymichaeldaniel/'],
  ['TikTok', 'https://www.tiktok.com/@soymichaeldaniel'],
  ['LinkedIn', 'https://www.linkedin.com/in/soymichaeldaniel/'],
  ['X', 'https://x.com/soymichaelpc'],
  ['Facebook', 'https://www.facebook.com/soymichaeldaniel/'],
];

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="shell footer-main">
        <div>
          <p className="eyebrow">Sigamos aprendiendo</p>
          <h2>Una comunidad que convierte ideas en código.</h2>
        </div>
        <a className="button button-primary" href="https://www.youtube.com/@soymichaeldaniel?sub_confirmation=1" target="_blank" rel="noreferrer">
          Suscríbete al canal <ArrowUpRight size={18} aria-hidden="true" />
        </a>
      </div>
      <div className="shell footer-bottom">
        <a className="brand" href="/"><span>Michael <span>Daniel</span></span></a>
        <div className="social-links">{socials.map(([name, url]) => <a key={name} href={url} target="_blank" rel="noreferrer">{name}</a>)}</div>
        <p>Hecho con código y curiosidad.</p>
      </div>
    </footer>
  );
}
/* eslint-disable next/no-html-link-for-pages -- static export uses full-page internal navigation */
