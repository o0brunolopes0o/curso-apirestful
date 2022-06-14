const express = require('express')
//const path = require('path')

//const db = require('./database')
const routes = require('./routes/routes')

const app = express()

//conex//ão com BD
//db.connect()

//definindo os arquivos públicos
//app.use(express.static(path_join(__dirname, 'public')))

//habilita server para receber dados via post
app.use(express.urlencoded({ extended: true}))

//definindo as rotas
app.use('/api', routes)

// executando o servidor
const port = process.env.PORT || 8080
app.listen(port, () => console.log(`Server is listening on port ${port}`))