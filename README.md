
*HARRY POTTER CHARACTER EXPLORER*

Este proyecto es una aplicación web construida con React que te permite explorar personajes del universo de Harry Potter. La información de los personajes se obtiene a través de una API pública y ofrece filtros por nombre, casa y género.
Además, puedes ver los detalles individuales de cada personaje.


--> TECNOLOGÍAS UTILIZADAS:

1.REACT:  Biblioteca principal para la construcción de la interfaz de usuario.
2.REACT ROUTER DOM: Para la navegación entre páginas.
3.PropTypes: Validacion de tipos de las props.
4.SCSS: para los estilos.


-> INSTALACIÓN

1.Clonar el repositorio:
   git clone [nombre del repositorio]

2.Instalas las dependencias:
  npm install

3.Iniciar la aplicación
  npm run dev


--> ESTRUCTURA DEL PROYECTO

/src
  -- /components
     -- characters
       CaharacterCard.jsx
       CharacterDetail.jsx
       CharacterList.jsx

    -- filters
       FilterByGender.jsx
       FilterByHouse.jsx
       FilterByName.jsx
       Filters.jsx

    -- services
       api.js

    App.jsx
    BtnReset.jsx
    Header.jsx
    NotFound.jsx

    --images
    --styles
      App.scss
    
    main.jsx


 --> CARACTERÍSTICAS

   1.Listado de personajes:
     -> Los personajes se muestran en una lista de tarjetas (CharacterCard.jsx), incluyendo su foto, nombre y especie.
     -> En caso de que un personaje no tenga imagen, se muestra una imagen de relleno.

    2.Detalles de los personajes:
     -> Al hacer clicl en un personaje, se muestra una página de detalles con información adicionale (CaharacterDetail.jsx), como la casa, género, especie, estado(vivo o no).

    3.Filtrado de personajes:
     -> Por nombre: Utiliza el campo de texto para buscar personajes por nombre (FilterByName.jsx). El filtro no distingue entre mayúsculas y minúsculas.

     -> Por casa: Filtro para seleccionar la casa del personaje (FilterByHouse.jsx). Por defecto, la casa seleccionada es Gryffindor.

     -> Por género: Filtro para seleccionar el género del personaje (FilterByGender.jsx).

    4.Reiniciar filtros:
     -> Botón para reiniciar todos los filtros y volver al listado principal (BtnReset.jsx).    

    5.Manejo de rutas no encontradas
     -> Se muestra una página personalizada si la ruta no existe (NotFound.jsx). Además, si se accede directamente a una URL de detalle inexistente, se muestra un mensaje indicando que el personaje no existe.

    6.Detalles de calidad
     -> el filtro de nombre está dentro de un formulario para mejorar la semántica.
     -> al regresar de la página de detalles, los filtros aplicados se mantienen.


-->API Utilizada 
   
    - La información de los personajes se obtiene de la siguiente API:

       HARRY POTTER API:  https://hp-api.onrender.com/
       Los datos son procesados en api.js para incluir propiedades como id, name, house, gender, species, alive.


-->MEJORAS FUTURAS

      - Ordenar alfabeticamente: Implementar ordenar los personajes alfabéticamente por nombre.

      - Emblemas de casa: Mostrar el enblema de la casa correspondiente en la vista de detalles del personaje.

      - Indicadores Visuales de Esatdo: Añadir iconos para indicar si el personaje esta vivo o muerto.

      -Filtros Avanzados: Añadir más filtros como el estado de vida o especie.

      - Modo Oscuro: Incluir una opción para cambiar entre modo claro y oscuro.

      - Mejoras de Accesibilidad: Asegurar que la aplicación sea accesible para todos los usuarios

      -Soporte Multilingüe: Añadir soporte para idiomas.

      - Optimización para Dispositivos móviles: Mejorar la experiencia de usuario en dispositivos móviles mediante diseño responsivo.





La aplicación web esta publicada en GitHub Pages.

AUTOR

desarrolado por Ana Elisa Di Blasi




























# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
