const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const cors = require("cors");

// Conexão com MongoDB Atlas
console.log("Tentando conectar ao MongoDB Atlas...");
console.log("URL do MongoDB:", process.env.MONGO_URL ? "URL definida" : "URL não definida");

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("✅ Conectado ao MongoDB Atlas com sucesso!");
    console.log("Database:", mongoose.connection.db.databaseName);
    console.log("Host:", mongoose.connection.host);
  })
  .catch((err) => {
    console.error("❌ Erro ao conectar no MongoDB Atlas:", err);
    console.error("Detalhes do erro:", {
      name: err.name,
      message: err.message,
      code: err.code
    });
  });

// Inicializar o app
const app = express();

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

// Definir porta fixa 80
const PORT = 80;

app.listen(PORT, () => {
  console.log(`🚀 Servidor rodando na porta ${PORT}`);
});
