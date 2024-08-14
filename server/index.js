import { ApolloServer, gql } from "apollo-server";

const typeDefs = gql`
  #Pontos de Entrada da API

  type Query {
    hello: String!
  }
`;

const resolvers = {
    Query: {
      hello: () => "Hello, World!",
    },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.listen().then(({ url }) => {
  console.log(`Server ready at ${url}`);
});
