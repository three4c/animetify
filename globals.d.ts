declare namespace NodeJS {
  interface ProcessEnv {
    readonly MYSQL_HOST: string;
    readonly MYSQL_USER: string;
    /** numberを受け付けてくれない */
    readonly MYSQL_PORT: any;
    readonly MYSQL_PASSWORD: string;
    readonly MYSQL_DATABASE: string;
  }
}
