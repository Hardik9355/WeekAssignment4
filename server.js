const http = require('http')

const PORT = process.env.PORT || 3000

const server = http.createServer((req, res) => {
  if (req.url === '/') return respondHello(req, res)
//sxxwsxwswsws
  res.end()
})
//hello
function respondHello (req, res) {
  res.end(JSON.stringify({ msg: 'hello' }))
}
//hello
server.listen(PORT)
console.log(`Server listening on port ${PORT}`)
//hey
if (require.main !== module) module.exports = server
