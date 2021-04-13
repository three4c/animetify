import {
  ApolloClient,
  ApolloLink,
  HttpLink,
  InMemoryCache,
} from '@apollo/client';

const headersLink = new ApolloLink((operation, forward) => {
  operation.setContext({
    headers: {
      Authorization: `Bearer ${process.env.REACT_APP_ACCESS_TOKEN}`,
    },
  });
  return forward(operation);
});

const anisonProgramEndpoint = 'http://localhost:5000/graphql';
const anisonProgramHttpLink = new HttpLink({ uri: anisonProgramEndpoint });

/**
 * GraphQLのEndpointが複数あった場合
 * @see https://www.jamalx31.com/tech-posts/using-apollo-with-multiple-graphql-endpoints
 */
const link = ApolloLink.split(
  (operation) => operation.getContext().clientName === 'anisonProgram',
  anisonProgramHttpLink,
  ApolloLink.from([headersLink])
);

const client = new ApolloClient({
  link,
  cache: new InMemoryCache(),
});

export default client;
