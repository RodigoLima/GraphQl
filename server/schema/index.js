import { mergeTypeDefs } from '@graphql-tools/merge';
import { loadFilesSync } from '@graphql-tools/load-files';
import path from 'path';
import { fileURLToPath } from 'url';

// Obtenha o equivalente ao `__dirname` no ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Carregue todos os arquivos .graphql no diretório atual
const typesArray = loadFilesSync(path.join(__dirname, './**/*.graphql'));

// Combine todos os tipos carregados
const typeDefs = mergeTypeDefs(typesArray);

export default typeDefs;
