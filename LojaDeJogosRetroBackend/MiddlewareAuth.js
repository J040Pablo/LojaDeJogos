const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  const { originalUrl, method } = req;

  // Rotas públicas
  const publicPaths = [
    { path: "/api/users/login", method: "POST" },
    { path: "/api/users/register", method: "POST" }
  ];

  const isPublic = publicPaths.some(
    (route) => originalUrl.startsWith(route.path) && method === route.method
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
    req.user = decoded;
    next();
  } catch (error) {
    return res.status(401).json({ message: "Token inválido ou expirado" });
  }
};
