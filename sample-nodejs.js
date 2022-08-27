const http = require('http')
const PORT = 3000

const server = http.createServer((req, res) => {
  res.statusCode = 200
  res.setHeader('Content-Type', 'text/plain')
  res.end('Hello World!\n')
})

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`)
})

// you can start the server by running the following in the terminal:
// node <filename>.js
// where <filename> is the name of the file, such as index