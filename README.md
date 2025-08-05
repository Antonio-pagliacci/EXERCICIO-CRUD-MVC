# 📦 CRUD MVC com Node.js + Express + MySQL

![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![MySQL](https://img.shields.io/badge/MySQL-00758F?style=for-the-badge&logo=mysql&logoColor=white)

Projeto de exemplo para cadastro de produtos utilizando a arquitetura MVC com Node.js, Express e MySQL.

---

## 🖼️ Demonstração

<img src="https://via.placeholder.com/800x400.png?text=Print+da+API+em+execução" alt="Demonstração da API" />

---

## 🚀 Tecnologias Utilizadas

- [Node.js](https://nodejs.org/)
- [Express.js](https://expressjs.com/)
- [MySQL](https://www.mysql.com/)
- [dotenv](https://www.npmjs.com/package/dotenv)
- [body-parser](https://www.npmjs.com/package/body-parser)
- [cors](https://www.npmjs.com/package/cors)

---

## 🧱 Estrutura do Projeto

```
exercicio-CRUD-MVC/
│
├── controllers/      # Lógica das rotas
├── models/           # Acesso ao banco de dados
├── routes/           # Definição das rotas
├── service/          # Camada intermediária (opcional)
├── .env              # Variáveis de ambiente (NÃO VERSIONADO)
├── .gitignore
├── package.json
└── app.js            # Arquivo principal
```

---

## ⚙️ Como rodar o projeto

1. Clone o repositório:

```bash
git clone https://github.com/Antonio-pagliacci/exercicio-CRUD-MVC.git
```

2. Instale as dependências:

```bash
npm install
```

3. Configure o arquivo `.env` com as credenciais do seu banco:

```env
PORT=3006
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=sua_senha
DB_NAME=nome_do_banco
```

4. Inicie o servidor:

```bash
node app.js
```

---

## 🛠 Funcionalidades

- [x] Listar produtos
- [x] Buscar produto por ID
- [x] Cadastrar novo produto
- [x] Atualizar produto
- [x] Deletar produto

---

## 📫 Contato

Desenvolvido por **Antonio da Silva Pagliacci**  
✉️ contato.antoniopagliacci@gmail.com  
📱 (21) 98262-8025

---

## 📝 Licença

Este projeto está sob a licença MIT.

---

> _Esse projeto foi desenvolvido como exercício de aprendizado na formação Fullstack com foco em backend usando arquitetura MVC._