import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const createDirs = () => {
  const publicDir = path.join(process.cwd(), 'public');
  const imagesDir = path.join(publicDir, 'images');
  const projectsDir = path.join(imagesDir, 'projects');

  if (!fs.existsSync(publicDir)) fs.mkdirSync(publicDir);
  if (!fs.existsSync(imagesDir)) fs.mkdirSync(imagesDir);
  if (!fs.existsSync(projectsDir)) fs.mkdirSync(projectsDir);
};

createDirs();

// 1. Profile photo placeholder (Portrait 3:4 ratio - 600x800)
const profileSvg = `
<svg width="600" height="800" viewBox="0 0 600 800" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#151515" />
      <stop offset="50%" stop-color="#0e0e0e" />
      <stop offset="100%" stop-color="#080808" />
    </linearGradient>
    <linearGradient id="accentGlow" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#c1121f" stop-opacity="0.8" />
      <stop offset="100%" stop-color="#ef233c" stop-opacity="0.2" />
    </linearGradient>
    <radialGradient id="avatarGlow" cx="50%" cy="40%" r="50%">
      <stop offset="0%" stop-color="#c1121f" stop-opacity="0.25" />
      <stop offset="100%" stop-color="#080808" stop-opacity="0" />
    </radialGradient>
  </defs>

  <!-- Background -->
  <rect width="600" height="800" fill="url(#bgGrad)" />
  <circle cx="300" cy="320" r="220" fill="url(#avatarGlow)" />

  <!-- Code Pattern Lines -->
  <path d="M 50 100 L 550 100" stroke="#2b2b2b" stroke-width="1" stroke-dasharray="4 4"/>
  <path d="M 50 700 L 550 700" stroke="#2b2b2b" stroke-width="1" stroke-dasharray="4 4"/>
  
  <!-- Stylized Developer Silhouette Avatar -->
  <g transform="translate(170, 180)">
    <!-- Outer Glow Circle Ring -->
    <circle cx="130" cy="130" r="125" fill="none" stroke="#c1121f" stroke-width="3" stroke-dasharray="8 6"/>
    <circle cx="130" cy="130" r="110" fill="#1b1b1b" stroke="#2b2b2b" stroke-width="2"/>
    
    <!-- Face / Head Silhouette -->
    <circle cx="130" cy="100" r="45" fill="#2d2d2d" stroke="#c1121f" stroke-width="1.5"/>
    <path d="M 60 210 Q 130 145 200 210 Z" fill="#2d2d2d" stroke="#c1121f" stroke-width="1.5"/>

    <!-- Code Brackets around head -->
    <text x="30" y="110" font-family="monospace" font-size="32" font-weight="bold" fill="#c1121f">&lt;</text>
    <text x="210" y="110" font-family="monospace" font-size="32" font-weight="bold" fill="#c1121f">/&gt;</text>
  </g>

  <!-- Info Cards Overlay -->
  <rect x="60" y="520" width="480" height="210" rx="16" fill="#151515" stroke="#2b2b2b" stroke-width="2"/>
  <rect x="60" y="520" width="480" height="4" fill="url(#accentGlow)" />

  <text x="90" y="570" font-family="sans-serif" font-size="28" font-weight="800" fill="#ffffff">Dina Muravska</text>
  <text x="90" y="605" font-family="monospace" font-size="18" font-weight="600" fill="#c1121f">Frontend Developer</text>

  <!-- Tech tags -->
  <g transform="translate(90, 630)">
    <rect x="0" y="0" width="85" height="30" rx="6" fill="#212121" stroke="#2b2b2b"/>
    <text x="42.5" y="20" font-family="monospace" font-size="13" fill="#bdbdbd" text-anchor="middle">React</text>

    <rect x="95" y="0" width="95" height="30" rx="6" fill="#212121" stroke="#2b2b2b"/>
    <text x="142.5" y="20" font-family="monospace" font-size="13" fill="#bdbdbd" text-anchor="middle">TypeScript</text>

    <rect x="200" y="0" width="85" height="30" rx="6" fill="#212121" stroke="#2b2b2b"/>
    <text x="242.5" y="20" font-family="monospace" font-size="13" fill="#bdbdbd" text-anchor="middle">Next.js</text>

    <rect x="295" y="0" width="75" height="30" rx="6" fill="#212121" stroke="#2b2b2b"/>
    <text x="332.5" y="20" font-family="monospace" font-size="13" fill="#bdbdbd" text-anchor="middle">SCSS</text>
  </g>

  <text x="90" y="695" font-family="monospace" font-size="13" fill="#828282">● Available for full-time frontend roles</text>
</svg>
`;

