async function connect(){
    if(global.connection && global.connection.state !== 'disconnected'){
        return global.connection;
    }

    const mysql = require("mysql2/promise");
    const connection = await mysql.createConnection("mysql://root:1234@localhost:3306/crud");
    global.connection = connection;
    return connection;
}


async function cadastro(usuario){
    const conn = await connect();
    const sql = 'INSERT INTO clientes(Codigo, Nome, DataNascimento, Foto) VALUES ( , , , );';
    const values = [usuario.Codigo, usuario.Nome, usuario.DataNascimento, usuario.Foto];
    return await conn.query(sql, values);
}


async function atualizarCadastro(Codigo, usuario){
    const conn = await connect();
    const sql = 'UPDATE clientes SET nome=?, idade=?, uf=? WHERE id=?';
    const values = [usuario.Codigo, usuario.Nome, usuario.DataNascimento, usuario.Foto];
    return await conn.query(sql, values);
}

module.exports = {cadastro, atualizarCadastro}