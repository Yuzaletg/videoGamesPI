const { Router } = require("express");

const { Videogame } = require("../db");

const router = Router();

router.get("/", (req, res, next) => {
  return Videogame.findAll()
    .then((Videogame) => {
      res.send(Videogame);
    })
    .catch((error) => {
      next(error);
    });
});
router.post("/", async (req, res, next) => {
  try {
    const {
      name,
      description,
      released,
      ratings,
      plataforms,
      background_image,
    } = req.body;
    const newVideogame = await Videogame.create({
      name,
      description,
      released,
      ratings,
      plataforms,
      background_image,
    });
    res.send(newVideogame);
  } catch (error) {
    next(error);
  }
});
router.delete("/", (req, res, next) => {
  res.send("Soy Delete de Videogame");
});
router.put("/", (req, res, next) => {
  res.send("Soy Put de Videogame");
});

module.exports = router;
