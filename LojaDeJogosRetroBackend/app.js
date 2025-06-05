const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const cors = require("cors");

// Conexão com MongoDB Local
console.log("Tentando conectar ao MongoDB Local...");

mongoose
  .connect("mongodb://127.0.0.1:27017/lojadejogos")
  .then(() => {
    console.log("✅ Conectado ao MongoDB Local com sucesso!");
    console.log("Database:", mongoose.connection.db.databaseName);
    console.log("Host:", mongoose.connection.host);
  })
  .catch((err) => {
    console.error("❌ Erro ao conectar no MongoDB Local:", err);
    console.error("Detalhes do erro:", {
      name: err.name,
      message: err.message,
      code: err.code
    });
  });

// Inicializar o app
const app = express();
// teste
// Importar rotas e middleware
const GameRouter = require("./src/Routers/GameRouter");
const userRouter = require("./src/Routers/UserRouter");
const MiddlewareAuth = require("./MiddlewareAuth");

// Middlewares globais
app.use(express.json());
app.use(cors());

// Rotas públicas
app.use("/api/users", userRouter);

// Middleware de autenticação
app.use(MiddlewareAuth);

// Rotas privadas
app.use(GameRouter);

// Definir porta 3000 para desenvolvimento local
const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Sua aplicação está sendo executada na porta ${PORT}`);
});
