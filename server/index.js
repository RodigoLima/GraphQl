import { ApolloServer, gql } from "apollo-server";

const typeDefs = gql`
  #Pontos de Entrada da API
  scalar Date

  type Produto {
    nome: String!
    preco: Float!
    desconto: Float
    precoComDesconto: Float
  }

  type Perfil {
    id: ID!
    nome: String!
  }

  type Usuario {
    id: ID!
    nome: String!
    email: String!
    idade: String!
    salario: Float
    vip: Boolean
  }

  type Query {
    hello: String!
    horaCerta: Date
    usuarios: [Usuario]
    produtoEmDestaque: Produto
    numerosDaMega: [Int]
    perfis: [Perfil]
    perfil(id: ID): Perfil
    usuario(id: ID): Usuario
  }
`;

const perfis = [
  {
    id: "1",
    nome: "Administrador",
  },
  {
    id: "2",
    nome: "Comun",
  }
]

const usuarios = [
  {
    id: "1",
    nome: "Teste",
    email: "teste@example.com",
    idade: "30",
    salario_real: 5000,
    vip: true,
  },
  {
    id: "2",
    nome: "Administrador",
    email: "admin@example.com",
    idade: "50",
    salario_real: 10000,
    vip: true,
  },
  {
    id: "3",
    nome: "Cliente",
    email: "cliente@example.com",
    idade: "25",
    salario_real: 3000,
    vip: false,
  }
];

const resolvers = {
  Produto: {
    precoComDesconto(produto) {
      if (produto.desconto > 0) {
        return produto.preco * (1 - produto.desconto);
      } else {
        return produto.preco;
      }
    },
  },

  Usuario: {
    salario(usuario) {
      return usuario.salario_real;
    },
  },
  Query: {
    hello: () => "Hello, World!",
    horaCerta: () => new Date(),
    numerosDaMega: () => {
      return [1, 2, 3, 4, 5, 6];
    },
    produtoEmDestaque: () => {
      return {
        nome: "Notebook Gaming",
        preco: 1200,
        desconto: 0.1,
      };
    },
    usuarios: () => {
      // Simulação de um usuário logado
      return usuarios
    },
    perfis: () => {
      return perfis;
    },
    perfil: (_, args) => {

      const { id } = args;

      const perfil = perfis.find((p) => p.id === id);
      if (!perfil) {
        throw new Error("Perfil não encontrado");
      }
      return perfil;

    },
    usuario: (_, args) => {
      const { id } = args;
      // Simulação de um busca por um usuário específico
      const usuario = usuarios.find((u) => u.id === id);
      if (!usuario) {
        throw new Error("Usuário não encontrado");
      }
      return usuario;
    },
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.listen().then(({ url }) => {
  console.log(`Server ready at ${url}`);
});
