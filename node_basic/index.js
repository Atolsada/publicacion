const http = require('http')
const port = '3000'
http.createServer( (request, response) => {
    let htmlResponse = `
        <h1>
            El servidor Node de Alejandro dice "Hola Amigos"
        </h1>`
    response.writeHead(200, { 'Content-Type': 'text/html' })
    response.end(htmlResponse)
}).listen(port)
console.log('Server ejecutandose en http://localhost:' + port);
