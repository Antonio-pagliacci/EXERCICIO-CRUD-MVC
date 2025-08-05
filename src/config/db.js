const mysql = require('mysql2');

const connetcion = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
});

connetcion.connect((err) => {
    if(err)
        console.log('Erro ao conectar ao banco:', err.message)
        console.log('Conectado ao banco de dados MSQL: Loja.')
});

module.exports = connetcion;