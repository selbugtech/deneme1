#!/usr/bin/env node
/**
 * projects-gallery.json'a her görselin `width`/`height` değerini ekler.
 * Proje galerisindeki <img> etiketleri bu boyutları kullanır → yüklenen görseller
 * yerleşimi kaydırmaz (CLS). build-images.mjs yeniden çalıştırıldığında bu betik de
 * tekrar çalıştırılmalı (manifest yeniden yazılır).
 *
 *   node scripts/add-gallery-dims.mjs
 */
import { promises as fs } from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';

const ROOT = process.cwd();
const MANIFEST = path.join(ROOT, 'src/data/projects-gallery.json');
const data = JSON.parse(await fs.readFile(MANIFEST, 'utf8'));

let done = 0;
for (const project of Object.values(data)) {
  for (const f of project.files) {
    if (f.width && f.height) continue;
    const file = path.join(ROOT, 'public', f.src);
    const { width, height } = await sharp(file).metadata();
    f.width = width;
    f.height = height;
    done++;
  }
}
await fs.writeFile(MANIFEST, JSON.stringify(data, null, 2) + '\n');
console.log(`${done} görsele boyut eklendi.`);
