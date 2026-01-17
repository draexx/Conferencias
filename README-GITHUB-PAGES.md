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

2. **El workflow de GitHub Actions** ya está configurado en `.github/workflows/generate-index.yml`

3. **No necesitas instalar nada** - GitHub Actions usa Node.js automáticamente

## 🔍 Verificación

Después de hacer push, puedes verificar:
- En la pestaña "Actions" de tu repositorio verás el workflow ejecutándose
- Si hay cambios, se hará un commit automático
- El sitio se actualizará en unos minutos

## ⚠️ Notas Importantes

- El script necesita acceso de escritura al repositorio (permissions en el workflow)
- Si usas ramas protegidas, necesitarás ajustar los permisos
- El commit automático aparecerá como "GitHub Action"

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

