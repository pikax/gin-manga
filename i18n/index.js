const yaml = require('js-yaml');
const {writeFileSync, readFileSync, readdirSync} = require('fs');


const OUTPUT_PATH = __dirname + '/../locales/';
const PATH = __dirname + '/';


var doc;


const validFile = (filename) => {
  return !!filename && !filename.startsWith('.')
    && filename.endsWith('.yml')
};


try {
  var items = readdirSync(PATH);


  items.filter(validFile).forEach(file => {

    doc = yaml.safeLoad(readFileSync(PATH + file));

    const fp = OUTPUT_PATH + file.replace('.yml', '.json');
    writeFileSync(fp, JSON.stringify(doc));

    console.log(`generated: ${fp}`);
  });
} catch (e) {
  console.log(e);
}






