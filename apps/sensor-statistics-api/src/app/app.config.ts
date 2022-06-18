import * as path from 'path';

export const GRAPHQL_TYPES_FILENAME = 'graphql.ts';
export const GRAPHQL_TYPES_LIB_PATH = 'libs/api-types/src/lib';
export const GRAPHQL_TYPES_PATH = path.join(process.cwd(), `${GRAPHQL_TYPES_LIB_PATH}/${GRAPHQL_TYPES_FILENAME}`);
