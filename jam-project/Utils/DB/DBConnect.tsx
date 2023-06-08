import mysql from 'mysql2'
import dotenv from 'dotenv'

dotenv.config({ path: '../../.env' })

// console.log(process.env.MysqlHost)

export const DBInfo = mysql.createConnection({
  host: process.env.MysqlHost,
  database: process.env.MysqlDatabase,
  user: process.env.MysqlUser,
  password: process.env.MysqlPassword,
  port: Number(process.env.MysqlPort)
})