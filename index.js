#! /usr/bin/env node

var fs = require('fs');
var rs = require('replacestream');

var userArgs = process.argv.slice(2);

switch(userArgs[0]) {
  case "template":
    console.log("Let's generate some templates!");
    var templates = userArgs.slice(1);
    templates.forEach(function(tpl) {
      console.log('Creating the ' + tpl + ' template...');
      fs.mkdirSync(tpl);
      fs.createReadStream('templates/template-template.html')
        .pipe(rs('{{name}}', tpl))
        .pipe(fs.createWriteStream(tpl+'/'+tpl+'.html'));
      fs.createWriteStream(tpl+'/'+tpl+'.js');
    });
  break;
}

console.log('All done! Bye!')