const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  const { path, method } = req;

  // Rotas públicas que não exigem autenticação
  const publicPaths = [
    { path: "/login", method: "POST" },
    { path: "/register", method: "POST" }, // Cadastro de usuário
    { path: "/about", method: "GET" },
    { path: "/api/games", method: "GET" },
  ];

  // Verifica se a rota atual é pública
  const isPublic = publicPaths.some(
    (route) => route.path === path && route.method === method
  );

  if (isPublic) {
    return next();
  }

  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({ message: "Token não fornecido" });
  }

  const [bearer, token] = authHeader.split(" ");

  if (bearer !== "Bearer" || !token) {
    return res.status(401).json({ message: "Token mal formatado" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded; // Adiciona dados do usuário na requisição
    next();
  } catch (error) {
    return res.status(401).json({ message: "Token inválido ou expirado" });
  }
};
