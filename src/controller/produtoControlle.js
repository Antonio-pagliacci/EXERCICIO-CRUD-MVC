//HTTP
const service = require("../service/produtoService"); // service

exports.listar = (req, res) => {
  service.getTodos((erro, resultado) => {
    if (erro) return res.status(500).json({ erro: "Erro ao buscar Produto" });
    res.json(resultado);
  });
};

exports.buscarId = (req, res) => {
  const { id } = req.params;
  service.getPorId(id, (erro, resultado) => {
    if (erro) return res.status(500).json({ erro: "Erro ao buscar por id." });
    if (resultado.length === 0)
      return res.status(404).json({ erro: "Produto não encontrado." });
    res.json(resultado[0]);
  });
};

exports.inserir = (req, res) => {
  service.criar(req.body, (erro, resultado) => {
    if (erro) return res.status(500).json({ erro: "Erro ao inserir novo produto." });
    res.status(201).json({
      message: "Produto cadastrado com sucesso.",
      id: resultado.insterId,
    });
  });
};

exports.atualizar = (req, res) => {
  const { id } = req.params;
  service.atualizar(id, req.body, (erro) => {
    if (erro) return res.status(500).json({ erro: "Erro ao atualiar produto" });
    res.json({ message: " Produto atualizado com sucesso." });
  });
};

exports.deletar = (req, res) => {
  const { id } = req.params;
  service.deletar(id, (erro) => {
     if (erro) return res.status(500).json({ erro: "Erro ao deletar produto" });
    res.json({ message: " Produto deletado com sucesso." });

  })
};
