const fs = require('fs');
const jsYaml = require('js-yaml');

const files = ['base', 'opinionated'];

files.forEach((file) => {
    const yaml = fs.readFileSync(`${file}.yaml`, { encoding: 'utf-8' });
    const obj = jsYaml.load(yaml);
    const json = JSON.stringify(obj, null, 2);

    fs.writeFileSync(`${file}.json`, json);
});

console.log('Done.');

