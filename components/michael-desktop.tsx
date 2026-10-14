'use client';
/* eslint-disable next/no-img-element -- remote first-party content */
import {
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type PointerEvent,
  type ReactNode,
} from 'react';
import {
  ArrowLeft,
  ArrowUpRight,
  BookOpen,
  Check,
  ChevronRight,
  Code2,
  FileText,
  Folder,
  GitBranch as Github,
  Maximize2,
  Minus,
  Monitor,
  Search,
  Terminal,
  X,
  Video as Youtube,
} from 'lucide-react';
import { courses, projects, type CourseCategory } from '@/app/data';
import { RetroIcon } from './retro-icon';

type AppId =
  | 'welcome'
  | 'about'
  | 'projects'
  | 'courses'
  | 'stack'
  | 'recruiter';
type AppWindow = {
  id: AppId;
  minimized: boolean;
  maximized: boolean;
  x: number;
  y: number;
};
const apps = [
  {
    id: 'about' as const,
    title: 'Sobre mí.txt',
    icon: FileText,
    color: 'silver',
  },
  { id: 'projects' as const, title: 'Proyectos', icon: Folder, color: 'blue' },
  { id: 'courses' as const, title: 'Cursos', icon: BookOpen, color: 'violet' },
  { id: 'stack' as const, title: 'Stack.exe', icon: Terminal, color: 'green' },
];
const titles: Record<AppId, string> = {
  welcome: 'Bienvenido a mi espacio',
  about: 'Sobre mí.txt',
  projects: 'Proyectos',
  courses: 'Cursos',
  stack: 'Stack.exe',
  recruiter: 'Perfil profesional',
};
const socials = [
  ['YouTube', 'https://www.youtube.com/@soymichaeldaniel'],
  ['GitHub', 'https://github.com/soymichaeldaniel'],
  ['Instagram', 'https://www.instagram.com/soymichaeldaniel/'],
  ['TikTok', 'https://www.tiktok.com/@soymichaeldaniel'],
  ['LinkedIn', 'https://www.linkedin.com/in/soymichaeldaniel/'],
  ['X', 'https://x.com/soymichaelpc'],
  ['Facebook', 'https://www.facebook.com/soymichaeldaniel/'],
];
const paths: { id: CourseCategory; title: string }[] = [
  { id: 'inicio', title: 'Desde cero' },
  { id: 'programacion', title: 'Programación' },
  { id: 'proyectos', title: 'Construye proyectos' },
];
const stack = [
  {
    title: 'Frontend',
    items: [
      'HTML',
      'CSS',
      'JavaScript',
      'React',
      'Next.js',
      'Tailwind',
      'Bootstrap',
    ],
  },
  { title: 'Programación y datos', items: ['Python', 'C++', 'MySQL'] },
  { title: 'Herramientas', items: ['Git', 'GitHub'] },
];
function Photo({
  src,
  alt,
  className = '',
}: {
  src: string;
  alt: string;
  className?: string;
}) {
  const [failed, setFailed] = useState(false);
  return failed ? (
    <div
      className={`os-image-fallback ${className}`}
      role="img"
      aria-label={alt}
    >
      <Code2 />
      <span>{alt}</span>
    </div>
  ) : (
    <img
      className={className}
      src={src}
      alt={alt}
      loading="lazy"
      onError={() => setFailed(true)}
    />
  );
}
function LinkOut({
  href,
  children,
  className = '',
}: {
  href: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <a
      href={href}
      className={className}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
      <ArrowUpRight size={14} aria-hidden="true" />
      <span className="sr-only"> (abre en otra pestaña)</span>
    </a>
  );
}
export function MichaelDesktop({
  initialApp = 'welcome',
}: {
  initialApp?: AppId;
}) {
  const [windows, setWindows] = useState<AppWindow[]>([
    { id: initialApp, minimized: false, maximized: false, x: 0, y: 0 },
  ]);
  const [menu, setMenu] = useState(false);
  const [filter, setFilter] = useState('Todos');
  const [projectIndex, setProjectIndex] = useState<number | null>(null);
  const [path, setPath] = useState<CourseCategory>('inicio');
  const [search, setSearch] = useState('');
  const [time, setTime] = useState('');
  const panels = useRef<Partial<Record<AppId, HTMLElement | null>>>({});
  const drag = useRef<{
    id: AppId;
    sx: number;
    sy: number;
    x: number;
    y: number;
  } | null>(null);
  const active = [...windows].reverse().find((w) => !w.minimized)?.id;
  function open(id: AppId, address = true) {
    setMenu(false);
    setWindows((current) => {
      const old = current.find((w) => w.id === id);
      return [
        ...current.filter((w) => w.id !== id),
        old
          ? { ...old, minimized: false }
          : {
              id,
              minimized: false,
              maximized: false,
              x: (current.length % 3) * 16,
              y: (current.length % 3) * 12,
            },
      ];
    });
    if (address) {
      const url = new URL(location.href);
      url.searchParams.set('app', id);
      url.hash = '';
      history.replaceState({}, '', url);
    }
  }
  function close(id: AppId) {
    const next = windows.filter((w) => w.id !== id);
    setWindows(next);
    const nextActive = [...next].reverse().find((w) => !w.minimized);
    const url = new URL(location.href);
    if (nextActive) url.searchParams.set('app', nextActive.id);
    else url.searchParams.delete('app');
    history.replaceState({}, '', url);
    requestAnimationFrame(() =>
      nextActive
        ? panels.current[nextActive.id]?.focus()
        : document.getElementById(`launcher-${id}`)?.focus(),
    );
  }
  useEffect(() => {
    if (active) panels.current[active]?.focus();
  }, [active]);
  useEffect(() => {
    const read = () => {
      const url = new URL(location.href);
      const id =
        url.searchParams.get('app') ||
        (url.hash === '#proyectos'
          ? 'projects'
          : url.hash === '#sobre-mi'
            ? 'about'
            : null);
      if (id && Object.hasOwn(titles, id)) open(id as AppId, false);
    };
    const tick = () =>
      setTime(
        new Intl.DateTimeFormat('es-PE', {
          hour: '2-digit',
          minute: '2-digit',
          hour12: false,
          timeZone: 'America/Lima',
        }).format(new Date()),
      );
    read();
    tick();
    const timer = setInterval(tick, 60000);
    window.addEventListener('popstate', read);
    window.addEventListener('hashchange', read);
    const resize = () => setWindows(current => current.map(w => ({ ...w, x: 0, y: 0 })));
    window.addEventListener('resize', resize);
    return () => {
      clearInterval(timer);
      window.removeEventListener('popstate', read);
      window.removeEventListener('hashchange', read);
      window.removeEventListener('resize', resize);
    };
    // Initial URL and browser navigation are handled independently of window state.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  function startDrag(e: PointerEvent<HTMLDivElement>, win: AppWindow) {
    if (
      win.maximized ||
      e.button !== 0 ||
      (e.target as HTMLElement).closest('button') ||
      matchMedia('(max-width: 760px)').matches
    )
      return;
    e.currentTarget.setPointerCapture(e.pointerId);
    drag.current = {
      id: win.id,
      sx: e.clientX,
      sy: e.clientY,
      x: win.x,
      y: win.y,
    };
  }
  function moveDrag(e: PointerEvent<HTMLDivElement>) {
    const d = drag.current;
    const panel = d && panels.current[d.id];
    if (!d || !panel) return;
    const area = panel.parentElement!.getBoundingClientRect();
    const bx = (area.width - panel.offsetWidth) / 2;
    const by = (area.height - panel.offsetHeight) / 2;
    const x = Math.max(-bx, Math.min(bx, d.x + e.clientX - d.sx));
    const y = Math.max(-by, Math.min(by, d.y + e.clientY - d.sy));
    setWindows((current) =>
      current.map((w) => (w.id === d.id ? { ...w, x, y } : w)),
    );
  }
  function content(id: AppId) {
    if (id === 'welcome')
      return (
        <div className="os-welcome">
          <div className="os-welcome-copy">
            <p className="os-kicker">
              <i className="os-dot" /> Un espacio para crear y compartir
            </p>
            <h2 className="os-welcome-heading">
              Hola, soy
              <br />
              <em>Michael Daniel.</em>
            </h2>
            <p className="os-lede">
              Desarrollador, creador de contenido y una persona que nunca deja
              de aprender.
            </p>
            <p className="os-welcome-note">
              Aquí están mis proyectos, mis cursos y un poco de lo que soy.
              Siéntete como en tu escritorio.
            </p>
            <div className="os-actions">
              <button className="os-primary" onClick={() => open('projects')}>
                <Folder size={17} /> Explorar proyectos{' '}
                <ChevronRight size={16} />
              </button>
              <button className="os-secondary" onClick={() => open('about')}>
                Conocerme <ArrowUpRight size={16} />
              </button>
            </div>
            <div className="os-welcome-footer">
              <Code2 size={15} /> Construyendo y compartiendo desde 2020.
            </div>
          </div>
          <div className="os-portrait-wrap">
            <Photo
              src="https://github.com/soymichaeldaniel.png?size=520"
              alt="Retrato de Michael Daniel"
              className="os-portrait"
            />
            <div className="os-portrait-label">
              <i className="os-dot" /> Aprendiendo algo nuevo
            </div>
            <span className="os-photo-caption">
              MICHAEL_DANIEL / PERSONAL SPACE
            </span>
          </div>
        </div>
      );
    if (id === 'about')
      return (
        <div className="os-document">
          <div className="os-document-meta">
            <FileText size={16} /> Documento de texto <span>UTF-8</span>
          </div>
          <p className="os-kicker">01 / La persona detrás del código</p>
          <h2>
            Mucho más que
            <br />
            un archivo de código.
          </h2>
          <p>
            Soy Michael Daniel Pacheco, estudiante de Ingeniería Empresarial y
            de Sistemas, desarrollador frontend y creador de contenido.
          </p>
          <p>
            Desde 2020 comparto lo que aprendo sobre programación. Me gusta
            convertir ideas en proyectos y explicar el proceso para que otros
            también puedan construir.
          </p>
          <blockquote>
            Quiero compartir lo que sé, lo que pienso y lo que voy descubriendo.
          </blockquote>
          <p>
            Mi canal comenzó como DaniCodex. Hoy lleva mi nombre y abre una
            nueva etapa: tecnología, experiencias, opiniones y tutoriales que
            siguen disponibles para aprender a tu ritmo.
          </p>
          <div className="os-socials">
            {socials.map(([name, href]) => (
              <LinkOut key={name} href={href}>
                {name}
              </LinkOut>
            ))}
          </div>
        </div>
      );
    if (id === 'projects') {
      const selected = projectIndex === null ? null : projects[projectIndex];
      const list = projects
        .map((p, i) => ({ p, i }))
        .filter(
          ({ p }) => filter === 'Todos' || p.technologies.includes(filter),
        );
      return (
        <div className="os-explorer">
          <div className="os-breadcrumb">
            <Folder size={16} /> Michael Daniel <ChevronRight size={14} />{' '}
            Proyectos
          </div>
          {selected ? (
            <div className="os-project-detail">
              <button className="os-back" onClick={() => setProjectIndex(null)}>
                <ArrowLeft size={16} /> Todos los proyectos
              </button>
              <Photo
                src={selected.thumbnail}
                alt={`Vista previa de ${selected.title}`}
              />
              <p className="os-kicker">
                Proyecto / {String(projectIndex! + 1).padStart(2, '0')}
              </p>
              <h2>{selected.title}</h2>
              <p>{selected.description}</p>
              <div className="os-tags">
                {selected.technologies.map((t) => (
                  <span key={t}>{t}</span>
                ))}
              </div>
              <div className="os-actions">
                <LinkOut className="os-primary" href={selected.repoUrl}>
                  Ver repositorio
                </LinkOut>
                {selected.liveUrl && (
                  <LinkOut className="os-secondary" href={selected.liveUrl}>
                    Abrir demo
                  </LinkOut>
                )}
              </div>
            </div>
          ) : (
            <>
              <div className="os-content-heading">
                <div>
                  <p className="os-kicker">Ideas que se hicieron realidad</p>
                  <h2>Mi carpeta de proyectos</h2>
                </div>
                <span className="os-count">{list.length} archivos</span>
              </div>
              <div className="os-filters" aria-label="Filtrar proyectos">
                {['Todos', 'JavaScript', 'HTML', 'C++'].map((f) => (
                  <button
                    key={f}
                    aria-pressed={filter === f}
                    onClick={() => setFilter(f)}
                  >
                    {f}
                  </button>
                ))}
              </div>
              <div className="os-project-grid">
                {list.map(({ p, i }) => (
                  <button
                    className="os-project-item"
                    key={p.title}
                    onClick={() => setProjectIndex(i)}
                  >
                    <Photo
                      src={p.thumbnail}
                      alt={`Vista previa de ${p.title}`}
                    />
                    <div>
                      <span className="os-kicker">
                        {String(i + 1).padStart(2, '0')} / {p.technologies[0]}
                      </span>
                      <h3>{p.title}</h3>
                      <p>{p.description}</p>
                      <span className="os-file-open">
                        Abrir proyecto <ArrowUpRight size={15} />
                      </span>
                    </div>
                  </button>
                ))}
              </div>
            </>
          )}
        </div>
      );
    }
    if (id === 'courses') {
      const list = courses.filter(
        (c) =>
          c.category === path &&
          `${c.title} ${c.description}`
            .toLowerCase()
            .includes(search.toLowerCase()),
      );
      return (
        <div className="os-course-library">
          <p className="os-kicker">Aprende a tu ritmo</p>
          <h2>Un curso. Un nuevo comienzo.</h2>
          <p className="os-muted">
            Rutas gratuitas, ejemplos prácticos y proyectos. Todo en YouTube.
          </p>
          <label className="os-search">
            <Search size={17} />
            <span className="sr-only">Buscar cursos</span>
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Buscar un curso…"
            />
          </label>
          <div className="os-filters" aria-label="Rutas de aprendizaje">
            {paths.map((p) => (
              <button
                key={p.id}
                aria-pressed={path === p.id}
                onClick={() => setPath(p.id)}
              >
                {p.title}
              </button>
            ))}
          </div>
          <div className="os-course-grid">
            {list.map((c) => (
              <article key={c.slug} className="os-course">
                <Photo src={c.thumbnail} alt={`Miniatura de ${c.title}`} />
                <div>
                  <p className="os-kicker">
                    {c.level} · {c.lessons}
                  </p>
                  <h3>{c.title}</h3>
                  <p>{c.description}</p>
                  <LinkOut href={c.url}>Ver curso gratuito</LinkOut>
                </div>
              </article>
            ))}
          </div>
          {!list.length && (
            <p className="os-empty">
              No hay cursos con ese nombre en esta ruta. Prueba otra búsqueda o
              ruta.
            </p>
          )}
          <a className="os-direct-link" href="/cursos">
            Enlace directo a la biblioteca <ArrowUpRight size={14} />
          </a>
        </div>
      );
    }
    if (id === 'stack')
      return (
        <div className="os-stack">
          <p className="os-terminal-line">
            <span>michael@desktop</span> ~ / stack.exe
          </p>
          <p className="os-kicker">
            Herramientas para convertir ideas en código
          </p>
          <h2>Mi caja de herramientas.</h2>
          <p className="os-muted">
            Tecnologías que uso y sigo explorando en mis proyectos.
          </p>
          {stack.map((g) => (
            <section key={g.title}>
              <h3>
                <Terminal size={16} /> {g.title}
              </h3>
              <div className="os-stack-grid">
                {g.items.map((t, i) => (
                  <div key={t}>
                    <span>{String(i + 1).padStart(2, '0')}</span>
                    <strong>{t}</strong>
                    <Check size={15} />
                  </div>
                ))}
              </div>
            </section>
          ))}
          <div className="os-terminal-bottom">
            <span>✓</span> El aprendizaje sigue en ejecución
            <span className="os-cursor" />
          </div>
        </div>
      );
    return (
      <div className="os-recruiter">
        <p className="os-kicker">Acceso rápido / Perfil profesional</p>
        <h2>Michael Daniel Pacheco</h2>
        <p className="os-recruiter-subtitle">
          Desarrollador frontend · Creador de contenido
        </p>
        <p>
          Estudiante de Ingeniería Empresarial y de Sistemas. Construyo
          interfaces web y comparto conocimientos de programación mediante
          proyectos y tutoriales prácticos.
        </p>
        <h3>Tecnologías</h3>
        <div className="os-tags">
          {stack
            .flatMap((s) => s.items)
            .map((t) => (
              <span key={t}>{t}</span>
            ))}
        </div>
        <h3>Proyectos seleccionados</h3>
        <div className="os-recruiter-projects">
          {projects.map((p) => (
            <LinkOut key={p.title} href={p.repoUrl}>
              <span>
                <strong>{p.title}</strong>
                <small>{p.technologies.join(' · ')}</small>
              </span>
            </LinkOut>
          ))}
        </div>
        <h3>Conversemos</h3>
        <div className="os-actions">
          <LinkOut className="os-primary" href={socials[4][1]}>
            Contactar en LinkedIn
          </LinkOut>
          <LinkOut className="os-secondary" href={socials[1][1]}>
            Perfil de GitHub
          </LinkOut>
        </div>
      </div>
    );
  }
  return (
    <main
      className="michael-os"
      data-window-open={Boolean(active)}
      onKeyDown={(e) => {
        if (e.key === 'Escape') {
          if (menu) setMenu(false);
          else if (active) close(active);
        }
      }}
    >
      <h1 className="sr-only">Michael Daniel — Mi escritorio personal</h1>
      <header className="os-topbar">
        <a href="/" className="os-wordmark">
          <Monitor size={17} /> michael<span>OS</span>
          <small>v.01</small>
        </a>
        <span className="os-topbar-center">
          El escritorio de Michael Daniel
        </span>
        <button
          id="launcher-recruiter"
          className="os-recruiter-access"
          onClick={() => open('recruiter')}
        >
          <FileText size={15} /> Para reclutadores <ArrowUpRight size={13} />
        </button>
      </header>
      <div className="os-desktop">
        <div className="os-wallpaper" aria-hidden="true">
          <span>md.</span>
          <small>SIEMPRE EN CONSTRUCCIÓN.</small>
        </div>
        <div className="os-mobile-intro">
          <p className="os-kicker">Mi espacio personal</p>
          <h2 className="os-mobile-heading">
            Michael Daniel<span>.</span>
          </h2>
          <p>Código, ideas y cosas por descubrir.</p>
          <button id="launcher-welcome" onClick={() => open('welcome')}>
            Abrir bienvenida <ChevronRight size={15} />
          </button>
        </div>
        <nav className="os-launchers" aria-label="Aplicaciones del escritorio">
          {apps.map((a) => (
            <button
              id={`launcher-${a.id}`}
              key={a.id}
              onClick={() => open(a.id)}
              className="os-launcher"
            >
              <span className={`os-app-icon ${a.color}`}>
                <RetroIcon kind={a.id} />
              </span>
              <span>{a.title}</span>
            </button>
          ))}
          {[
            {
              title: 'YouTube',
              icon: Youtube,
              color: 'red',
              href: socials[0][1],
            },
            {
              title: 'GitHub',
              icon: Github,
              color: 'silver',
              href: socials[1][1],
            },
          ].map((a) => (
            <a
              className="os-launcher"
              key={a.title}
              href={a.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${a.title} (abre en otra pestaña)`}
            >
              <span className={`os-app-icon ${a.color}`}>
                <RetroIcon kind={a.title === 'YouTube' ? 'youtube' : 'github'} />
              </span>
              <span>
                {a.title} <ArrowUpRight size={10} />
              </span>
            </a>
          ))}
        </nav>
        <div className="os-window-area">
          {windows.map((w, i) => (
            <section
              key={w.id}
              ref={(el) => {
                panels.current[w.id] = el;
              }}
              tabIndex={-1}
              role="region"
              aria-labelledby={`title-${w.id}`}
              hidden={w.minimized}
              className={`os-window ${w.maximized ? 'is-maximized' : ''} ${active === w.id ? 'is-active' : 'is-background'} ${w.id === 'welcome' ? 'welcome-window' : ''}`}
              style={
                {
                  zIndex: i + 1,
                  '--window-x': `${w.x}px`,
                  '--window-y': `${w.y}px`,
                } as CSSProperties
              }
              onPointerDown={() => {
                if (active !== w.id)
                  setWindows((current) => [
                    ...current.filter((v) => v.id !== w.id),
                    w,
                  ]);
              }}
            >
              <div
                className="os-window-titlebar"
                onPointerDown={(e) => startDrag(e, w)}
                onPointerMove={moveDrag}
                onPointerUp={() => {
                  drag.current = null;
                }}
                onPointerCancel={() => {
                  drag.current = null;
                }}
              >
                <span className="os-window-title" id={`title-${w.id}`}>
                  <span>
                    {w.id === 'projects' ? (
                      <Folder size={15} />
                    ) : w.id === 'courses' ? (
                      <BookOpen size={15} />
                    ) : w.id === 'stack' ? (
                      <Terminal size={15} />
                    ) : (
                      <FileText size={15} />
                    )}
                  </span>
                  {titles[w.id]}
                </span>
                <div className="os-window-controls">
                  <button
                    className="os-minimize"
                    aria-label={`Minimizar ${titles[w.id]}`}
                    onClick={() => {
                      setWindows((current) =>
                        current.map((v) =>
                          v.id === w.id ? { ...v, minimized: true } : v,
                        ),
                      );
                      requestAnimationFrame(() =>
                        document.getElementById(`task-${w.id}`)?.focus(),
                      );
                    }}
                  >
                    <Minus size={15} />
                  </button>
                  <button
                    className="os-maximize"
                    aria-label={`${w.maximized ? 'Restaurar' : 'Maximizar'} ${titles[w.id]}`}
                    onClick={() =>
                      setWindows((current) =>
                        current.map((v) =>
                          v.id === w.id ? { ...v, maximized: !v.maximized } : v,
                        ),
                      )
                    }
                  >
                    <Maximize2 size={13} />
                  </button>
                  <button
                    className="os-close"
                    aria-label={`Cerrar ${titles[w.id]}`}
                    onClick={() => close(w.id)}
                  >
                    <X size={17} />
                  </button>
                </div>
              </div>
              <nav className="retro-window-menu" aria-label={`Navegación de ${titles[w.id]}`}>
                <button onClick={() => open('welcome')}>Inicio</button>
                <button onClick={() => open('projects')}>Proyectos</button>
                <button onClick={() => open('courses')}>Cursos</button>
                <button onClick={() => open('about')}>Sobre mí</button>
              </nav>
              <div className="os-window-body">{content(w.id)}</div>
              <div className="os-window-status">
                <span>
                  <i className="os-dot" />{' '}
                  {w.id === 'welcome'
                    ? 'Qué bueno que estés aquí.'
                    : 'Michael Daniel / Espacio personal'}
                </span>
                <span>michaelOS</span>
              </div>
            </section>
          ))}
        </div>
        <div className="os-desktop-caption">
          <span>UN ESCRITORIO. MUCHAS IDEAS.</span>
          <span>
            Haz clic en una aplicación para explorar <ChevronRight size={12} />
          </span>
        </div>
      </div>
      {menu && (
        <nav className="os-start-menu" aria-label="Menú de inicio">
          <div>
            <Photo
              src="https://github.com/soymichaeldaniel.png?size=96"
              alt=""
            />
            <span>
              Michael Daniel<small>Tu próximo clic, una nueva idea.</small>
            </span>
          </div>
          <button onClick={() => open('welcome')}>
            <Monitor size={18} /> Bienvenida
          </button>
          {apps.map((a) => (
            <button key={a.id} onClick={() => open(a.id)}>
              <a.icon size={18} />
              {a.title}
            </button>
          ))}
          <button onClick={() => open('recruiter')}>
            <FileText size={18} /> Para reclutadores
          </button>
        </nav>
      )}
      <footer className="os-taskbar">
        <button
          className="os-start"
          aria-expanded={menu}
          aria-label="Abrir menú de inicio"
          onClick={() => setMenu(!menu)}
        >
          <RetroIcon kind="start" size={20} />
          <span>Inicio</span>
        </button>
        <div className="os-taskbar-divider" />
        <nav className="os-running-apps" aria-label="Ventanas abiertas">
          {windows.map((w) => (
            <button
              key={w.id}
              id={`task-${w.id}`}
              aria-label={`${w.minimized ? 'Restaurar' : 'Activar'} ${titles[w.id]}`}
              aria-pressed={active === w.id}
              onClick={() => open(w.id)}
            >
              {w.id === 'courses' ? (
                <BookOpen size={18} />
              ) : w.id === 'projects' ? (
                <Folder size={18} />
              ) : w.id === 'stack' ? (
                <Terminal size={18} />
              ) : (
                <FileText size={18} />
              )}
              <span>{titles[w.id]}</span>
              <i />
            </button>
          ))}
        </nav>
        <span className="os-system-status">
          <i className="os-dot" /> Personal space
        </span>
        <div className="os-clock">
          <span>{time || '--:--'}</span>
          <small>Lima, Perú</small>
        </div>
      </footer>
    </main>
  );
}
