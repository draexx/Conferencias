const fs = require('fs');
const path = require('path');

const workshopDir = path.join(__dirname, 'Taller-Herramientas-2026');
const sessions = [
    { id: '01', name: 'Sesion-01-Comunicacion', title: 'Sesión 1: Comunicación y Acceso Móvil' },
    { id: '02', name: 'Sesion-02-LMS', title: 'Sesión 2: Gestión del Entorno Virtual (LMS)' },
    { id: '03', name: 'Sesion-03-VSCode', title: 'Sesión 3: Configuración del IDE (VS Code)' },
    { id: '04', name: 'Sesion-04-Markdown', title: 'Sesión 4: Introducción a la Documentación (Markdown)' },
    { id: '05', name: 'Sesion-05-Productividad', title: 'Sesión 5: Optimización del Flujo de Trabajo' },
    { id: '06', name: 'Sesion-06-Git', title: 'Sesión 6: Fundamentos de Git' },
    { id: '07', name: 'Sesion-07-GitHub-Profile', title: 'Sesión 7: Perfil Profesional en GitHub' },
    { id: '08', name: 'Sesion-08-Colaboracion', title: 'Sesión 8: Trabajo Colaborativo' }
];

// Create workshop directory
if (!fs.existsSync(workshopDir)) {
    fs.mkdirSync(workshopDir);
    console.log(`Created directory: ${workshopDir}`);
}

// Create presentation.json
const presentationConfig = {
    title: "Taller de Herramientas y Gestión de Entornos Digitales",
    date: "2026",
    tags: ["Taller", "Herramientas", "Git", "Markdown", "VSCode"],
    description: "Capacitación de 8 sesiones para Sistemas y Negocios Digitales sobre gestión de plataformas, entornos de desarrollo y control de versiones."
};
fs.writeFileSync(path.join(workshopDir, 'presentation.json'), JSON.stringify(presentationConfig, null, 2));
console.log('Created presentation.json');

// HTML Template (based on distribuciones_linux/index.html)
// Note: We need to adjust relative paths for images/css if we are deeper, but here we are at root/Workshop/Session/index.html
// The template uses CDN for reveal things, but local assets for css/images.
// Root is ../../ from session dir, or ../ from workshop dir.
// distribuciones_linux is at root level.
// Taller-Herramientas-2026 is at root level.
// Session dirs are inside Taller... so they are 2 levels deep? No, wait.
// Structure:
// /Conferencias
//   /Taller-Herramientas-2026
//     /Sesion-01...
//       index.html
//
// So assets at /Conferencias/assets needs to be reached.
// From Sesion-01: ../../assets
//
// Let's look at distribuciones_linux/index.html again.
// It links to "images/..." which are inside its own folder?
// Step 44 showed files in distribuciones_linux:
// - images (dir)
// - index.html
//
// So it seems each presentation is self-contained or expects assets relative to itself.
// But wait, the main index.html (step 43) uses "assets/css/styles.css".
// The distribuciones_linux/index.html (step 48) uses CDNs for reveal.js.
// It uses "images/logo-flisol-white.png".
//
// For this workshop, I should probably copy the images folder or point to shared assets if they existed.
// Since I don't see a shared images folder for slides, I'll assume for now we use the same template but maybe without the specific FLISoL logos, or I keep them and the user can change them.
// NOTE: The user wants "based on Pedro's Reveal.js template". This likely means the one in `distribuciones_linux`.
// I will create a stripped down version of that html.

const getHtmlTemplate = (title, markdownFile) => `<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${title}</title>
  
  <!-- Estilos de Reveal.js desde CDN -->
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/reveal.js/4.3.1/reveal.min.css">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/reveal.js/4.3.1/theme/league.min.css">
  
  <style>
    .reveal section img {
      border: none;
      box-shadow: none;
      max-height: 65vh;
    }
    .reveal h1, .reveal h2, .reveal h3 {
      margin-bottom: 0.6em;
    }
    .reveal pre code {
      max-height: 500px;
      padding: 15px;
    }
  </style>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
</head>
<body>
  <div class="reveal">
    <div class="slides">
      <section data-markdown="${markdownFile}"
               data-separator="^\\n---\\n"
               data-separator-vertical="^\\n--\\n"
               data-separator-notes="^Note:"
               data-charset="utf-8">
      </section>
    </div>
  </div>

  <script src="https://cdnjs.cloudflare.com/ajax/libs/reveal.js/4.3.1/reveal.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/reveal.js/4.3.1/plugin/markdown/markdown.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/reveal.js/4.3.1/plugin/highlight/highlight.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/reveal.js/4.3.1/plugin/zoom/zoom.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/reveal.js/4.3.1/plugin/notes/notes.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/reveal.js/4.3.1/plugin/math/math.min.js"></script>
  
  <script>
    Reveal.initialize({
      width: 960,
      height: 700,
      margin: 0.1,
      hash: true,
      transition: 'convex',
      slideNumber: 'print',
      plugins: [ RevealMarkdown, RevealHighlight, RevealNotes, RevealZoom, RevealMath.KaTeX ]
    });
  </script>
  
  <div style="position: fixed; bottom: 10px; left: 10px; z-index: 100; font-size: 0.8em;">
    <a href="../../" style="text-decoration: none; color: #3498db;">
      <i class="fas fa-home"></i> Volver al índice
    </a>
  </div>
</body>
</html>`;

// Create main index for the workshop (optional, or maybe we just rely on the main repo index)
// The plan said: "Taller-Herramientas-2026/index.html - Main presentation file".
// I'll create a main index.html for the workshop folder that links to the sessions.

const workshopIndexHtml = `<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Taller de Herramientas 2026</title>
    <link rel="stylesheet" href="../assets/css/styles.css">
    <style>
        body { font-family: 'Inter', sans-serif; background-color: #f5f5f5; padding: 20px; }
        .container { max-width: 800px; margin: 0 auto; }
        .session-card { background: white; padding: 20px; margin-bottom: 15px; border-radius: 8px; box-shadow: 0 2px 5px rgba(0,0,0,0.1); }
        .session-card h3 { margin-top: 0; }
        a { text-decoration: none; color: #333; }
        a:hover { color: #007bff; }
    </style>
</head>
<body>
    <div class="container">
        <h1>Taller de Herramientas y Gestión de Entornos Digitales 2026</h1>
        <div class="sessions">
            ${sessions.map(s => `
            <div class="session-card">
                <h3><a href="./${s.name}/index.html">${s.title}</a></h3>
                <a href="./${s.name}/index.html">Ver Presentación →</a>
            </div>`).join('\n')}
        </div>
        <p><a href="../">← Volver al inicio</a></p>
    </div>
</body>
</html>`;

fs.writeFileSync(path.join(workshopDir, 'index.html'), workshopIndexHtml);
console.log('Created workshop index.html');

sessions.forEach(session => {
    const sessionDir = path.join(workshopDir, session.name);
    if (!fs.existsSync(sessionDir)) {
        fs.mkdirSync(sessionDir);
    }
    
    // Create index.html
    const htmlContent = getHtmlTemplate(session.title, 'slides.md');
    fs.writeFileSync(path.join(sessionDir, 'index.html'), htmlContent);
    
    // Create slides.md
    const mdContent = `# ${session.title}

## Taller de Herramientas 2026

---

## Temario

1. Punto 1
2. Punto 2
3. Punto 3

---

## Gracias
`;
    fs.writeFileSync(path.join(sessionDir, 'slides.md'), mdContent);
    
    console.log(`Created session: ${session.name}`);
});

console.log('Scaffolding complete.');
