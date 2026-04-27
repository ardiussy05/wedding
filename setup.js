const fs = require('fs');
const path = require('path');

const baseDir = 'c:\\laragon\\www\\wedding';
const dirs = [
    'css',
    'js',
    'assets\\images',
    'assets\\music',
    'assets\\sounds'
];

console.log('Creating folder structure...\n');

dirs.forEach(dir => {
    const fullPath = path.join(baseDir, dir);
    try {
        if (!fs.existsSync(fullPath)) {
            fs.mkdirSync(fullPath, { recursive: true });
            console.log('✓ Created: ' + dir);
        } else {
            console.log('✓ Exists: ' + dir);
        }
    } catch (err) {
        console.log('✗ Failed to create: ' + dir);
        console.log('  Error: ' + err.message);
    }
});

console.log('\nVerifying folder structure:\n');

dirs.forEach(dir => {
    const fullPath = path.join(baseDir, dir);
    if (fs.existsSync(fullPath)) {
        console.log('✓ ' + dir);
    } else {
        console.log('✗ ' + dir + ' (MISSING)');
    }
});
