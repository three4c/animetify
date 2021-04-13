/// <reference types="next" />
/// <reference types="next/types/global" />

declare namespace NodeJS {
  interface ProcessEnv {
    readonly MYSQL_HOST: string;
    readonly MYSQL_USER: string;
    readonly MYSQL_PORT: number; //numberを受け付けてくれない
    readonly MYSQL_PASSWORD: string;
    readonly MYSQL_DATABASE: string;
  }
}

declare module '*.scss' {
  const classes: { readonly [key: string]: string };
  export default classes;
}
