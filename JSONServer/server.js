// https://github.com/typicode/json-server

const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults()
server.use(middlewares)
// 调用这个之后就可以正常使用patch方法
server.use(jsonServer.bodyParser)
server.use(router)
server.listen('3004', (res,req) => {
  console.log('welcome to use json server!')
})

server.get('/users', (req, res) => {
  res.jsonp(req.query)
})

server.get('/products', (req, res) => {
  res.jsonp(req.query)
})

server.get('/products/:id', (req, res) => {
  res.jsonp(req.query)
})

server.delete('/products/:id', (req, res) => {
  res.jsonp(req.query)
})

server.patch('/products/:id', (req, res) => {
  console.log(req)
  res.jsonp(req.query)
})
server.post('/products', (req, res) => {
  console.log(req)
  res.jsonp(req.query)
})
