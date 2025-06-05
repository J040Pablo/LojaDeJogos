const express = require("express");
const router = express.Router();
const UserController = require("../controllers/UserController");

// Rotas públicas
router.post("/register", UserController.register);
router.post("/login", UserController.login);

// CRUD de usuários
router.route("/")
  .get(UserController.findAll)        // Buscar todos os usuários
  .post(UserController.insertOne);    // Inserir um novo usuário

router.route("/:email")
  .get(UserController.findOne)        // Buscar um usuário pelo email
  .put(UserController.updateOne)      // Atualizar um usuário pelo email
  .delete(UserController.deleteOne);  // Deletar um usuário pelo email

module.exports = router;
