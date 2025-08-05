const express = require('express');
require('dotenv').config();
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json());

const produtosRoutes = require('./routes/produtoRoutes');

app.use('/', produtosRoutes)

module.exports = app;