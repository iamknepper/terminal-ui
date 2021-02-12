const fs = require('fs');
const path = require('path');
const SVGO = require('svgo');
const rimraf = require('rimraf');
const { iconsMap } = require('./utils/icons');

console.log('generating icons...');

const cwd = process.cwd();

const DIST_FOLDER = 'dist';
const ASSETS_FOLDER = 'dist/assets';

const svgo = new SVGO({
    removeViewBox: false,
});

const icons = iconsMap();

// Готовим директории
[DIST_FOLDER, ASSETS_FOLDER].forEach((dir) => {
    if (!fs.existsSync(path.join(cwd, dir))) {
        fs.mkdirSync(path.join(cwd, dir));
    } else {
        rimraf.sync(path.join(cwd, dir, '*'));
    }
});

const indexExportsMap = {};
// Собираем иконки
const promises = icons.map(({ componentName }) => {
    // Берем svg-файл
    const svg = fs.readFileSync(path.join(cwd, `src/assets/${componentName}`), 'utf-8');
    const iconDir = path.join(cwd, ASSETS_FOLDER);
    if (!fs.existsSync(iconDir)) {
        fs.mkdirSync(iconDir);
    }
    fs.writeFileSync(path.join(iconDir, `${componentName}`), svg);

    return true;
});

Promise.all(promises).then(() => {
    console.log(`icons successfully generated in ${DIST_FOLDER}!`);
});