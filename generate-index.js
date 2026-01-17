#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

/**
 * Genera el index.html automáticamente escaneando las carpetas de presentaciones
 */

// Directorios a ignorar
const IGNORE_DIRS = ['utils', 'node_modules', '.git'];

// Función para leer el archivo presentation.json de una carpeta
function getPresentationConfig(folderPath) {
    const configPath = path.join(folderPath, 'presentation.json');
    
    if (fs.existsSync(configPath)) {
        try {
            const config = JSON.parse(fs.readFileSync(configPath, 'utf8'));
            return config;
        } catch (error) {
            console.warn(`Error leyendo ${configPath}:`, error.message);
            return null;
        }
    }
    
    return null;
}

// Función para buscar archivos PDF e index.html en una carpeta
function findPresentationFiles(folderPath) {
    const files = fs.readdirSync(folderPath);
    const pdfFiles = files.filter(f => f.endsWith('.pdf'));
    const hasIndex = files.includes('index.html');
    
    return {
        pdf: pdfFiles.length > 0 ? pdfFiles[0] : null,
        hasIndex: hasIndex
    };
}

// Función para escanear carpetas de presentaciones
function scanPresentations() {
    const rootDir = __dirname;
    const presentations = [];
    
    const items = fs.readdirSync(rootDir, { withFileTypes: true });
    
    for (const item of items) {
        if (item.isDirectory() && !IGNORE_DIRS.includes(item.name)) {
            const folderPath = path.join(rootDir, item.name);
            const config = getPresentationConfig(folderPath);
            const files = findPresentationFiles(folderPath);
            
            if (config || files.pdf || files.hasIndex) {
                presentations.push({
                    folder: item.name,
                    config: config,
                    files: files
                });
            }
        }
    }
    
    // Ordenar por fecha (más reciente primero)
    presentations.sort((a, b) => {
        const dateA = a.config?.date || '';
        const dateB = b.config?.date || '';
        return dateB.localeCompare(dateA);
    });
    
    return presentations;
}

// Función para generar el HTML de una tarjeta de presentación
function generatePresentationCard(presentation) {
    const { folder, config, files } = presentation;
    
    // Valores por defecto
    const title = config?.title || folder;
    const date = config?.date || '';
    const tags = config?.tags || [];
    const description = config?.description || '';
    const pdfFile = config?.pdf || files.pdf;
    
    // Generar tags HTML
    const tagsHTML = tags.map(tag => 
        `                    <span class="tag">${escapeHtml(tag)}</span>`
    ).join('\n');
    
    // Determinar enlaces
    const viewLink = files.hasIndex 
        ? `./${folder}/index.html` 
        : (pdfFile ? `./${folder}/${pdfFile}` : '#');
    
    const downloadLink = pdfFile 
        ? `./${folder}/${pdfFile}` 
        : '#';
    
    return `            <!-- Presentación: ${escapeHtml(title)} -->
            <div class="presentation-card">
                <h3>${files.hasIndex ? `<a href="${viewLink}">${escapeHtml(title)}</a>` : escapeHtml(title)}</h3>
                ${date ? `<div class="date">${escapeHtml(date)}</div>` : ''}
                ${tags.length > 0 ? `<div class="tags">
${tagsHTML}
                </div>` : ''}
                ${description ? `<p>${escapeHtml(description)}</p>` : ''}
                <div class="links">
                    ${files.hasIndex || pdfFile ? `<a href="${viewLink}">Ver presentación →</a>` : ''}
                    ${pdfFile ? `<a href="${downloadLink}" download="${pdfFile}">Descargar PDF</a>` : ''}
                </div>
            </div>`;
}

// Función para escapar HTML
function escapeHtml(text) {
    const map = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#039;'
    };
    return text.replace(/[&<>"']/g, m => map[m]);
}

// Función para leer el index.html actual y reemplazar la sección de presentaciones
function updateIndexHTML(presentations) {
    const indexPath = path.join(__dirname, 'index.html');
    let indexContent = fs.readFileSync(indexPath, 'utf8');
    
    // Generar HTML de las tarjetas
    const cardsHTML = presentations.map(p => generatePresentationCard(p)).join('\n\n');
    
    // Buscar y reemplazar la sección de presentaciones usando regex
    // Busca desde <div class="presentations"> hasta </div> que viene antes de <footer>
    const regex = /(<div class="presentations">)[\s\S]*?(<\/div>)(?=\s*<footer>)/;

    if (regex.test(indexContent)) {
        indexContent = indexContent.replace(regex, `$1\n${cardsHTML}\n        </div>`);

        fs.writeFileSync(indexPath, indexContent, 'utf8');
        console.log('✅ index.html actualizado exitosamente');
        console.log(`📊 ${presentations.length} presentaciones encontradas`);
    } else {
        // Fallback: buscar manualmente
        const startMarker = '        <div class="presentations">';
        const endMarker = '        </div>';
        const mainEndMarker = '    </main>';
        
        const startIndex = indexContent.indexOf(startMarker);
        let endIndex = indexContent.indexOf(mainEndMarker);
        
        if (startIndex !== -1 && endIndex !== -1) {
            // Buscar el cierre correcto de presentations (el que está antes de </main>)
            const sectionContent = indexContent.substring(startIndex, endIndex);
            const lastDivIndex = sectionContent.lastIndexOf(endMarker);
            
            if (lastDivIndex !== -1) {
                const before = indexContent.substring(0, startIndex + startMarker.length);
                const after = indexContent.substring(startIndex + startMarker.length + lastDivIndex + endMarker.length);
                
                indexContent = before + '\n' + cardsHTML + '\n' + after;
                
                fs.writeFileSync(indexPath, indexContent, 'utf8');
                console.log('✅ index.html actualizado exitosamente');
                console.log(`📊 ${presentations.length} presentaciones encontradas`);
            } else {
                console.error('❌ No se encontró el cierre de la sección de presentaciones');
                process.exit(1);
            }
        } else {
            console.error('❌ No se encontró la sección de presentaciones en index.html');
            process.exit(1);
        }
    }
}

// Función principal
function main() {
    console.log('🔍 Escaneando carpetas de presentaciones...\n');
    
    const presentations = scanPresentations();
    
    if (presentations.length === 0) {
        console.log('⚠️  No se encontraron presentaciones');
        return;
    }
    
    console.log('📁 Presentaciones encontradas:');
    presentations.forEach(p => {
        console.log(`   - ${p.folder}${p.config ? ' (con config)' : ' (sin config)'}`);
    });
    console.log('');
    
    updateIndexHTML(presentations);
}

// Ejecutar
main();

