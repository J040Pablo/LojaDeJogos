const express = require("express");
const router = express.Router();
const UserController = require("../controllers/UserController");

// Rotas públicas
router.post("/register", UserController.register);
router.post("/login", UserController.login);

// CRUD de usuários (protegido via MiddlewareAuth)
router.route("/")
  .get(UserController.findAll)
  .post(UserController.insertOne);

router.route("/:code")
  .get(UserController.findOne)
  .put(UserController.updateOne)
  .delete(UserController.deleteOne);

module.exports = router;
