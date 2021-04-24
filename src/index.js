import { PORT } from './init/config';
import { app, server } from './init/server';

app.listen({ port: PORT }, () =>
  console.log(`Server ready at http://localhost:4000${server.graphqlPath}`)
)
