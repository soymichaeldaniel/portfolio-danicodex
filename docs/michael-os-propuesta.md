# Michael OS — Propuesta de rediseño

## Idea

El portfolio es el escritorio personal de Michael Daniel: un lugar para explorar sus proyectos, aprender con sus cursos y conocer a la persona detrás del código. La referencia de Archivos Eladio inspira la navegación mediante archivos y ventanas; Michael OS tendrá su propia apariencia moderna, oscura y azul eléctrica.

## Primera pantalla

Un fondo grafito con una luz azul tenue y el nombre Michael Daniel. Una ventana de bienvenida abierta muestra una presentación breve, la foto y dos acciones: «Explorar proyectos» y «Conocerme». Una columna de aplicaciones ofrece Sobre mí.txt, Proyectos, Cursos, Stack.exe, YouTube y GitHub. La barra de tareas permite abrir aplicaciones, reconocer las ventanas activas y recuperar las minimizadas. «Para reclutadores» permanece visible.

## Aplicaciones

| Aplicación | Contenido y comportamiento |
| --- | --- |
| Sobre mí.txt | Biografía con tono personal, trayectoria como creador, intereses y enlaces de contacto verificados. |
| Proyectos | Explorador con las cinco selecciones actuales, thumbnails y filtros por tecnología. Cada proyecto abre su ficha con contexto, tecnologías, repositorio y demo cuando exista. |
| Cursos | Biblioteca por rutas de aprendizaje con thumbnails y acceso a las playlists originales. Mantener /cursos como dirección directa y compartible. |
| Stack.exe | Panel de tecnologías organizado por frontend, programación y herramientas. Sin porcentajes de dominio inventados. |
| YouTube y GitHub | Accesos directos a los perfiles oficiales, identificados como enlaces externos. |
| Para reclutadores | Resumen legible de perfil, tecnologías, proyectos destacados y contacto en una sola vista. CV solo si Michael proporciona el archivo. |

## Ventanas e interacción

Abrir aplicaciones con un clic o Enter. Ventanas con título, cerrar, minimizar y maximizar; arrastre desde la barra de título en computadora. Un clic lleva una ventana al frente. La barra de tareas restaura ventanas minimizadas. Posiciones acotadas al área visible para evitar perder ventanas. Escape cierra la ventana activa, el foco vuelve a su lanzador y los controles tienen etiquetas accesibles. Sin sonidos automáticos ni pantalla de arranque que retrase el acceso.

## Dirección visual

Grafito #090B10, superficies #111827, azul eléctrico #2684FF y texto #F3F6FC. Tipografía sans para lectura y monoespaciada para nombres de archivos, etiquetas y detalles del sistema. Iconos coherentes, bordes finos, esquinas ligeramente redondeadas y sombras suaves. Animaciones breves con soporte para movimiento reducido. Fotografías y thumbnails reales del contenido existente.

## Móvil

Pantalla de aplicaciones con iconos grandes y navegación inferior. Cada aplicación ocupa una pantalla completa con encabezado y botón para volver al inicio. Un único panel visible a la vez; sin arrastre ni superposición. Proyectos y cursos conservan tarjetas legibles y desplazamiento normal. El acceso para reclutadores sigue a un toque de distancia.

## Implementación propuesta

Reutilizar los datos actuales de proyectos y cursos, ampliándolos solo donde las fichas necesiten contenido verificado. Separar el escritorio, los lanzadores, la barra de tareas, la gestión de ventanas y las aplicaciones en componentes. Mantener Inicio y Cursos como rutas directas; usar parámetros de URL para enlazar a una aplicación o proyecto concreto. Primera versión sin cuentas, backend ni CMS.

## Entrega inicial

1. Escritorio, bienvenida, lanzadores y navegación móvil.
2. Aplicaciones con contenido real, gestión de ventanas y acceso para reclutadores.
3. Comprobación de navegación con teclado, uso táctil, enlaces directos y tamaños de pantalla.
4. Vista previa para revisar el diseño antes de publicar el rediseño.

Esta propuesta todavía no modifica el sitio publicado.
