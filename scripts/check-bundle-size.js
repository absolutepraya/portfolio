import { readdirSync, statSync } from 'node:fs';
import { join } from 'node:path';

const ASSETS_DIRECTORY = join(import.meta.dirname, '..', 'dist', 'assets');
const MAX_MAIN_JAVASCRIPT_BYTES = 1_400_000;
const assets = readdirSync(ASSETS_DIRECTORY)
  .filter((file) => file.startsWith('index-') && file.endsWith('.js'))
  .map((file) => ({
    file,
    bytes: statSync(join(ASSETS_DIRECTORY, file)).size,
  }));

if (assets.length !== 1) {
  throw new Error(
    `Expected exactly one main JavaScript bundle, found ${assets.length}.`,
  );
}

const [{ file, bytes }] = assets;
console.log(
  `Main JavaScript bundle: ${file} (${bytes} bytes, limit ${MAX_MAIN_JAVASCRIPT_BYTES})`,
);
if (bytes > MAX_MAIN_JAVASCRIPT_BYTES) process.exitCode = 1;
