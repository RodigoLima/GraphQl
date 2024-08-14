import { ApolloServer, gql } from "apollo-server";

const typeDefs = gql`
  #Pontos de Entrada da API
  scalar Date
  type Query {
    hello: String!
    horaCerta: Date
  }
`;

const resolvers = {
  Query: {
    hello: () => "Hello, World!",
    horaCerta: () => new Date(),
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.listen().then(({ url }) => {
  console.log(`Server ready at ${url}`);
});
