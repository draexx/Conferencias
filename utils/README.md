# Recursos de Diseño

Esta carpeta contiene recursos gráficos y plantillas para diseñar fondos y otros elementos visuales utilizados en las presentaciones.

## Archivos disponibles

- **`background-slides.svg`**: Plantilla en formato SVG para diseñar fondos personalizados para presentaciones. Puedes editar este archivo con herramientas como [Inkscape](https://inkscape.org/) o Adobe Illustrator.

## Uso

1. Abre el archivo `background-slides.svg` en tu editor de gráficos preferido.
2. Personaliza el diseño según las necesidades de tu presentación (colores, logotipos, patrones, etc.).
3. Exporta el diseño como una imagen (por ejemplo, PNG o JPEG) para usarlo como fondo en tus presentaciones.

### Ejemplo de uso en Reveal.js

Después de exportar el fondo, puedes usarlo en una presentación configurando el fondo en el archivo `index.html`:

```javascript
document.querySelector('.reveal').style.backgroundImage = "url('../utils/mi-fondo-personalizado.png')";
document.querySelector('.reveal').style.backgroundSize = "cover";
document.querySelector('.reveal').style.backgroundPosition = "center";