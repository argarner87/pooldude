// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import mysql from "mysql2/promise"

export default async function handler(req, res) {
  
  const dbconn = await mysql.createConnection({
    host:"127.0.0.1",
    database:"users",
    port: '3306',
    user: "root",
    password: "Katrix88"
  })

  res.status(200).json({name: "John Doe"})
}
