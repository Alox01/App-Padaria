const express=require('express')

const router=express.Router()
const clientes=require('../Models/crud')

router.get('/', function (req, res){
    res.send('Hello World')
})

router.patch('/atualiza/:nome1/:nome2',function(req,res){
    clientes.atualizar(req.params.nome1,req.params.nome2).then(function(){
        res.send('Atualizado com sucesso')
    }).catch(function(erro){
        res.send("Moio ao atualizar "+erro)
    })
})
    
    router.post('/insere/:nome',function(req,res){
        clientes.inserir(req.params.nome).then(function(){
            res.send('Inserido com sucesso')
    }).catch(function(erro){
        res.send("Moio ao inserir "+erro)
    })
})

router.delete('/deleta/:nome', function(req, res) {
    clientes.deletar(req.params.nome)
        .then(function() {
            res.send('Deletado com sucesso')
        })
        .catch(function(erro) {
            res.send("Moio ao deletar: " + erro)
        })
})

router.get('/busca/:nome', function(req, res) {
    clientes.buscar(req.params.nome)
        .then(function(resultado) {
            res.json(resultado)
        })
        .catch(function(erro) {
            res.send("Moio ao buscar: " + erro)
        })
})

module.exports=router