const express = require('express');

const router = express.Router()
const controller = require('../controller/produtoControlle')

router.get('/produtos', controller.listar);
router.get('/produtos/:id', controller.buscarId);
router.post('/produtos', controller.inserir);
router.put('/produtos/:id', controller.atualizar);
router.delete('/produtos/:id', controller.deletar )

module.exports = router;