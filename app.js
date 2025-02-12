const express = require('express')
require('dotenv').config()
const app = express()
const gameRouter = require('./src/Routers/GameRouter')

app.use(express.json())
app.use(gameRouter)

app.get('/users', (req, res) => {

})
app.listen(process.env.PORT, () => {
    console.log(`Sua aplicação está rodadando na porta ${process.env.PORT}`)
})