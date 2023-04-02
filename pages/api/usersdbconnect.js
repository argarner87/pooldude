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

  // test query:

  try {
    
    const query = 'SELECT * FROM `login_users`'
    const values = []
    const [results] = await dbconn.execute(query, values)
    dbconn.end()
    res.status(200).json({data: results})

  } catch (error) {
    res.status(500).json({error: error.message})
  }

  // res.status(200).json({name: "John Doe"})
  
}
