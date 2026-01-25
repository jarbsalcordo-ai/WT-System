const mysql = require('mysql2');
require('dotenv').config();

const db = mysql.createConnection({
    host: process.env.DB_HOST || '127.0.0.1',
    user: process.env.DB_USER || 'admin',
    password: process.env.DB_PASSWORD || 'admin123',
    database: process.env.DB_NAME || 'watchtower_db'
});

db.connect((err) => {
    if (err) {
        console.error('Connection error:', err.message);
        process.exit(1);
    }
    console.log('Connected!');

    db.query(`SHOW COLUMNS FROM requests`, (error, results) => {
        if (error) {
            console.error('Error:', error.message);
        } else {
            console.log('Columns in requests table:');
            results.forEach(col => console.log(col.Field));
        }
        process.exit(0);
    });
});
