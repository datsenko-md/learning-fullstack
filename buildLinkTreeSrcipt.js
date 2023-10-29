import path from 'path';
import fs from 'fs';

const filler = '    ';
const root = '/home/max/p/fullstack';

const buildLinkTree = (pathToDir, offestCount = 0) => {
  const files = fs.readdirSync(path.join(root, pathToDir));
  return files.map((filename) => {
    const filepath = path.join(root, pathToDir, filename);
    const relativePath = path.join(pathToDir, filename);
    const stat = fs.statSync(filepath);
    const prefix = `${filler.repeat(offestCount)}* [${filename}](${relativePath})`;
    return stat.isFile()
      ? prefix
      : `${prefix}\n${buildLinkTree(relativePath, offestCount + 1)}`;
  }).join('\n');
};

console.log(buildLinkTree('src'));
