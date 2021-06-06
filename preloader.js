const fs = require('fs');
// const { readdir } = require('fs/promises');

const pathToEntry = './build/index.html';
const splitBy = '</title>';
const builtHTMLContent = fs.readFileSync(pathToEntry).toString();
const parts = builtHTMLContent.split(splitBy);

let fileWithPreload = [parts[0], splitBy];

const pathToMedia = './build/static/media/';
const lcpRegex = /^inca_trail\.\w+\.webp/g;
const relPathArr = pathToMedia.split('build');
const relPath = relPathArr[relPathArr.length - 1];

try {
  const files = fs.readdirSync(pathToMedia);

  files.forEach(filename => {
    if (lcpRegex.test(filename)) {
      fileWithPreload = [
        ...fileWithPreload,
        `<link rel="preload" href="${relPath}${filename}" as="image">`,
      ];
    }
  });

  fileWithPreload = [...fileWithPreload, parts[1]];
  fs.writeFileSync(pathToEntry, fileWithPreload.join(''));
} catch (err) {
  console.error(err);
}
