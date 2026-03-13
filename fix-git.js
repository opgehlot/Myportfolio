const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const bDir = path.join(__dirname, 'portfolio');
try {
  // Find out what git thinks the file is called
  const files = execSync('git ls-files src/data', { cwd: bDir }).toString().split('\n');
  console.log('Git files in src/data:', files);

  let gitFile = files.find(f => f.toLowerCase().includes('projects.js'));
  if (gitFile) {
    console.log('Found in git:', gitFile);
    execSync(`git mv "${gitFile}" "src/data/projectsData.js"`, { cwd: bDir });
    console.log('Renamed in git to projectsData.js');
  } else {
    // If not in git at all!
    console.log('projects.js not found in git!');
    fs.renameSync(path.join(bDir, 'src/data/projects.js'), path.join(bDir, 'src/data/projectsData.js'));
    execSync(`git add src/data/projectsData.js`, { cwd: bDir });
  }
} catch (e) {
  console.error(e.message);
  console.error(e.stdout ? e.stdout.toString() : '');
}
