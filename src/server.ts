import fastify from 'fastify'

const app = fastify()

// http Methos: 
// POST(exemplo: cadastrar usuario)
// GET(exemplo: listar usuario)
// PUT(exemplo: atualizar alguma coisa)
// DELETE(exemplo: deletar alguma coisa)
// PATCH(exemplo: para atualizar uma informação especifica dentro de um recurso)
app.get("/hello", () => {
  return 'hello world'
})

app.listen({
  port: 3333,
}).then(() => {
  console.log('Server listening on port 3333')
})