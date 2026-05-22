MovieZone

Idea del proyecto

MovieZone es una página principal desarrollada con React y Vite.  
La temática elegida es una plataforma simple de películas, donde se muestran películas destacadas utilizando datos simulados desde un array local.

Decisiones del wireframe

El wireframe se pensó con una estructura clara:

- Header con el nombre del proyecto y navegación.
- Sección principal tipo hero con título, descripción y botón de acción.
- Sección dinámica donde se renderizan películas.
- Cards reutilizables para mostrar la información de cada película.
- Footer simple con información del proyecto.

## Organización de componentes

El proyecto está dividido en carpetas para mantener una estructura ordenada:

- `components`: contiene componentes reutilizables.
  - `Header.jsx`
  - `MovieList.jsx`
  - `MovieCard.jsx`

- `pages`: contiene las páginas principales.
  - `Home.jsx`

- `app.jsx`: componente principal que renderiza la página Home.

Renderizado dinámico

Los datos de las películas se encuentran en un array local dentro de `Home.jsx`.

La lista se renderiza usando `.map()` dentro del componente `MovieList`.
