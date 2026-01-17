# Conferencias

Bienvenido al repositorio de **Conferencias**, un espacio centralizado para acceder a diversas presentaciones y charlas sobre tecnología. Este proyecto organiza y proporciona acceso fácil a los materiales de conferencias pasadas.

---

## 🌐 Página Web de Presentaciones
Puedes explorar todas las presentaciones de forma interactiva a través de nuestra página principal:

➡️ [**Ver Página de Presentaciones**](index.html)

---

## 📂 Estructura del Proyecto
- **`go/`**: Contiene los archivos relacionados con la presentación "Go! Conociendo una Alternativa".
- **`distribuciones_linux/`**: Contiene los archivos relacionados con la presentación "Distribuciones Linux".
- **`utils/`**: Alberga recursos de diseño y plantillas para crear presentaciones.
- **`index.html`**: Página principal que lista todas las presentaciones.
- **`README.md`**: Este archivo, que describe el contenido del repositorio.

---

## 📂 Recursos de Diseño y Plantillas
En la carpeta [`utils`](utils/README.md) encontrarás recursos gráficos, plantillas y documentación para crear presentaciones con Reveal.js.

---

---

## 🤖 Automatización

Este repositorio incluye un sistema automatizado que genera el `index.html` automáticamente cuando agregas nuevas presentaciones.

### Cómo funciona

1. Cada carpeta de presentación debe tener un archivo `presentation.json` con los metadatos
2. El script `generate-index.js` escanea las carpetas y genera el HTML
3. **GitHub Actions** ejecuta el script automáticamente cuando haces push

Para más detalles, consulta:
- [README-AUTOMATION.md](README-AUTOMATION.md) - Documentación del sistema
- [README-GITHUB-PAGES.md](README-GITHUB-PAGES.md) - Configuración para GitHub Pages

**Nota:** Las dependencias npm (nodemon) son solo para desarrollo local. GitHub Actions funciona sin dependencias externas.

---

## 📬 Contacto
Si tienes preguntas o comentarios, no dudes en contactarme.
