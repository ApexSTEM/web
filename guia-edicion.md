# Guía para Editar el Sitio Web de Ápex STEM

Esta guía te mostrará cómo modificar fácilmente los textos e imágenes del sitio web de Ápex STEM. La estructura ha sido diseñada para ser lo más sencilla posible de editar, sin necesidad de conocimientos avanzados de programación.

## Índice
1. [Estructura de Archivos](#estructura-de-archivos)
2. [Cómo Editar Textos](#cómo-editar-textos)
3. [Cómo Reemplazar Imágenes](#cómo-reemplazar-imágenes)
4. [Cómo Modificar Colores](#cómo-modificar-colores)
5. [Cómo Añadir Nuevas Páginas](#cómo-añadir-nuevas-páginas)
6. [Consejos Útiles](#consejos-útiles)

## Estructura de Archivos

El sitio web está organizado de la siguiente manera:

```
apex-stem-simple/
├── index.html           # Página de inicio
├── about.html           # Página "Sobre Nosotros"
├── services.html        # Página de servicios
├── contact.html         # Página de contacto
├── css/
│   └── styles.css       # Hoja de estilos principal
├── js/
│   ├── main.js          # JavaScript principal
│   ├── advisor.js       # Funcionalidad del asesor
│   └── contact.js       # Funcionalidad del formulario de contacto
└── images/
    ├── logo.png         # Logo principal
    ├── logo-white.png   # Logo para el pie de página
    ├── favicon.png      # Favicon del sitio
    ├── hero-bg.jpg      # Imagen de fondo del hero en inicio
    ├── about-hero-bg.jpg # Imagen de fondo del hero en "Sobre Nosotros"
    ├── services-hero-bg.jpg # Imagen de fondo del hero en "Servicios"
    ├── contact-hero-bg.jpg # Imagen de fondo del hero en "Contacto"
    ├── advisor-bg.jpg   # Imagen de fondo de la sección del asesor
    ├── about-history.jpg # Imagen para la sección de historia
    ├── about-approach.jpg # Imagen para la sección de enfoque educativo
    ├── icons/           # Carpeta para iconos
    ├── team/            # Carpeta para fotos del equipo
    ├── services/        # Carpeta para imágenes de servicios
    └── testimonials/    # Carpeta para fotos de testimonios
```

## Cómo Editar Textos

Todos los textos que necesitas modificar están claramente marcados en los archivos HTML con comentarios `<!-- EDITAR: -->`. Sigue estos pasos:

1. Abre el archivo HTML que deseas modificar con cualquier editor de texto (como Notepad++, Visual Studio Code, o incluso el Bloc de notas).

2. Busca los comentarios `<!-- EDITAR: -->` que indican dónde puedes cambiar el texto.

3. Modifica el texto entre las etiquetas HTML sin cambiar las etiquetas mismas.

### Ejemplo:

Original:
```html
<!-- EDITAR: Cambia el título principal aquí -->
<h1>Ápex STEM: Liderando tu Camino Hacia la Excelencia</h1>
```

Modificado:
```html
<!-- EDITAR: Cambia el título principal aquí -->
<h1>Ápex STEM: Educación de Calidad en Ciencias y Matemáticas</h1>
```

### Secciones Comunes para Editar:

#### En todas las páginas:
- **Encabezado**: Logo y enlaces de navegación
- **Pie de página**: Información de contacto, enlaces rápidos y redes sociales

#### En index.html (Página de inicio):
- **Hero**: Título principal, subtítulo y botón de llamada a la acción
- **Misión y Visión**: Títulos y descripciones
- **Servicios Destacados**: Títulos, descripciones e imágenes
- **Sección Asesor**: Título, descripción y botón
- **Testimonios**: Nombres, roles, fotos y citas

#### En about.html (Sobre Nosotros):
- **Hero**: Título y subtítulo
- **Historia**: Título y párrafos descriptivos
- **Valores**: Títulos y descripciones de cada valor
- **Enfoque Educativo**: Título, descripción y puntos clave
- **Equipo**: Nombres, cargos, fotos y biografías

#### En services.html (Servicios):
- **Hero**: Título y subtítulo
- **Servicios Principales**: Títulos, descripciones y características
- **Programas Especiales**: Títulos y descripciones
- **Planes y Precios**: Nombres, precios y características

#### En contact.html (Contacto):
- **Hero**: Título y subtítulo
- **Formulario**: Campos y botón de envío
- **Información de Contacto**: Email, teléfono, redes sociales y horarios
- **Preguntas Frecuentes**: Preguntas y respuestas

## Cómo Reemplazar Imágenes

Todas las imágenes están organizadas en la carpeta `images/` y sus subcarpetas. Para reemplazarlas:

1. Prepara tu nueva imagen. Recomendamos mantener proporciones similares a las imágenes originales.

2. Nombra tu nueva imagen exactamente igual que la imagen que deseas reemplazar.

3. Sube la nueva imagen a la misma ubicación que la original, reemplazándola.

### Tamaños Recomendados:

- **Logo**: 200x50 px (mantén la proporción)
- **Imágenes Hero**: 1920x800 px
- **Imágenes de Servicios**: 600x400 px
- **Fotos del Equipo**: 400x400 px (cuadradas)
- **Fotos de Testimonios**: 150x150 px (cuadradas)
- **Iconos**: 50x50 px (preferiblemente SVG)

### Ejemplo de Reemplazo:

Para reemplazar la imagen de fondo del hero en la página de inicio:
1. Prepara tu nueva imagen con un tamaño de 1920x800 px
2. Nómbrala `hero-bg.jpg`
3. Sube esta imagen a la carpeta `images/`, reemplazando el archivo existente

### Imágenes en CSS:

Algunas imágenes se definen en el archivo CSS. Para cambiarlas:

1. Abre el archivo `css/styles.css`
2. Busca la sección correspondiente (por ejemplo, `.hero` para la imagen de fondo del hero)
3. Modifica la ruta en la propiedad `background-image`

Ejemplo:
```css
.hero {
    /* EDITAR: Cambia la imagen de fondo aquí */
    background-image: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('../images/hero-bg.jpg');
    /* resto del código... */
}
```

## Cómo Modificar Colores

Los colores principales del sitio se definen como variables CSS al inicio del archivo `css/styles.css`:

```css
:root {
    /* EDITAR: Colores principales - Cambia estos valores para modificar el esquema de colores del sitio */
    --color-primary: #2563eb;        /* Azul principal */
    --color-primary-dark: #1d4ed8;   /* Azul oscuro */
    --color-secondary: #7c3aed;      /* Morado/Púrpura */
    --color-secondary-dark: #6d28d9; /* Morado oscuro */
    --color-accent: #eab308;         /* Amarillo/Dorado */
    --color-accent-dark: #d97706;    /* Amarillo oscuro */
    
    /* Colores de texto */
    --color-text-dark: #1f2937;      /* Texto principal */
    --color-text-medium: #4b5563;    /* Texto secundario */
    --color-text-light: #9ca3af;     /* Texto terciario */
    
    /* Colores de fondo */
    --color-bg-light: #ffffff;       /* Fondo claro */
    --color-bg-off-white: #f9fafb;   /* Fondo gris muy claro */
    --color-bg-gray: #f3f4f6;        /* Fondo gris claro */
    
    /* resto del código... */
}
```

Para cambiar el esquema de colores del sitio, simplemente modifica estos valores. Puedes usar cualquier herramienta de selección de colores online para encontrar los códigos hexadecimales (como #2563eb).

## Cómo Añadir Nuevas Páginas

Si necesitas añadir una nueva página:

1. Copia uno de los archivos HTML existentes (el que sea más similar a lo que necesitas)
2. Renómbralo con el nombre deseado (por ejemplo, `blog.html`)
3. Modifica el contenido según tus necesidades
4. Actualiza los enlaces de navegación en todas las páginas para incluir la nueva página

Ejemplo de actualización de navegación:
```html
<ul class="nav-links">
    <!-- EDITAR: Modifica los enlaces de navegación aquí -->
    <li><a href="index.html">Inicio</a></li>
    <li><a href="about.html">Sobre Nosotros</a></li>
    <li><a href="services.html">Servicios</a></li>
    <li><a href="blog.html">Blog</a></li>  <!-- Nueva página -->
    <li><a href="contact.html">Contacto</a></li>
    <li><a href="#" class="btn-advisor">Asesor 24/7</a></li>
</ul>
```

## Consejos Útiles

1. **Haz copias de seguridad**: Antes de realizar cambios importantes, haz una copia de los archivos originales.

2. **Mantén las etiquetas HTML**: Modifica solo el contenido entre las etiquetas, no las etiquetas mismas.

3. **Prueba los cambios**: Después de realizar modificaciones, abre el sitio en un navegador para verificar que todo se ve correctamente.

4. **Optimiza las imágenes**: Comprime tus imágenes antes de subirlas para mejorar el rendimiento del sitio. Puedes usar herramientas online como TinyPNG.

5. **Consistencia**: Mantén un estilo consistente en todas las páginas (fuentes, colores, espaciado).

6. **Nombres de archivos**: Usa nombres descriptivos y sin espacios para tus archivos (usa guiones o guiones bajos en lugar de espacios).

7. **Validación**: Si tienes dudas sobre la validez de tu HTML, puedes usar el validador de W3C (https://validator.w3.org/).

8. **Asesor Claude**: Para modificar el comportamiento del asesor, edita el archivo `js/advisor.js`. Los comentarios en el código te guiarán.

---

Si necesitas ayuda adicional o tienes preguntas específicas sobre cómo editar alguna parte del sitio, no dudes en contactarnos.
