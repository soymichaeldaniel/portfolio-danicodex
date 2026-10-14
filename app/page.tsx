/* eslint-disable next/no-img-element, next/no-html-link-for-pages -- static export uses remote assets and full-page internal navigation */
import { ArrowRight, ArrowUpRight, CodeXml, GitBranch, Play } from 'lucide-react';
import { CourseCard } from '@/components/course-card';
import { SiteFooter } from '@/components/site-footer';
import { SiteHeader } from '@/components/site-header';
import { featuredCourses, projects } from './data';

const techStack = ['HTML', 'CSS', 'JavaScript', 'Git', 'React', 'Next.js', 'Python', 'C++', 'Tailwind', 'MySQL'];

export default function Home() {
  return (
    <main>
      <SiteHeader />

      <section className="hero shell">
        <div className="hero-copy">
          <h1>Aprende programación <em>construyendo.</em></h1>
          <p className="hero-lede">Soy Michael Daniel Pacheco. Te enseño a pasar de la idea al código con cursos gratuitos y proyectos explicados paso a paso.</p>
          <div className="hero-actions">
            <a className="button button-primary" href="https://www.youtube.com/@soymichaeldaniel" target="_blank" rel="noreferrer"><Play size={17} fill="currentColor" aria-hidden="true" /> Empezar a aprender</a>
            <a className="button button-secondary" href="https://github.com/soymichaeldaniel" target="_blank" rel="noreferrer"><GitBranch size={18} aria-hidden="true" /> Ver mi código</a>
          </div>
          <div className="hero-note"><CodeXml size={16} aria-hidden="true" /> Desde 2020 compartiendo programación en español.</div>
        </div>
        <div className="hero-visual" aria-label="Identidad de Michael Daniel">
          <div className="orbit orbit-one" /><div className="orbit orbit-two" />
          <div className="code-card code-card-top"><span>01</span> idea → código</div>
          <img src="https://github.com/soymichaeldaniel.png?size=520" alt="Retrato de Michael Daniel" />
          <div className="code-card code-card-bottom"><span>&lt;/&gt;</span> aprende creando</div>
        </div>
      </section>

      <section className="section shell" aria-labelledby="cursos-title">
        <div className="section-heading">
          <div><p className="eyebrow">Tu siguiente paso</p><h2 id="cursos-title">Cursos para avanzar de verdad</h2></div>
          <a className="text-link" href="/cursos">Ver todas las rutas <ArrowRight size={17} aria-hidden="true" /></a>
        </div>
        <div className="course-grid">
          {featuredCourses.map((course) => <CourseCard course={course} key={course.slug} />)}
        </div>
      </section>

      <section className="section projects-preview" id="proyectos" aria-labelledby="proyectos-title">
        <div className="shell">
          <div className="section-heading"><div><p className="eyebrow">Código que se comparte</p><h2 id="proyectos-title">Proyectos relevantes</h2></div></div>
          <article className="featured-project">
            <div className="project-index">01 / {String(projects.length).padStart(2, '0')}</div>
            <div>
              <p className="project-kicker">Proyecto destacado · Impacto cívico</p><h3>{projects[0].title}</h3><p>{projects[0].description}</p>
              <div className="tags">{projects[0].technologies.map((tech) => <span key={tech}>{tech}</span>)}</div>
              <a className="text-link" href={projects[0].repoUrl} target="_blank" rel="noreferrer">Explorar repositorio <ArrowRight size={17} aria-hidden="true" /></a>
            </div>
            <a className="featured-project-media" href={projects[0].repoUrl} target="_blank" rel="noreferrer" aria-label={`Ver ${projects[0].title} en GitHub`}>
              <img src={projects[0].thumbnail} alt={`Vista previa de ${projects[0].title}`} />
            </a>
          </article>
          <div className="project-grid">
            {projects.slice(1).map((project, index) => (
              <article className={`project-card accent-${project.accent}`} key={project.title}>
                <a className="project-card-media" href={project.repoUrl} target="_blank" rel="noreferrer" aria-label={`Ver ${project.title} en GitHub`}>
                  <img src={project.thumbnail} alt={`Vista previa de ${project.title}`} />
                </a>
                <div className="project-card-body">
                  <div className="project-card-top"><span>{String(index + 2).padStart(2, '0')}</span><CodeXml size={20} aria-hidden="true" /></div>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="tags">{project.technologies.map((tech) => <span key={tech}>{tech}</span>)}</div>
                  <a href={project.repoUrl} target="_blank" rel="noreferrer">Ver código <ArrowUpRight size={16} aria-hidden="true" /></a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="stack-strip" aria-label="Tecnologías"><div className="shell stack-list">{techStack.map((tech) => <span key={tech}>{tech}</span>)}</div></section>

      <section className="section about shell" id="sobre-mi" aria-labelledby="about-title">
        <div className="about-aside">
          <span className="about-number">05</span>
          <p>Años compartiendo conocimiento</p>
        </div>
        <div className="about-copy">
          <p className="eyebrow">Sobre mí</p>
          <h2 id="about-title">Enseñar también es una forma de aprender.</h2>
          <div className="about-columns">
            <p>Soy Michael Daniel Pacheco, estudiante de Ingeniería Empresarial y de Sistemas, desarrollador frontend y creador de contenido sobre programación.</p>
            <p>Creo tutoriales prácticos para que más personas puedan entender la programación, construir proyectos propios y avanzar con confianza.</p>
          </div>
          <a className="text-link" href="https://www.linkedin.com/in/soymichaeldaniel/" target="_blank" rel="noreferrer">Conoce mi perfil <ArrowRight size={17} aria-hidden="true" /></a>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
