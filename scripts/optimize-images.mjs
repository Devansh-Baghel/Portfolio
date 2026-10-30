import { readFile, stat } from 'node:fs/promises';
import sharp from 'sharp';

const gallery = process.argv[2] === 'gallery';

const targets = gallery
  ? [
      ...Array.from({ length: 8 }, (_, i) => ({
        src: `public/projects/codestash/c${i + 2}.png`,
        out: `public/projects/codestash/c${i + 2}.webp`,
        width: null,
        quality: 74,
      })),
      ...Array.from({ length: 10 }, (_, i) => ({
        src: `public/projects/spendsync/s${i + 2}.png`,
        out: `public/projects/spendsync/s${i + 2}.webp`,
        width: null,
        quality: 74,
      })),
    ]
  : [
      {
        src: 'public/image224.webp',
        out: 'public/image224.webp',
        width: 900,
        quality: 70,
      },
      {
        src: 'public/backgrounds/Grad_03.png',
        out: 'public/backgrounds/Grad_03.webp',
        width: 900,
        quality: 70,
      },
      {
        src: 'public/backgrounds/Grad_17.png',
        out: 'public/backgrounds/Grad_17.webp',
        width: 1000,
        quality: 70,
      },
      {
        src: 'public/projects/codestash/c1.png',
        out: 'public/projects/codestash/c1.webp',
        width: null,
        quality: 74,
      },
      {
        src: 'public/projects/spendsync/s1.png',
        out: 'public/projects/spendsync/s1.webp',
        width: null,
        quality: 74,
      },
      {
        src: 'public/og-image.png',
        out: 'public/og-image.png',
        width: 1200,
        pngPalette: true,
      },
    ];

const fmt = (n) => `${(n / 1024).toFixed(0)} KiB`;

for (const t of targets) {
  const before = (await stat(t.src)).size;
  const input = await readFile(t.src);
  let pipeline = sharp(input);
  if (t.width) pipeline = pipeline.resize({ width: t.width });
  let output;
  if (t.pngPalette) {
    output = await pipeline
      .png({ palette: true, quality: 80, compressionLevel: 9 })
      .toBuffer();
  } else {
    output = await pipeline.webp({ quality: t.quality }).toBuffer();
  }
  const meta = await sharp(output).metadata();
  await import('node:fs/promises').then((fs) => fs.writeFile(t.out, output));
  console.log(
    `${t.src} -> ${t.out}  ${fmt(before)} -> ${fmt(output.length)}  (${meta.width}x${meta.height})`,
  );
}
