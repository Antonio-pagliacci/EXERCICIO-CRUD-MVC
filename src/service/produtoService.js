// regras de negócio validar CPF, aplicar calculos, evitar duplicidades
const repo = require("../repository/produtoRepositoy");

exports.getTodos = (retorno) => {
  repo.buscarTodos(retorno);
};

exports.getPorId = (id, retorno) => {
  repo.buscarPorId(id, retorno);
};

exports.criar = (cliente, retorno) => {
  repo.inserir(cliente, retorno);
};

exports.atualizar = (id, cliente, retorno) => {
  repo.atualizar(id, cliente, retorno);
};

exports.deletar = (id, retorno) => {
  repo.deletar(id, retorno);
};