import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

const apps = [
  {
    name: 'Caixa de Sugestões',
    srcDir: path.join(rootDir, 'apps', 'sugestoes'),
    destDir: path.join(rootDir, 'sugestoes')
  },
  {
    name: 'Cronograma Semeadores',
    srcDir: path.join(rootDir, 'apps', 'cronograma'),
    destDir: path.join(rootDir, 'cronograma')
  },
  {
    name: 'Hinario Digital',
    srcDir: path.join(rootDir, 'apps', 'hinario'),
    destDir: path.join(rootDir, 'hinario')
  }
];

console.log('🌱 Iniciando compilação e unificação das ferramentas Semeadores...\n');

for (const app of apps) {
  console.log(`📦 [${app.name}] Compilando...`);
  try {
    const isWindows = process.platform === 'win32';
    const npmCmd = isWindows ? 'npm.cmd' : 'npm';
    execSync(`${npmCmd} run build`, {
      cwd: app.srcDir,
      stdio: 'inherit'
    });

    const distPath = path.join(app.srcDir, 'dist');
    if (fs.existsSync(distPath)) {
      console.log(`🚚 [${app.name}] Sincronizando para ${path.relative(rootDir, app.destDir)}...`);
      if (fs.existsSync(app.destDir)) {
        fs.rmSync(app.destDir, { recursive: true, force: true });
      }
      fs.mkdirSync(app.destDir, { recursive: true });
      fs.cpSync(distPath, app.destDir, { recursive: true });
      // Remove a pasta dist interna temporária para evitar duplicação em disco
      fs.rmSync(distPath, { recursive: true, force: true });
    }
    console.log(`✅ [${app.name}] Concluído com sucesso!\n`);
  } catch (error) {
    console.error(`❌ [${app.name}] Erro na compilação:`, error.message);
    process.exit(1);
  }
}

console.log('✨ Todas as ferramentas Semeadores foram unificadas e compiladas com sucesso!');
console.log('🚀 Execute "npm run dev" para abrir o portal completo.');
