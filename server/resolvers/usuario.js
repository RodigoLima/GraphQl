import { perfis } from "../data/db.js";

export const usuario = {
  Usuario: {
    salario(usuario) {
      return usuario.salario_real;
    },
    perfil(usuario) {
      const perfil = perfis.find((p) => p.id === usuario.perfil_id);
      return perfil;
    },
  },
};
