const path = require('path')
const jsonServer = require('json-server')

const routes = require('./db')

const server = jsonServer.create()
const router = jsonServer.router(routes)
const middleware = jsonServer.defaults({
  static: path.resolve(__dirname, 'static'),
})

server.use(middleware)
server.use(router)

const PORT = 3001
server.listen(PORT, () => {
  console.log(`JSON server is running on port ${PORT}`)
})
