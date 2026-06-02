// Build script: convert all project images under public/images/<folder>/
// into responsive WebP variants under public/img/<slug>/ and emit
// src/data/projects-gallery.json mapping slugs to ordered file lists.
//
// Sorting uses Windows Explorer "Sort by Name" semantics (see sort-windows.mjs).
// First file in a folder is treated as the cover.
//
// Usage:
//   node scripts/build-images.mjs              # full convert
//   node scripts/build-images.mjs --dry-run    # only print sort order, no I/O
//   node scripts/build-images.mjs --force      # reconvert even if outputs exist

import { promises as fs } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';
import heicConvert from 'heic-convert';
import { windowsSort } from './sort-windows.mjs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT = path.resolve(__dirname, '..');
const SRC_DIR = path.join(ROOT, 'public', 'images');
const OUT_DIR = path.join(ROOT, 'public', 'img');
const MANIFEST = path.join(ROOT, 'src', 'data', 'projects-gallery.json');

const WIDTHS = [800, 1600, 2000];
const QUALITY = 82;

// Folders to skip (not project galleries).
const SKIP_FOLDERS = new Set(['beforeafter']);

// Explicit folder→slug overrides (otherwise auto-slugified).
const SLUG_OVERRIDES = {
  'Artaş Ofis': 'artas-ofis',
  'artasOfis 2': 'artas-ofis-2',
  'ataköy daire': 'atakoy',
  'beykoz pasabahce villa': 'beykoz-pasabahce',
  'beykoz villa': 'beykoz-villa',
  'beylikdüzü villa': 'beylikduzu-villa',
  'beyoglu galata daire': 'beyoglu-galata',
  'caddebostan daire': 'caddebostan',
  'cafe': 'cafe',
  'hilton otel': 'hilton-otel',
  'kadiköy moda': 'kadikoy-moda',
  'karışık projeler': 'karisik-projeler',
  'kozyatağı banyo': 'kozyatagi-banyo',
  'maltepe daire': 'maltepe',
  'mecidiyeköy dublex': 'mecidiyekoy-dublex',
  'nurol park daire': 'nurol-park',
  'ofis': 'ofis',
  'selimpaşa villa': 'selimpasa-villa',
  'tepekent villa': 'tepekent',
  'zeytinburnu daire': 'zeytinburnu',
};

const args = new Set(process.argv.slice(2));
const DRY_RUN = args.has('--dry-run');
const FORCE = args.has('--force');

const TR_MAP = { ç: 'c', ğ: 'g', ı: 'i', ö: 'o', ş: 's', ü: 'u', İ: 'i', Ç: 'c', Ğ: 'g', Ö: 'o', Ş: 's', Ü: 'u' };

function slugify(s) {
  return s
    .split('')
    .map((c) => TR_MAP[c] ?? c)
    .join('')
    .toLowerCase()
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

function safeBase(name) {
  // sanitize for output filename
  return slugify(name.replace(/\.[^.]+$/, '')) || 'img';
}

async function readBuffer(filePath) {
  const ext = path.extname(filePath).toLowerCase();
  if (ext === '.heic' || ext === '.heif') {
    const inputBuffer = await fs.readFile(filePath);
    const jpegBuffer = await heicConvert({ buffer: inputBuffer, format: 'JPEG', quality: 0.95 });
    return Buffer.from(jpegBuffer);
  }
  return fs.readFile(filePath);
}

async function fileExists(p) {
  try { await fs.access(p); return true; } catch { return false; }
}

async function convertOne(srcPath, outDir, baseName, idxStr) {
  const buffer = await readBuffer(srcPath);
  const base = sharp(buffer, { failOn: 'none' }).rotate(); // honor EXIF orientation

  const variants = [];
  for (const w of WIDTHS) {
    const isLargest = w === Math.max(...WIDTHS);
    const outName = isLargest
      ? `${idxStr}-${baseName}.webp`
      : `${idxStr}-${baseName}-${w}w.webp`;
    const outPath = path.join(outDir, outName);
    if (!FORCE && (await fileExists(outPath))) {
      variants.push({ width: w, name: outName });
      continue;
    }
    await base
      .clone()
      .resize({ width: w, withoutEnlargement: true })
      .webp({ quality: QUALITY, effort: 6, smartSubsample: true })
      .toFile(outPath);
    variants.push({ width: w, name: outName });
  }
  return variants;
}

async function processFolder(folder) {
  const folderPath = path.join(SRC_DIR, folder);
  const stat = await fs.stat(folderPath).catch(() => null);
  if (!stat?.isDirectory()) return null;
  if (SKIP_FOLDERS.has(folder)) return null;

  const entries = await fs.readdir(folderPath);
  const images = entries.filter((f) => /\.(heic|heif|jpe?g|png)$/i.test(f));
  const sorted = windowsSort(images);

  const slug = SLUG_OVERRIDES[folder] ?? slugify(folder);

  if (DRY_RUN) {
    console.log(`\n[${slug}] ← ${folder}`);
    sorted.forEach((f, i) => console.log(`  ${String(i + 1).padStart(2, '0')}. ${f}`));
    return { slug, folder, files: [] };
  }

  const outDir = path.join(OUT_DIR, slug);
  await fs.mkdir(outDir, { recursive: true });

  const files = [];
  for (let i = 0; i < sorted.length; i++) {
    const idxStr = String(i + 1).padStart(2, '0');
    const src = path.join(folderPath, sorted[i]);
    const baseName = safeBase(sorted[i]);
    try {
      const variants = await convertOne(src, outDir, baseName, idxStr);
      const sortedV = variants.sort((a, b) => a.width - b.width);
      const largest = sortedV[sortedV.length - 1];
      const srcUrl = `/img/${slug}/${largest.name}`;
      const srcset = sortedV.map((v) => `/img/${slug}/${v.name} ${v.width}w`).join(', ');
      files.push({ src: srcUrl, srcset, original: sorted[i] });
    } catch (err) {
      console.warn(`  ! Skipped ${sorted[i]}: ${err.message}`);
    }
  }
  console.log(`[${slug}] ${files.length}/${sorted.length} files → public/img/${slug}/`);
  return { slug, folder, files };
}

async function main() {
  if (!DRY_RUN) {
    await fs.mkdir(OUT_DIR, { recursive: true });
    await fs.mkdir(path.dirname(MANIFEST), { recursive: true });
  }
  const folders = (await fs.readdir(SRC_DIR, { withFileTypes: true }))
    .filter((d) => d.isDirectory())
    .map((d) => d.name);

  const manifest = {};
  for (const folder of folders) {
    const result = await processFolder(folder);
    if (result && result.files.length > 0) {
      manifest[result.slug] = { folder: result.folder, files: result.files };
    } else if (result && DRY_RUN) {
      manifest[result.slug] = { folder: result.folder, files: [] };
    }
  }

  if (!DRY_RUN) {
    await fs.writeFile(MANIFEST, JSON.stringify(manifest, null, 2) + '\n', 'utf8');
    console.log(`\nManifest → ${path.relative(ROOT, MANIFEST)}`);
    console.log(`Slugs: ${Object.keys(manifest).join(', ')}`);
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
