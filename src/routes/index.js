const express = require("express");
const tarefaRoutes = require("./tarefaRoutes");
router.use("/categorias", categoriaRoutes)

const router = express.Router();

router.use("/tarefas", tarefaRoutes);
// Sprint 2: a rota de /categorias entra aqui.

const categoriaRoutes = require("./categoriaRoutes");

module.exports = router;
