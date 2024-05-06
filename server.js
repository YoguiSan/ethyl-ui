const { renderToString } = require('./hydrate');
const fs = require('fs');
const path = require('path');

const indexHtml = fs.readFileSync(path.resolve('./src/index.html'), 'utf8');

renderToString(indexHtml, {
  prettyHtml: true,
  removeScripts: true,
}).then((res) => {
  console.log('res', res);
});
