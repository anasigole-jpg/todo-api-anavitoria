const express = require("express");
const categoriaController = require("../controllers/categoriaController");
const validarId = require("../middlewares/validarId");

const router = express.Router();

router.get("/", categoriaController.listar);
router.get("/:id", validarId, categoriaController.buscarPorId);
router.________("/", categoriaController.criar);
router.________("/:id", validarId, categoriaController.deletar);

module.exports = router;