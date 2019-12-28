const register = require('./webcomponent').register
const path = require('path')
const fs = require('fs')
const cheerio = require('cheerio')
const dist = '../dist/'
const filePath = path.join(__dirname, dist)

const entry = path.join(__dirname, '../index.html')
const distHTML = path.join(filePath, 'index.html')
const distCSS = path.join(filePath, 'style.css')
const distJS = path.join(filePath, 'script.js')

let styles = ''
let scripts = 'let componenents = JSON.parse(`'

register.then(components => {
  let masterComp = []
  console.log(components)
  components.forEach(x => {
    let temp = x
    temp.css = JSON.stringify(temp.css).replace(/\\n/g, '')
    temp.js = JSON.stringify(temp.js).replace(/\\n/g, '')
    temp.html = JSON.stringify(temp.html).replace(/\\n/g, '')
    masterComp.push(temp)
  })
  scripts += JSON.stringify(masterComp) + '`);'
  
  components.forEach(comp => {
    if (!comp.scoped) styles += comp.css
    scripts += ';' + comp.js + ';'
  })

  fs.readFile(entry, { encoding: 'utf-8' }, function (err, data) {


    if (!err) {
      const $ = cheerio.load(data)
      $('#hotreload').remove()
      $('#webcomponent').remove()
      $('body').contents().filter(function() { return this.type === 'comment'; }).remove();
      fs.writeFile(distHTML, $.html(), function(err) {
        if (err) return console.log(err);
        console.log("The HTML file was saved!");
      });
      fs.writeFile(distCSS, styles, function(err) {
        if (err) return console.log(err);

        console.log("The CSS file was saved!");
      }); 
      fs.writeFile(distJS, scripts, function(err) {
        if (err) return console.log(err);
        console.log("The JS file was saved!");
      }); 
    } else {
      console.log(err);
    }
  });
})

