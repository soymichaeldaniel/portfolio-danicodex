/* eslint-disable next/no-img-element, next/no-html-link-for-pages -- static export uses remote assets and full-page internal navigation */
import { Menu, Video } from 'lucide-react';

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="shell header-inner">
        <a className="brand" href="/" aria-label="Michael Daniel, inicio">
          <img src="https://github.com/soymichaeldaniel.png?size=96" alt="" />
          <span>Michael <span>Daniel</span></span>
        </a>
        <nav className="desktop-nav" aria-label="Navegación principal">
          <a href="/">Inicio</a>
          <a href="/cursos">Cursos</a>
          <a href="/#proyectos">Proyectos</a>
          <a href="/#sobre-mi">Sobre mí</a>
        </nav>
        <a className="header-cta" href="https://www.youtube.com/@soymichaeldaniel" target="_blank" rel="noreferrer">
          <Video size={18} aria-hidden="true" /> Canal
        </a>
        <details className="mobile-nav">
          <summary aria-label="Abrir menú"><Menu size={22} aria-hidden="true" /></summary>
          <nav aria-label="Navegación móvil">
            <a href="/">Inicio</a>
            <a href="/cursos">Cursos</a>
            <a href="/#proyectos">Proyectos</a>
            <a href="/#sobre-mi">Sobre mí</a>
          </nav>
        </details>
      </div>
    </header>
  );
}
