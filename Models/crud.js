const db = require('../Controllers/cnx')

const atualizar = async function (nomeNovo, nomeAntigo) {
    await db.connect()
    const dados = (" update clientes set nome_cli= $1 where nome_cli= $2 ")
    await db.query(dados, [nomeNovo, nomeAntigo])
}

const inserir = async function (nome) {
    await db.connect()
    const query = "INSERT INTO clientes (nome_cli) VALUES ($1)"
    await db.query(query, [nome])
}

const deletar = async function (nome) {
    await db.connect()
    const query = "DELETE FROM clientes WHERE nome_cli = $1"
    await db.query(query, [nome])
}

const buscar = async function (nome) {
    await db.connect()
    const query = "SELECT * FROM clientes WHERE nome_cli = $1"
    const resultado = await db.query(query, [nome])
    return resultado.rows
}

module.exports = { atualizar, inserir, deletar, buscar }
