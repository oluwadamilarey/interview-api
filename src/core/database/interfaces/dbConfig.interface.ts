// eslint-disable-next-line prettier/prettier
export interface IDatabaseConfigAttributes {
  // eslint-disable-next-line prettier/prettier
  username?: string;
  password?: string;
  database?: string;
  host?: string;
  port?: number | string;
  dialect?: string;
  urlDatabase?: string;
}
// eslint-disable-next-line prettier/prettier

// eslint-disable-next-line prettier/prettier
export interface IDatabaseConfig {
  development: IDatabaseConfigAttributes;
  test: IDatabaseConfigAttributes;
  production: IDatabaseConfigAttributes;
}