// Helper for Project Card SVG (16:9 ratio - 800x450)
const createProjectSvg = (title, category, tags, bgGrad1, bgGrad2) => `
<svg width="800" height="450" viewBox="0 0 800 450" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="${bgGrad1}" />
      <stop offset="100%" stop-color="${bgGrad2}" />
    </linearGradient>
    <linearGradient id="accent" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#c1121f" />
      <stop offset="100%" stop-color="#ef233c" />
    </linearGradient>
  </defs>

  <rect width="800" height="450" fill="url(#bg)"/>
  
  <!-- Subtle Grid lines -->
  <g stroke="#ffffff" stroke-opacity="0.04" stroke-width="1">
    <line x1="0" y1="90" x2="800" y2="90" />
    <line x1="0" y1="180" x2="800" y2="180" />
    <line x1="0" y1="270" x2="800" y2="270" />
    <line x1="0" y1="360" x2="800" y2="360" />
    <line x1="160" y1="0" x2="160" y2="450" />
    <line x1="320" y1="0" x2="320" y2="450" />
    <line x1="480" y1="0" x2="480" y2="450" />
    <line x1="640" y1="0" x2="640" y2="450" />
  </g>

  <!-- Simulated Application Window Container -->
  <rect x="40" y="35" width="720" height="380" rx="12" fill="#121212" stroke="#2b2b2b" stroke-width="2"/>
  
  <!-- Window Header Bar -->
  <path d="M 40 47 Q 40 35 52 35 L 748 35 Q 760 35 760 47 L 760 75 L 40 75 Z" fill="#1a1a1a"/>
  <line x1="40" y1="75" x2="760" y2="75" stroke="#2b2b2b" stroke-width="1"/>

  <!-- Traffic dots -->
  <circle cx="65" cy="55" r="5" fill="#ef233c"/>
  <circle cx="82" cy="55" r="5" fill="#eab308"/>
  <circle cx="99" cy="55" r="5" fill="#22c55e"/>

  <!-- URL Bar mockup -->
  <rect x="130" y="44" width="450" height="22" rx="6" fill="#080808" stroke="#2b2b2b"/>
  <text x="145" y="59" font-family="monospace" font-size="11" fill="#828282">https://${title.toLowerCase()}.dev/preview</text>

  <!-- Accent top line inside window content -->
  <rect x="40" y="75" width="720" height="2" fill="url(#accent)"/>

  <!-- Application Content Preview -->
  <!-- Left Column: Title & Description -->
  <text x="80" y="130" font-family="sans-serif" font-size="32" font-weight="800" fill="#ffffff">${title}</text>
  <rect x="80" y="145" width="120" height="22" rx="11" fill="rgba(193, 18, 31, 0.2)" stroke="#c1121f" stroke-width="1"/>
  <text x="140" y="160" font-family="monospace" font-size="11" font-weight="bold" fill="#ef233c" text-anchor="middle">${category}</text>

  <!-- Simulated UI Components -->
  <g transform="translate(80, 195)">
    <!-- UI Card 1 -->
    <rect x="0" y="0" width="190" height="130" rx="8" fill="#1a1a1a" stroke="#2b2b2b"/>
    <rect x="12" y="15" width="166" height="50" rx="4" fill="#252525"/>
    <rect x="12" y="75" width="100" height="10" rx="3" fill="#ffffff" fill-opacity="0.8"/>
    <rect x="12" y="93" width="140" height="8" rx="3" fill="#828282"/>
    <circle cx="155" cy="100" r="12" fill="#c1121f"/>

    <!-- UI Card 2 -->
    <rect x="210" y="0" width="190" height="130" rx="8" fill="#1a1a1a" stroke="#2b2b2b"/>
    <rect x="222" y="15" width="166" height="50" rx="4" fill="#252525"/>
    <rect x="222" y="75" width="110" height="10" rx="3" fill="#ffffff" fill-opacity="0.8"/>
    <rect x="222" y="93" width="120" height="8" rx="3" fill="#828282"/>
    <circle cx="365" cy="100" r="12" fill="#ef233c"/>

    <!-- UI Card 3 -->
    <rect x="420" y="0" width="180" height="130" rx="8" fill="#1a1a1a" stroke="#2b2b2b"/>
    <rect x="432" y="15" width="156" height="50" rx="4" fill="#252525"/>
    <rect x="432" y="75" width="90" height="10" rx="3" fill="#ffffff" fill-opacity="0.8"/>
    <rect x="432" y="93" width="130" height="8" rx="3" fill="#828282"/>
  </g>

  <!-- Bottom Tech Pills -->
  <g transform="translate(80, 360)">
    ${tags.map((tag, i) => `
      <g transform="translate(${i * 110}, 0)">
        <rect x="0" y="0" width="98" height="26" rx="6" fill="#222222" stroke="#2b2b2b"/>
        <text x="49" y="17" font-family="monospace" font-size="11" fill="#bdbdbd" text-anchor="middle">${tag}</text>
      </g>
    `).join('')}
  </g>
</svg>
`;

