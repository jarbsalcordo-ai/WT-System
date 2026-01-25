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

    db.query(sql, (error, results) => {
        if (error) {
            console.error('SQL Error:', error.message);
        } else {
            console.log('SUCCESS: Table updated with new columns.');
        }
        process.exit(0);
    });
});
