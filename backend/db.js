const sql = require("mssql");
require("dotenv").config();

const config = {
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  server: process.env.DB_SERVER,
  port: parseInt(process.env.DB_PORT, 10),
  database: process.env.DB_DATABASE,
  options: {
    encrypt: process.env.DB_ENCRYPT === "true",
    trustServerCertificate: true,
  },
};

async function getPool() {
  if (!global.connectionPool) {
    global.connectionPool = await sql.connect(config);
  }
  return global.connectionPool;
}

module.exports = { sql, getPool };
