const express = require("express");
const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/loja");
require("dotenv").config();

const app = express();
const cors = require("cors");

// Importar rotas e middleware
const GameRouter = require("./src/Routers/GameRouter");
const userRouter = require("./src/Routers/UserRouter");
const MiddlewareAuth = require("./MiddlewareAuth");

app.use(express.json());
app.use(cors());

// Rotas públicas
app.use("/api/users", userRouter);

// middleware
app.use(MiddlewareAuth);
app.use(GameRouter);

const PORT = 3000;
app.listen(80, () => {
  console.log(`Sua aplicação está sendo executada na porta ${80}`);
});
