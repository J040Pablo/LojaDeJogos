const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();

// Conexão com MongoDB
mongoose.connect(process.env.MONGO_URL)
  .then(() => console.log("✅ Conectado ao MongoDB"))
  .catch((err) => console.error("❌ Erro ao conectar ao MongoDB:", err));

// Middlewares globais
app.use(express.json());
app.use(cors());

// Importar rotas
const GameRouter = require("./src/Routers/GameRouter");
const UserRouter = require("./src/Routers/UserRouter");
const MiddlewareAuth = require("./MiddlewareAuth");

// Rotas públicas
app.use("/api/users", UserRouter);

// Middleware de autenticação (tudo abaixo disso é protegido)
app.use(MiddlewareAuth);

// Rotas privadas
app.use("/api/games", GameRouter);

// Porta
app.listen(80, () => {
  console.log("O Servidor Esta rodando na porta 80");
});