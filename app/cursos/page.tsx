import type { Metadata } from 'next';
import { ArrowDown, ArrowRight } from 'lucide-react';
import { CourseCard } from '@/components/course-card';
import { SiteFooter } from '@/components/site-footer';
import { SiteHeader } from '@/components/site-header';
import { courses, type CourseCategory } from '../data';

export const metadata: Metadata = {
  title: 'Cursos de programación',
  description: 'Rutas gratuitas de Michael Daniel para aprender lógica, desarrollo web, Python, JavaScript, bases de datos y más.',
};

const paths: { id: CourseCategory; step: string; title: string; description: string }[] = [
  { id: 'inicio', step: 'Ruta 01', title: 'Empieza desde cero', description: 'Construye una base sólida en lógica y web. No necesitas experiencia previa.' },
  { id: 'programacion', step: 'Ruta 02', title: 'Aprende a programar', description: 'Elige una tecnología, comprende sus fundamentos y avanza con práctica guiada.' },
  { id: 'proyectos', step: 'Ruta 03', title: 'Construye proyectos', description: 'Convierte lo aprendido en interfaces, aplicaciones y soluciones que puedes compartir.' },
];

export default function CoursesPage() {
  return (
    <main>
      <SiteHeader />
      <section className="courses-hero shell">
        <div>
          <p className="eyebrow"><span /> Aprende a tu ritmo</p>
          <h1>Una ruta clara para aprender <em>programación.</em></h1>
        </div>
        <div className="courses-intro">
          <p>Empieza por las bases, elige una tecnología y termina construyendo. Todos los cursos son gratuitos y están disponibles en YouTube.</p>
          <a href="#ruta-inicio">Explorar las rutas <ArrowDown size={17} aria-hidden="true" /></a>
        </div>
      </section>

      <nav className="path-nav shell" aria-label="Rutas de aprendizaje">
        {paths.map((path, index) => (
          <a href={`#ruta-${path.id}`} key={path.id}><span>0{index + 1}</span>{path.title}</a>
        ))}
      </nav>

      <div className="learning-paths">
        {paths.map((path, pathIndex) => {
          const pathCourses = courses.filter((course) => course.category === path.id);
          return (
            <section className="learning-path shell" id={`ruta-${path.id}`} key={path.id} aria-labelledby={`title-${path.id}`}>
              <aside>
                <span>0{pathIndex + 1}</span>
                {pathIndex < paths.length - 1 && <div aria-hidden="true" />}
              </aside>
              <div className="path-content">
                <div className="path-heading">
                  <div><p className="eyebrow">{path.step}</p><h2 id={`title-${path.id}`}>{path.title}</h2></div>
                  <p>{path.description}</p>
                </div>
                <div className="course-grid courses-all">
                  {pathCourses.map((course) => <CourseCard course={course} numbered key={course.slug} />)}
                </div>
              </div>
            </section>
          );
        })}
      </div>

      <section className="courses-cta shell">
        <div>
          <p className="eyebrow">¿No sabes por dónde comenzar?</p>
          <h2>Empieza con lógica. El lenguaje viene después.</h2>
        </div>
        <a className="button button-primary" href={courses[0].url} target="_blank" rel="noreferrer">Comenzar con PSeInt <ArrowRight size={18} aria-hidden="true" /></a>
      </section>
      <SiteFooter />
    </main>
  );
}
