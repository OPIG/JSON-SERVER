const fs = require('fs')
try{
  const data = fs.readFileSync('./src/router/index.js', 'utf-8')
  const arr = data.math(/path:(.+),/g)
  const routes = arr.map(e => {
    let ret = e.replace('path', '"path"')
    ret = ret.replace(/'/g, '"')
    return JSON.parse('{' + ret.replace(',', '}'))
  })
  const output = routes.filter(
    e => e.path && e.path !== '/' && e.path.indexOf('success') === -1 &&
    e.path.indexOf(':') === -1 && e.path.indexOf('*') === -1
  ).map(e => ({
    url: e.path,
    pv: 0
  }))

  const outputString = JSON.stringify(output)
  console.log(outputString)
  fs.writeFileSync('dist/static/routes.json', outputString)
} catch (err) {
  console.log(err)
}
