
//crud genérico

const db = require('../Controllers/cnx');

const atualizar = async function (tabela, colunaNome, nomeNovo, nomeAntigo) {
    try {
        await db.connect();
        const query = `UPDATE ${tabela} SET ${colunaNome} = $1 WHERE ${colunaNome} = $2`;
        await db.query(query, [nomeNovo, nomeAntigo]);
    } catch (erro) {
        console.error(`Erro ao atualizar na tabela ${tabela}:`, erro);
        throw erro;
    } finally {
        await db.end();
    }
};

const inserir = async function (tabela, colunaNome, nome) {
    try {
        await db.connect();
        const query = `INSERT INTO ${tabela} (${colunaNome}) VALUES ($1)`;
        await db.query(query, [nome]);
    } catch (erro) {
        console.error(`Erro ao inserir na tabela ${tabela}:`, erro);
        throw erro;
    } finally {
        await db.end();
    }
};

const deletar = async function (tabela, colunaNome, nome) {
    try {
        await db.connect();
        const query = `DELETE FROM ${tabela} WHERE ${colunaNome} = $1`;
        await db.query(query, [nome]);
    } catch (erro) {
        console.error(`Erro ao deletar na tabela ${tabela}:`, erro);
        throw erro;
    } finally {
        await db.end();
    }
};

const buscar = async function (tabela, colunaNome, nome) {
    try {
        await db.connect();
        const query = `SELECT * FROM ${tabela} WHERE ${colunaNome} = $1`;
        const resultado = await db.query(query, [nome]);
        return resultado.rows;
    } catch (erro) {
        console.error(`Erro ao buscar na tabela ${tabela}:`, erro);
        throw erro;
    } finally {
        await db.end();
    }
};

module.exports = { atualizar, inserir, deletar, buscar };
