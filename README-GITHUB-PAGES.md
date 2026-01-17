# GitHub Pages - Configuración

Este repositorio está configurado para funcionar automáticamente con GitHub Pages.

## 🚀 Opción 1: GitHub Actions (Recomendado)

El workflow de GitHub Actions se ejecuta automáticamente cuando:
- Haces push a `main` o `master`
- Cambias archivos `presentation.json`
- Cambias el script `generate-index.js`

**Ventajas:**
- ✅ El `index.html` se genera automáticamente
- ✅ No necesitas ejecutar nada manualmente
- ✅ Funciona perfectamente con GitHub Pages

**Cómo funciona:**
1. Creas una nueva carpeta con `presentation.json`
2. Haces commit y push
3. GitHub Actions ejecuta el script automáticamente
4. El `index.html` se actualiza y se hace commit automático
5. GitHub Pages sirve el sitio actualizado

## 🔧 Opción 2: Generación Manual

Si prefieres generar el `index.html` manualmente antes de hacer push:

```bash
npm install  # Solo la primera vez
npm run generate
git add index.html
git commit -m "Actualizar índice de presentaciones"
git push
```

## 📋 Requisitos para GitHub Pages

1. **Habilitar GitHub Pages** en tu repositorio:
   - Ve a Settings → Pages
   - Selecciona la rama `main` o `master`
   - Selecciona la carpeta `/ (root)`

2. **Archivos necesarios** ya están incluidos:
   - `package.json` - Configuración de dependencias
   - `.github/workflows/generate-index.yml` - Workflow automatizado
   - `package-lock.json` - Se genera automáticamente si no existe

3. **No necesitas instalar nada** - GitHub Actions usa Node.js automáticamente

## 🔍 Verificación

Después de hacer push, puedes verificar:
- En la pestaña "Actions" de tu repositorio verás el workflow ejecutándose
- Si hay cambios, se hará un commit automático
- El sitio se actualizará en unos minutos

## 🔧 Solución de Problemas

### Error: "Dependencies lock file is not found"

**Síntomas:** GitHub Actions falla con el mensaje "Dependencies lock file is not found in /home/runner/work/... Supported file patterns: package-lock.json,npm-shrinkwrap.json,yarn.lock"

**Solución:**
1. El workflow ahora usa `npm install` que puede funcionar sin package-lock.json
2. Si el error persiste, el workflow generará automáticamente el package-lock.json correcto
3. Asegúrate de que `package-lock.json` no esté en `.gitignore` (ya está configurado)

### Error: "Permission denied" o acceso denegado

**Síntomas:** El workflow no puede hacer commit o push

**Solución:**
- Verifica que el workflow tenga los permisos correctos (contents: write)
- Si usas ramas protegidas, configura las reglas para permitir que GitHub Actions haga push

## ⚠️ Notas Importantes

- El script necesita acceso de escritura al repositorio (permissions en el workflow)
- Si usas ramas protegidas, necesitarás ajustar los permisos
- El commit automático aparecerá como "GitHub Action"
- El workflow generará automáticamente `package-lock.json` si no existe

## 🎯 Flujo de Trabajo Recomendado

1. Crear nueva carpeta de presentación
2. Agregar `presentation.json` con los metadatos
3. Agregar archivos (PDF, index.html, etc.)
4. Hacer commit y push:
   ```bash
   git add nueva_presentacion/
   git commit -m "Agregar nueva presentación"
   git push
   ```
5. GitHub Actions generará el `index.html` automáticamente
6. El sitio se actualizará en GitHub Pages

