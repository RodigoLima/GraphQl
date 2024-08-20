let id = 1;

function proximoId() {
  return id++;
}

const perfis = [
  {
    id: 1,
    nome: "Administrador",
  },
  {
    id: 2,
    nome: "Comun",
  },
];

const usuarios = [
  {
    id: proximoId(),
    nome: "Aricia",
    email: "teste@example.com",
    idade: "30",
    salario_real: 5000,
    vip: true,
    perfil_id: 1,
    status: "ATIVO",
  },
  {
    id: proximoId(),
    nome: "Rodrigo",
    email: "admin@example.com",
    idade: "50",
    salario_real: 10000,
    vip: true,
    perfil_id: 2,
    status: "INATIVO",
  },
  {
    id: proximoId(),
    nome: "Ingrid",
    email: "cliente@example.com",
    idade: "25",
    salario_real: 3000,
    vip: false,
    perfil_id: 1,
    status: "BLOQUEADO",
  },
];

export { usuarios, perfis, proximoId };
