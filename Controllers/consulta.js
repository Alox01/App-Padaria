const db=require('./cnx')

async function listarclientes() {

  await db.connect()
  resultado= await db.query ('select * from clientes')
  console.log (resultado.rows)
  await db.end()


}
listarclientes()