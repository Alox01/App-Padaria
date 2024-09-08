//routes com crud genérico
const express = require('express');
const router = express.Router();
const clientes = require('../Models/crud');

// Rota de teste
router.get('/', function (req, res) {
    res.send('Hello World');
});


router.patch('/atualiza/:nome1/:nome2', function (req, res) {
    const tabela = 'fornecedores';
    const colunaNome = 'nome_for';
    
    clientes.atualizar(tabela, colunaNome, req.params.nome1, req.params.nome2)
        .then(function () {
            res.send('Atualizado com sucesso');
        })
        .catch(function (erro) {
            res.status(500).send("Erro ao atualizar: " + erro);
        });
});

router.post('/insere/:nome', function (req, res) {
    const tabela = 'fornecedores';
    const colunaNome = 'nome_for';
    
    clientes.inserir(tabela, colunaNome, req.params.nome)
        .then(function () {
            res.send('Inserido com sucesso');
        })
        .catch(function (erro) {
            res.status(500).send("Erro ao inserir: " + erro);
        });
});

module.exports=router