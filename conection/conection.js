// db.js
const sql = require('mssql');
require('dotenv').config();

const config = {
  server: process.env.SERVERSQL,
  user: process.env.USERSQL,
  password: process.env.PASSWORDSQ,
  database: process.env.DBSQL,
  options: {
    encrypt: false, // Puede ser necesario dependiendo de tu configuración de SQL Server
  },
};

const pool = new sql.ConnectionPool(config);

async function getConnection() {
  try {
    await pool.connect();
    console.log('Database connection established');
  } catch (err) {
    console.error('Error connecting to database', err);
  }
}

module.exports = { getConnection, pool };
