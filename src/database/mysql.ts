import mysql from 'mysql';
import 'dotenv/config';
const { DB_HOST: host, DB_USER: user, DB_PASSWORD: password, DB_DATABASE: database } = process.env;

const connection = mysql.createConnection({
  host,
  user,
  password,
  database,
});

connection.connect((err) => {
  if (err) {
    throw err.message;
  }
});

export { connection };
