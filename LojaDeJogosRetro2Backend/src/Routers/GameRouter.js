const express = require('express')
const router = express.Router();
const games = [
        {name: "blue", price: 100},
        {name: "red", price: 80}
]
router.route('/api/games')
.get((req, res) => {res.send(games)})
.post((req, res) => {

        games.push(req.body)
        res.send({
            message: "Jogo adicionado com sucesso",
            content: req.body
        })
    })


module.exports = router;