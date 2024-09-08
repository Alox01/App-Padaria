
//crud genérico
const db = require('../Controllers/cnx');

// Função genérica para atualizar múltiplos atributos
const atualizar = async function (tabela, valores, condicao) {
    try {
        await db.connect();
        
        const setClause = Object.keys(valores)
            .map((coluna, index) => `${coluna} = $${index + 1}`)
            .join(', ');
        
        const whereClause = Object.keys(condicao)
            .map((coluna, index) => `${coluna} = $${Object.keys(valores).length + index + 1}`)
            .join(' AND ');
        
        const query = `UPDATE ${tabela} SET ${setClause} WHERE ${whereClause}`;
        const params = [...Object.values(valores), ...Object.values(condicao)];
        
        console.log('Query:', query);
        console.log('Params:', params);
        
        await db.query(query, params);
    } catch (erro) {
        console.error(`Erro ao atualizar na tabela ${tabela}:`, erro);
        throw erro;
    }
};

// Função genérica para inserir múltiplos atributos
const inserir = async function (tabela, valores) {
    try {
        await db.connect();
        
        const colunas = Object.keys(valores).join(', ');
        const placeholders = Object.keys(valores).map((_, index) => `$${index + 1}`).join(', ');
        
        const query = `INSERT INTO ${tabela} (${colunas}) VALUES (${placeholders})`;
        const params = Object.values(valores);
        
        await db.query(query, params);
    } catch (erro) {
        console.error(`Erro ao inserir na tabela ${tabela}:`, erro);
        throw erro;
    }
};

// Função genérica para deletar com condições
const deletar = async function (tabela, condicao) {
    try {
        await db.connect();
        
        const whereClause = Object.keys(condicao)
            .map((coluna, index) => `${coluna} = $${index + 1}`)
            .join(' AND ');
        
        const query = `DELETE FROM ${tabela} WHERE ${whereClause}`;
        const params = Object.values(condicao);
        
        console.log('Query:', query);
        console.log('Params:', params);
        
        await db.query(query, params);
    } catch (erro) {
        console.error(`Erro ao deletar na tabela ${tabela}:`, erro);
        throw erro;
    }
};

// Função genérica para buscar com condições
const buscar = async function (tabela, condicao) {
    try {
        await db.connect();
        
        const whereClause = Object.keys(condicao)
            .map((coluna, index) => `${coluna} = $${index + 1}`)
            .join(' AND ');
        
        const query = `SELECT * FROM ${tabela} WHERE ${whereClause}`;
        const params = Object.values(condicao);
        
        const resultado = await db.query(query, params);
        return resultado.rows;
    } catch (erro) {
        console.error(`Erro ao buscar na tabela ${tabela}:`, erro);
        throw erro;
    }
};

module.exports = { atualizar, inserir, deletar, buscar };

