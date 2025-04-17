import type { CodegenConfig } from '@graphql-codegen/cli';
import * as dotenv from 'dotenv';

dotenv.config();

const config: CodegenConfig = {
  overwrite: true,
  schema: process.env.GRAPHQL_SCHEMA_URL,
  documents: [
    'src/graphql/**/*.graphql',
    'src/**/*.ts', //migrate inline manual graphql tags throughout src *.ts files to graphql folder then remove src/**/*.ts
  ],
  generates: {
    'src/gql/': {
      preset: 'client',
      plugins: [],
      presetConfig: {
        fragmentMasking: false,
      },
    },
  },
};

export default config;
