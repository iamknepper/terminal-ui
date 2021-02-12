const glob = require('glob');
const path = require('path');

function sortArrayAlphabetically(array) {
    return array.sort((a, b) => a.localeCompare(b));
}

/**
 * @return {Array<{componentName: string}>}
 */
function iconsMap() {
    return glob.sync(path.join(process.cwd(), 'src/assets/*.*')).map((iconPath) => {
        const match = iconPath.match(/\/([a-zA-Z0-9_\-]+)\.(svg|png)/);
        if (!match) {
            throw new Error(`Icon path is incorrect: ${iconPath}`);
        }
        const id = match[0];
        return { componentName: id };
    });
}

module.exports = {
    sortArrayAlphabetically,
    iconsMap,
};