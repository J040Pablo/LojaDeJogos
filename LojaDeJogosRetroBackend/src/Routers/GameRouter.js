const express = require("express");
const router = express.Router();
const GameController = require("../controllers/GameController");

// CRUD de games (privado, precisa de token)
router.route("/")
  .get(GameController.findAll)
  .post(GameController.insertOne);

router.route("/:code")
  .get(GameController.findOne)
  .put(GameController.updateOne)
  .delete(GameController.deleteOne);

module.exports = router;
