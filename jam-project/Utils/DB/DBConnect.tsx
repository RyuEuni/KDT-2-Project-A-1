import mysql from 'mysql2'

export const DBInfo = mysql.createConnection({
  host:'121.184.34.150',
  database:'login',
  user:'ob',
  password:'ob',
  port:3306
})