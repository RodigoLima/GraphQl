import { usuarios, proximoId } from "../data/db.js";

export const mutations = {
  Mutation: {
    excluirUsuario(_, { id }) {
      const i = usuarios.findIndex((usuario) => usuario.id === id);
      if (i < 0) {
        return null;
      }
      const excluirUsuarios = usuarios.splice(i, 1);
      return excluirUsuarios ? excluirUsuarios[0] : null;
    },

    alterarUsuario: (_, args) => {
      const i = usuarios.findIndex((usuario) => usuario.id === args.id);
      if (i < 0) {
        return null;
      }
    
      const usuario = {
        ...usuarios[i],  // Preserva as propriedades existentes
        ...args         // Sobrescreve com as novas propriedades
      };
    
      usuarios[i] = usuario; // Atualiza o array com o novo objeto
    
      return usuario; // Retorna o usuário atualizado
    },

    novoUsuario(_, { args }) {
      const novo = {
        id: proximoId(),
        ...args,
        perfil_id: 1,
        status: "ATIVO",
      };

      usuarios.push(novo);
      return novo;
    },
  },
};
