import { usuarios, perfis } from "../data/db.js";

export const query = {
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
