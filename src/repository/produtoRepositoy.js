// Mysql
const db = require("../config/db");

exports.buscarTodos = (retorno) => {
  db.query("SELECT * FROM produtos", retorno);
};

exports.buscarPorId = (id, retorno) => {
  db.query("SELECT * FROM produtos WHERE id = ?", [id], retorno);
};

exports.inserir = (produto, retorno) => {
    const {nome, preco, estoque} = produto
    db.query('INSERT INTO produtos(nome, preco, estoque) values (?, ?, ?)', [nome , preco, estoque], retorno);
};

exports.atualizar = (id, produto, retorno) => {
    const {nome, preco, estoque} = produto;
    db.query('UPDATE produtos SET nome = ?, preco = ?, estoque = ? where id = ?', [nome, preco, estoque, id], retorno)
};

exports.deletar = (id, retorno) => {
    db.query('DELETE FROM produtos WHERE id = ?', [id], retorno)
};