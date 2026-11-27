
const categoriaService = require("../services/categoriaService");


// As funcoes do controller entram aqui.

async function listar(req, res) {
const categorias = await categoriaService.Categorias(req.query);
res.status(200).json(categorias);
}

async function buscarPorId(req, res) {
const categoria = await categoriaService.buscarCategoriaPorId(req.params.id);
if (!categoria) {
res.status(404).json({ erro: "categoria nao encontrada" });
return;
}
res.status(200).json(categoria);
}

async function criar(req, res) {
  const erro = categoriaService.validarCategoria(req.body, true);
  if (erro) {
    res.status(400).json({ erro: erro });
    return;
  }

  const categoria = await categoriaService.criarCategoria(req.body);
    res.status(201).json(categoria);
  }

  async function deletar(req, res) {
    const deletou = await categoriaService.deletarCategoria(req.params.id);
    if (!deletou) return res.status(404).json({ erro: "Categoria nao encontrada" });
    res.status(204).send();
  }
module.exports = { listar, buscarPorId, criar, deletar };
