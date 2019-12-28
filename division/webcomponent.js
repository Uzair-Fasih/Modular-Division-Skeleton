const fs = require('fs')
const path = require('path')
const cheerio = require('cheerio')
const glob = require("glob")
const src = '../src/'
const filePath = path.join(__dirname, src)
const options = {
  cwd: filePath
}

const parseComponent = (fname, ctx) => {
  const $ = cheerio.load(ctx)
  // Find all styles
  let response = {
    el: fname.split('.htm')[0].replace(/([a-z0-9]|(?=[A-Z]))([A-Z])/g, '$1-$2').toLowerCase().slice(1),
    css: '',
    scoped: false,
    html: $('template').html(),
    js: ''
  }

  if ($('template').attr('scoped') == 'scoped') {
    response.scoped = true
  }

  $('style').each(function (index, element) {
    response['css'] += $(element).html()
  });
  
  $('script').each(function (index, element) {
    response['js'] += $(element).html()
  });

  return response
}

const register = new Promise((resolve, reject) => {
  let components = []
  glob("**/*.htm", options, function (er, files) {
    if (!er) {
      let filesCount = files.length
      console.log(filesCount)
      files.forEach((fpath, index) => {
        let temp = path.join(filePath, `/${fpath}`)
        fs.readFile(temp, { encoding: 'utf-8' }, function (err, data) {
          if (!err) {
            components.push(parseComponent(fpath.split('/').pop(), data))
          } else {
            console.log(err);
          }
          // Last file was picked up
          if (filesCount - 1 == index) {
            resolve(components)
          }
        });
      })
    }
  })
})

module.exports = { register }