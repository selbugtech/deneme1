#!/usr/bin/env node
/**
 * src/data/redirects.ts → vercel.json
 *
 * Yönlendirmeler Vercel platform katmanında duruyor: `.html` uzantılı eski URL'lerde
 * Astro'nun route ayrıştırıcısına bağımlı değil ve bu sitede zaten kanıtlanmış.
 * Ama 288 girişlik bir listeyi yorumsuz JSON içinde tutmak bakımsız hale getirir —
 * bu yüzden kaynak TypeScript modülü, vercel.json ondan üretiliyor.
 *
 * Kullanım: npm run redirects:sync
 */
import { promises as fs } from 'node:fs';

const SRC = 'src/data/redirects.ts';
const OUT = 'vercel.json';

// redirects.ts'i ayrıştır — tek bağımlılıksız okuma için basit satır eşleşmesi yeterli.
const raw = await fs.readFile(SRC, 'utf8');
const map = new Map();
for (const line of raw.split(/\r?\n/)) {
  const m = line.match(/^\s*'([^']+)':\s*'([^']+)',\s*$/);
  if (m) map.set(m[1], m[2]);
}
if (map.size === 0) {
  console.error(`✖ ${SRC} içinde yönlendirme bulunamadı — sync iptal.`);
  process.exit(1);
}

const vercel = JSON.parse(await fs.readFile(OUT, 'utf8'));
const before = vercel.redirects?.length ?? 0;
vercel.redirects = [...map].map(([source, destination]) => ({ source, destination, permanent: true }));
await fs.writeFile(OUT, JSON.stringify(vercel, null, 2) + '\n');

console.log(`✓ ${OUT}: ${before} → ${vercel.redirects.length} yönlendirme`);
