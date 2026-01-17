# Recursos de Diseño y Presentaciones

Esta carpeta contiene recursos gráficos y plantillas para crear presentaciones con Reveal.js.

## 🎨 Recursos Disponibles

- **`background-slides.svg`**: Plantilla en formato SVG para diseñar fondos personalizados para presentaciones

## 🎨 Personalización del Fondo

1. Abre el archivo `background-slides.svg` en tu editor de gráficos preferido.
2. Personaliza el diseño según las necesidades de tu presentación (colores, logotipos, patrones, etc.).
3. Exporta el diseño como una imagen (por ejemplo, PNG o JPEG) para usarlo como fondo en tus presentaciones.

### Ejemplo de uso en Reveal.js

Después de exportar el fondo, puedes usarlo en una presentación configurando el fondo en el archivo `index.html`:

```javascript
document.querySelector('.reveal').style.backgroundImage = "url('images/mi-fondo-personalizado.png')";
document.querySelector('.reveal').style.backgroundSize = "cover";
document.querySelector('.reveal').style.backgroundPosition = "center";
```

## 🎯 Guía para Crear Presentaciones con Reveal.js

Reveal.js es una librería JavaScript para crear presentaciones interactivas en el navegador. Aquí te explicamos cómo funciona y cómo crear diapositivas.

### 📋 Estructura Básica de una Presentación

Una presentación con Reveal.js consiste en:

1. **HTML básico** con la estructura de Reveal.js
2. **Diapositivas** organizadas en secciones (`<section>`)
3. **Contenido** dentro de cada diapositiva
4. **Configuración JavaScript** para inicializar Reveal.js

### 🔧 Cómo Funcionan las Diapositivas

#### Diapositivas Horizontales
```html
<section>
  <h1>Primera Diapositiva</h1>
  <p>Contenido de la primera diapositiva</p>
</section>

<section>
  <h2>Segunda Diapositiva</h2>
  <ul>
    <li>Punto 1</li>
    <li>Punto 2</li>
  </ul>
</section>
```

#### Diapositivas Verticales (Sub-diapositivas)
```html
<section>
  <h1>Diapositiva Principal</h1>
  <section>
    <h2>Sub-diapositiva 1</h2>
    <p>Contenido de la sub-diapositiva</p>
  </section>
  <section>
    <h2>Sub-diapositiva 2</h2>
    <p>Más contenido</p>
  </section>
</section>
```

### 🎮 Controles de Navegación

- **Flechas del teclado**: ← → ↑ ↓ para navegar
- **Espacio**: Avanzar diapositiva
- **Enter**: Siguiente diapositiva
- **ESC**: Vista general
- **Mouse**: Clic para avanzar

### 📊 Fragmentos y Animaciones

Para mostrar contenido progresivamente:

```html
<section>
  <h2>Lista con animación</h2>
  <ul>
    <li class="fragment">Primer punto (aparece primero)</li>
    <li class="fragment">Segundo punto (aparece después)</li>
    <li class="fragment">Tercer punto (aparece último)</li>
  </ul>
</section>
```

### 📱 Temas y Estilos

Reveal.js incluye temas predefinidos:
- `black`, `white`, `league`, `beige`, `sky`, `night`, `serif`, `simple`, `solarized`, `moon`, `blood`

Cambiar tema:
```html
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/reveal.js/4.3.1/theme/black.min.css">
```

### 🛠️ Plugins Útiles

- **Markdown**: Cargar contenido desde archivos `.md`
- **Highlight**: Resaltado de código
- **Zoom**: Zoom en imágenes
- **Notes**: Notas del presentador
- **Math**: Fómulas matemáticas

### 📄 Exportar a PDF

1. Abre la presentación en el navegador
2. Agrega `?print-pdf` a la URL
3. Imprime como PDF (Ctrl/Cmd + P)

### 🚀 Desarrollo Local

```bash
# Instalar servidor HTTP
npm install -g http-server

# Ejecutar
http-server

# Abrir: http://localhost:8080
```

### 📚 Recursos

- [Documentación completa](https://revealjs.com/)
- [Ejemplos y demos](https://revealjs.com/demos/)