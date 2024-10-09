const mysql = require('mysql2');

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'tu_contraseña',
  database: 'casino_db'
});

db.connect((err) => {
  if (err) {
    console.error('Error connecting to database', err);
    return;
  }
  console.log('Connected to database');
});
