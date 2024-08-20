import { query } from "./query.js";
import { produto } from "./produto.js";
import { usuario } from "./usuario.js";
import {mutations}  from "./mutation.js";

export const resolvers = {
  ...query,
  ...mutations,
  ...produto,
  ...usuario,

};
