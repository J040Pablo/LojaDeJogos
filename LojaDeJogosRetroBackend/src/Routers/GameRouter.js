const express = require('express');
const GameController = require('../controllers/GameController');
const router = express.Router();
const games = [
        {name: "blue", price: 100},
        {name: "red", price: 80}
]
router.route('/api/games')
.get(GameController.findAll)
.post(GameController.insertOne)

router.route('/api/games/:code')
.get(GameController.findOne)
.delete(GameController.deleteOne)
.put(GameController.updateOne)


module.exports = router;