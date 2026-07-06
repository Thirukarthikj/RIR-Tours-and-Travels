const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, 'src');

function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(function(file) {
    file = path.resolve(dir, file);
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) {
      results = results.concat(walk(file));
    } else {
      results.push(file);
    }
  });
  return results;
}

const files = walk(srcDir);
const toRename = [];
const toModify = [];

files.forEach(file => {
  // Check if filename or path contains fleet (case-insensitive)
  if (file.toLowerCase().includes('fleet')) {
    toRename.push(file);
  }
  
  // Check file contents
  if (file.endsWith('.js') || file.endsWith('.jsx')) {
    const content = fs.readFileSync(file, 'utf8');
    if (content.toLowerCase().includes('fleet')) {
      toModify.push(file);
    }
  }
});

fs.writeFileSync('refactor_plan.json', JSON.stringify({
  renames: toRename,
  modifications: toModify
}, null, 2));

console.log('Dry run complete. Found ' + toRename.length + ' renames and ' + toModify.length + ' modifications.');
