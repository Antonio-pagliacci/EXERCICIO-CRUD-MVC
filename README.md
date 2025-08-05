# 🧾 Sistema de Gestão de Estoque

Este projeto é uma aplicação simples de **Gestão de Estoque** com frontend em HTML/CSS/JS e backend em Node.js + Express, conectando-se a um banco de dados MySQL.

## 🚀 Tecnologias utilizadas

- **Frontend:** HTML5, CSS3, JavaScript (Vanilla)
- **Backend:** Node.js, Express
- **Banco de Dados:** MySQL

## 🖥️ Frontend

A interface foi desenvolvida com **HTML**, **CSS** e **JavaScript puro**, oferecendo uma forma simples e intuitiva de interagir com a API de produtos.

### 📁 Estrutura de arquivos

```
.
├── index.html           # Página principal com listagem de produtos
├── cadastrar.html       # Página de cadastro e edição de produtos
├── style.css            # Estilização visual do sistema
└── script.js            # Lógica de consumo da API e manipulação do DOM
```

### 🧩 Funcionalidades disponíveis

- 📋 Listagem de produtos cadastrados
- ➕ Cadastro de novos produtos
- ✏️ Edição de produtos existentes
- 🗑️ Exclusão de produtos
- 🔍 Busca por nome dos produtos (filtro dinâmico)

### 🚀 Como utilizar

1. Certifique-se de que o backend (API Node/Express) esteja rodando corretamente na porta `3006`.
2. Abra o arquivo `index.html` no navegador.
3. Use o botão `NOVO` para cadastrar um novo produto ou clique nos botões ✏️ e 🗑️ para editar ou excluir um item.
4. Utilize o campo de busca para filtrar os produtos pelo nome.

## 🔧 Backend

O backend foi construído com **Node.js** e **Express**, responsável por disponibilizar endpoints para o CRUD de produtos.

### Rotas disponíveis

- `GET /produtos` - Lista todos os produtos
- `GET /produtos/:id` - Retorna um produto específico
- `POST /produtos` - Cadastra um novo produto
- `PUT /produtos/:id` - Atualiza um produto existente
- `DELETE /produtos/:id` - Remove um produto

### Como executar

```bash
npm install
node app.js
```

Certifique-se de ter o MySQL rodando e um banco de dados configurado com a tabela `produtos`.

## 🗄️ Banco de dados

```sql
CREATE TABLE produtos (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nome VARCHAR(100),
  preco DECIMAL(10,2),
  estoque INT
);
```

## 📌 Requisitos

- Node.js instalado
- MySQL em execução
- Navegador para abrir o `index.html`

---

Feito  por Antônio da Silva Pagliacci