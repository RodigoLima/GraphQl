import { ApolloServer } from "apollo-server";
import typeDefs from './schema/index.js';

const perfis = [
  {
    id: 1,
    nome: "Administrador",
  },
  {
    id: 2,
    nome: "Comun",
  }
];

const usuarios = [
  {
    id: "1",
    nome: "Aricia",
    email: "teste@example.com",
    idade: "30",
    salario_real: 5000,
    vip: true,
    perfil_id: 1
  },
  {
    id: "2",
    nome: "Rodrigo",
    email: "admin@example.com",
    idade: "50",
    salario_real: 10000,
    vip: true,
    perfil_id: 2
  },
  {
    id: "3",
    nome: "Ingrid",
    email: "cliente@example.com",
    idade: "25",
    salario_real: 3000,
    vip: false,
    perfil_id: 1
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
    perfil(usuario) {
      const perfil = perfis.find((p) => p.id === usuario.perfil_id);
      return perfil;
    }
  },
  Query: {
    hello: () => "Hello, World!",
    numerosDaMega: () => [1, 2, 3, 4, 5, 6],
    produtoEmDestaque: () => ({
      nome: "Notebook Gaming",
      preco: 1200,
      desconto: 0.1,
    }),
    usuarios: () => usuarios,
    perfis: () => perfis,
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