async function main() {
  console.log('Generating high-res JPG and WebP placeholders...');

  // Convert Profile SVG to JPG
  await sharp(Buffer.from(profileSvg))
    .jpeg({ quality: 95 })
    .toFile(path.join(process.cwd(), 'public', 'images', 'profile.jpg'));
  console.log('Created public/images/profile.jpg');

  // Project SVG mappings
  const projects = [
    {
      name: 'tasteorama.webp',
      title: 'Tasteorama',
      category: 'FULLSTACK WEB APP',
      tags: ['Next.js', 'React', 'Zustand', 'Node.js', 'SCSS'],
      bg1: '#15080a',
      bg2: '#080808',
    },
    {
      name: 'travel-trucks.webp',
      title: 'Travel-Trucks',
      category: 'CAMPER RENTAL PLATFORM',
      tags: ['React', 'TypeScript', 'Query', 'SCSS'],
      bg1: '#1a0d0e',
      bg2: '#0a0a0a',
    },
    {
      name: 'notehub.webp',
      title: 'NoteHub',
      category: 'PRODUCTIVITY &amp; NOTES APP',
      tags: ['React', 'Next.js', 'TypeScript', 'Axios'],
      bg1: '#12080a',
      bg2: '#080808',
    },
    {
      name: 'coffeevibes.webp',
      title: 'CoffeeVibes',
      category: 'ARTISANAL COFFEE LANDING',
      tags: ['HTML5', 'SCSS', 'JavaScript', 'Responsive'],
      bg1: '#180809',
      bg2: '#080808',
    },
    {
      name: 'artistshub.webp',
      title: 'ArtistsHub',
      category: 'MUSIC DISCOVERY PLATFORM',
      tags: ['JavaScript', 'REST API', 'Swiper', 'SCSS'],
      bg1: '#160809',
      bg2: '#080808',
    },
  ];

  for (const p of projects) {
    const svgStr = createProjectSvg(p.title, p.category, p.tags, p.bg1, p.bg2);
    await sharp(Buffer.from(svgStr))
      .webp({ quality: 90 })
      .toFile(path.join(process.cwd(), 'public', 'images', 'projects', p.name));
    console.log(`Created public/images/projects/${p.name}`);
  }

  console.log('All image placeholders generated successfully!');
}

main().catch((err) => {
  console.error('Error generating images:', err);
  process.exit(1);
});
