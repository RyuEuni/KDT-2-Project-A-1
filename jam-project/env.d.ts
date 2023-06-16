declare namespace NodeJS {
  interface ProcessEnv {
    APIKey: string
    APISecret: string
    APIAccNo: string

    MysqlPort: string
    MysqlHost: string
    MysqlUser: string
    MysqlPassword: string
    MysqlDatabase: string

    SecretKey: string
  }
}