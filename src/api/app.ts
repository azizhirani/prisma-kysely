import Fastify from 'fastify';
import { DB } from '@db/generated/types'
import db from '@lib/kysely';

const server = Fastify();

server.get('/users', async (request, reply) => {
  const users = await db.selectFrom('User').selectAll().execute();
  reply.send(users);
});

server.get('/users/:id', async (request, reply) => {
  const { id } = request.params as { id: string };
  const user = await db.selectFrom('User').selectAll().where('id', '=', parseInt(id)).executeTakeFirst();
  if (!user) {
    reply.status(404).send({ message: 'User not found' });
    return;
  }
  reply.send(user);
});

export default server;
