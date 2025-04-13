const express = require("express");
const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/loja");
require("dotenv").config();

const app = express();
const cors = require('cors');

// Importar rotas e middleware
const GameRouter = require('./src/Routers/GameRouter');
const userRouter = require('./src/Routers/UserRouter');
const MiddlewareAuth = require("./MiddlewareAuth");

app.use(express.json());
app.use(cors());

// Rotas públicas (sem autenticação)
app.use('/api/users', userRouter); // Ex: Login, Cadastro

// Aplicar middleware APENAS para rotas protegidas
app.use(MiddlewareAuth);
app.use(GameRouter); // Ex: Jogos

const PORT = 3000; // Altere para 3000
app.listen(PORT, () => {
  console.log(`Sua aplicação está sendo executada na porta ${PORT}`);
});
