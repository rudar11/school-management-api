import mysql from 'mysql2/promise'; 



const db = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

//  connection TEST
async function testDB() {
  try {
    const [rows] = await db.query('SELECT 1');
    console.log(' Database connected successfully!');
  } catch (err) {
    console.error('Database connection failed:', err.message);
  }
}

testDB(); // call it once

export default db;