const express = require('express')
const path = require('path')
const app = express()

const port = 3000
const public = 'public'

app.use((req, res, next) => {
    console.log(`recibida la petición : ${req.url}`)
    next()
})

app.use(express.static(path.join(__dirname, public)))

/* 
app.get('/', (req, res) => {
    res.send(`
    <h1>
        El servidor Express de Alejandro dice "Hola Amigos"
    </h1>`)
})

app.get('/pepe', (req, res) => {
    res.send(`
    <h1>
        "Hola Pepe"
    </h1>`)
}) */

app.listen(port, () => {
    console.log('Server ejecutandose en http://localhost:' + port)
})