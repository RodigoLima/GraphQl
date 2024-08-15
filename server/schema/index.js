import { mergeTypeDefs } from "@graphql-tools/merge";
import { loadFilesSync } from "@graphql-tools/load-files";
import { fileURLToPath, URL } from "url";
import path from "path";

const typesArray = loadFilesSync(
  path.join(fileURLToPath(new URL("./", import.meta.url)), "./**/*.graphql")
);

// Combine todos os tipos carregados
const typeDefs = mergeTypeDefs(typesArray);

export default typeDefs;
