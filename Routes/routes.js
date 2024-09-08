//routes com crud genérico
const express = require('express');
const router = express.Router();
const crud = require('../Models/crud');

// Inserir dados
router.post('/:tabela/insere', async function (req, res) {
    try {
        const tabela = req.params.tabela;
        const dados = req.body; // Exemplo: { nome_for: "Fornecedor A", cnpj_for: "12345678901234", ... }
        
        await crud.inserir(tabela, dados);
        res.send('Inserido com sucesso');
    } catch (erro) {
        res.status(500).send("Erro ao inserir: " + erro);
    }
});

// Atualizar dados
router.patch('/:tabela/atualiza', async function (req, res) {
    try {
        const tabela = req.params.tabela;
        const { valores, condicao } = req.body; // Exemplo: { valores: { nome_for: "Novo Nome" }, condicao: { id_for: 1 } }
        
        await crud.atualizar(tabela, valores, condicao);
        res.send('Atualizado com sucesso');
    } catch (erro) {
        res.status(500).send("Erro ao atualizar: " + erro);
    }
});

// Deletar dados
router.delete('/:tabela/deleta', async function (req, res) {
    try {
        const tabela = req.params.tabela;
        const condicao = req.body; // Exemplo: { id_for: 1 }
        
        await crud.deletar(tabela, condicao);
        res.send('Deletado com sucesso');
    } catch (erro) {
        res.status(500).send("Erro ao deletar: " + erro);
    }
});

// Buscar dados
router.get('/:tabela/buscar', async function (req, res) {
    try {
        const tabela = req.params.tabela;
        const condicao = req.query; // Exemplo: /fornecedores/buscar?id_for=1
        
        const resultado = await crud.buscar(tabela, condicao);
        res.json(resultado);
    } catch (erro) {
        res.status(500).send("Erro ao buscar: " + erro);
    }
});

module.exports = router;
