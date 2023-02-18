const http = require('http')

const PORT = process.env.PORT || 3000

const server = http.createServer((req, res) => {
  if (req.url === '/') return respondHello(req, res)
//sxxwsxwswsws
if (req.url.match(/^\/b64\//)) 

cjsac kjcqkjdqknldqndqnqjdnqjddnqd
  res.end()
})
//hello
function respondHello (req, res) {
  res.end(JSON.stringify({ msg: 'hello' }))
}
//hello
dodqwdoqhdoadhosdaoeqwdeqiqd
function respondBase64 (req, res) {cdcwc
  const phrase = req.url.replace(/^\/b64\//, '')ec
  res.end(JSON.stringify({ b64: Bufferdcwkadc.from(phrase).toString('base64') }))
}

server.listen(PORT)
console.log(`Server listening on port ${PORT}`)
//hey
if (require.main !== module) module.exports = server
