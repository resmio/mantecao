import fs from 'fs';
import rrs from 'recursive-readdir-sync';

const iconImports = [];
const iconList = [];
const svgIconPath = 'src/icons/';

rrs(svgIconPath).forEach((file) => {
  if (file !== 'index.stories.js' && file !== 'index.js') {
    const fileLines = fs.readFileSync(file, 'utf8').split('\n');
    let index = 0;
    let found = false;

    while (found === false && index < fileLines.length) {
      if (fileLines[index].indexOf('export default') > -1) {
        const moduleName = fileLines[index].split(' ')[2].replace(';', '').trim();
        const modulePath = file.substring(0, file.length - 3).replace(/\\/g, '/').replace(svgIconPath, '');

        iconImports.push(`import ${moduleName} from './${modulePath}'\n`);
        iconList.push(`
          <div style={{textAlign: 'center', flex: '1 1', padding: '10px'}}>
            <p>${moduleName}</p>
            <${moduleName} large />
          </div>
        `);

        found = true;
      } else {
        index++;
      }
    }
  }
});

const storyDoc = `
  import React from 'react'
  import { storiesOf } from '@storybook/react'
  ${iconImports.join('')}

  storiesOf('${iconList.length} Icons', module)
    .add('all icons', () =>
      <div style={{display: 'flex', flexWrap: 'wrap'}}>
        ${iconList.join('')}
      </div>
    )
`

fs.writeFileSync(`./${svgIconPath}/index.stories.js`, storyDoc);
