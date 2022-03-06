const { Router } = require("express");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.get("/", (req, res, next) => {
  res.send("Soy Get de Genres");
});
router.post("/", (req, res, next) => {
  res.send("Soy Post de Genres");
});
router.delete("/", (req, res, next) => {
  res.send("Soy Delete de Genres");
});
router.put("/", (req, res, next) => {
  res.send("Soy Put de Genres");
});

module.exports = router;
