import { spawn } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';

const rootDir = dirname(fileURLToPath(import.meta.url));
const projectRoot = resolve(rootDir, '..');
const processes = [];

function startProcess(name, command, args) {
  const child = spawn(command, args, {
    cwd: projectRoot,
    stdio: ['ignore', 'pipe', 'pipe'],
  });

  child.stdout.on('data', (chunk) => {
    process.stdout.write(`[${name}] ${chunk}`);
  });

  child.stderr.on('data', (chunk) => {
    process.stderr.write(`[${name}] ${chunk}`);
  });

  child.on('exit', (code, signal) => {
    if (code === 0 || signal) {
      return;
    }

    console.error(`[${name}] exited with code ${code}`);
    shutdown(code ?? 1);
  });

  processes.push(child);
}

function shutdown(code = 0) {
  for (const child of processes) {
    if (!child.killed) {
      child.kill();
    }
  }

  process.exit(code);
}

process.on('SIGINT', () => shutdown(0));
process.on('SIGTERM', () => shutdown(0));

startProcess('vite', process.execPath, [resolve(projectRoot, 'node_modules', 'vite', 'bin', 'vite.js')]);
startProcess('api', process.execPath, [resolve(projectRoot, 'server.js')]);