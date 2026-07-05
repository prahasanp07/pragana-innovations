const fs = require('fs');
const path = require('path');

const dir = path.join(process.cwd(), 'src', 'components', 'sections');
const files = fs.readdirSync(dir).filter(f => f.endsWith('.tsx'));

for (const file of files) {
  const filePath = path.join(dir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Fix accent
  content = content.replace(/bg-\[#ffcc00\]/g, 'bg-accent');
  content = content.replace(/text-\[#ffcc00\]/g, 'text-accent');
  content = content.replace(/border-\[#ffcc00\]/g, 'border-accent');
  content = content.replace(/stroke-\[#ffcc00\]/g, 'stroke-accent');
  
  // Fix surfaces
  content = content.replace(/bg-\[#050505\]/g, 'bg-surface-1');
  content = content.replace(/bg-\[#0a0a0a\]/g, 'bg-surface-2');
  content = content.replace(/bg-\[#111111\]/g, 'bg-surface-3');
  content = content.replace(/bg-\[#161616\]/g, 'bg-surface-4');
  
  // Fix any remaining [#ffcc00] in arbitrary arbitrary values?
  // Like hover:text-[#ffcc00]
  content = content.replace(/hover:bg-\[#ffcc00\]/g, 'hover:bg-accent');
  content = content.replace(/hover:text-\[#ffcc00\]/g, 'hover:text-accent');
  content = content.replace(/hover:border-\[#ffcc00\]/g, 'hover:border-accent');
  content = content.replace(/focus-within:border-\[#ffcc00\]/g, 'focus-within:border-accent');
  content = content.replace(/focus:border-\[#ffcc00\]/g, 'focus:border-accent');

  // Some borders have opacities, e.g. border-[#ffcc00]/30 -> border-accent/30
  content = content.replace(/border-\[#ffcc00\]\/([0-9]+)/g, 'border-accent/$1');
  
  fs.writeFileSync(filePath, content);
  console.log(`Updated ${file}`);
}
