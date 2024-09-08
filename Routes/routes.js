router.patch('/atualiza/:nome1/:nome2', function (req, res) {
    const tabela = 'fornecedores';
    const colunaNome = 'nome_fornecedor';
    
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
    const colunaNome = 'nome_fornecedor';
    
    clientes.inserir(tabela, colunaNome, req.params.nome)
        .then(function () {
            res.send('Inserido com sucesso');
        })
        .catch(function (erro) {
            res.status(500).send("Erro ao inserir: " + erro);
        });
});
