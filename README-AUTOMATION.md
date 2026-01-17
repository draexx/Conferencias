# Sistema de Automatización de Presentaciones

Este sistema genera automáticamente las tarjetas de presentación en el `index.html` principal.

## 📋 Cómo funciona

1. **Estructura de carpetas**: Cada presentación debe estar en su propia carpeta
2. **Archivo de configuración**: Cada carpeta debe tener un archivo `presentation.json` con los metadatos
3. **Script de generación**: Ejecuta el script para actualizar el `index.html`

## 📁 Estructura de una carpeta de presentación

```
mi_presentacion/
├── presentation.json    # Archivo de configuración (requerido)
├── index.html          # Opcional: si existe, se usará como enlace "Ver presentación"
├── mi_presentacion.pdf # Archivo PDF (opcional si hay index.html)
└── ... otros archivos
```

## 📝 Formato de presentation.json

```json
{
  "title": "Título de la Presentación",
  "date": "Enero 2024",
  "tags": ["Tag1", "Tag2", "Tag3"],
  "description": "Descripción de la presentación que aparecerá en la tarjeta.",
  "pdf": "nombre_del_archivo.pdf"
}
```

### Campos del JSON:

- **title** (requerido): Título de la presentación
- **date** (opcional): Fecha de la presentación
- **tags** (opcional): Array de etiquetas
- **description** (opcional): Descripción de la presentación
- **pdf** (opcional): Nombre del archivo PDF (si no se especifica, se buscará automáticamente)

## 🚀 Uso

### Instalación (solo la primera vez)

```bash
npm install
```

### Generar el index.html

```bash
npm run generate
```

O directamente:

```bash
node generate-index.js
```

### Modo watch (desarrollo)

Para regenerar automáticamente cuando cambies archivos:

```bash
npm run watch
```

## 📦 Ejemplo completo

1. **Crear una nueva carpeta**:
   ```bash
   mkdir mi_nueva_presentacion
   ```

2. **Crear el archivo `presentation.json`**:
   ```json
   {
     "title": "Mi Nueva Presentación",
     "date": "Enero 2025",
     "tags": ["JavaScript", "Web"],
     "description": "Una presentación sobre JavaScript moderno.",
     "pdf": "mi_presentacion.pdf"
   }
   ```

3. **Agregar los archivos**:
   - `mi_presentacion.pdf` (o `index.html` si es una presentación web)

4. **Ejecutar el script**:
   ```bash
   npm run generate
   ```

¡Listo! La nueva presentación aparecerá automáticamente en el `index.html`.

## 🔍 Detección automática

El script detecta automáticamente:
- Archivos PDF en la carpeta
- Archivos `index.html` (para presentaciones web)
- Archivos `presentation.json` (para metadatos)

Si no hay `presentation.json`, el script intentará usar los archivos encontrados, pero es recomendable crear el archivo de configuración.

## 📝 Notas

- Las presentaciones se ordenan por fecha (más recientes primero)
- Las carpetas en `IGNORE_DIRS` (utils, node_modules, .git) se ignoran
- El script preserva todo el contenido del `index.html` excepto la sección de presentaciones

