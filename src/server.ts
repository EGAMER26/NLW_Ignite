import fastify from 'fastify'
import { PrismaClient } from '@prisma/client'

const app = fastify()
const prisma = new PrismaClient()
// http Methos:
// POST(exemplo: cadastrar usuario)
// GET(exemplo: listar usuario)
// PUT(exemplo: atualizar alguma coisa)
// DELETE(exemplo: deletar alguma coisa)
// PATCH(exemplo: para atualizar uma informação especifica dentro de um recurso)
app.get('/hello', async () => {
  const users = await prisma.user.findMany()

  return users
})
app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log('Server listening on port 3333')
  })
