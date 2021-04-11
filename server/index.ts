import express, { Request, Response } from 'express';
import next from 'next';

import cors from 'cors';
import { graphqlHTTP } from 'express-graphql';
import { schema } from './fields';

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();
const port = process.env.PORT || 3000;

app.prepare().then(() => {
  const server = express();

  server.use(cors());
  server.use(
    '/graphql',
    graphqlHTTP({
      schema,
      graphiql: true,
    })
  );

  server.all('*', (req: Request, res: Response) => {
    return handle(req, res);
  });

  server.listen(port, () => console.log(`localhost:${port}/graphql`));
});
