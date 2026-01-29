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
    console.log('Connected to database.');

    const sql = 'UPDATE users SET position = role';

    db.query(sql, (error, results) => {
        if (error) {
            console.error('Error syncing role and position:', error.message);
            process.exit(1);
        } else {
            console.log(`SUCCESS: Synced role and position for ${results.changedRows} users.`);
            process.exit(0);
        }
    });
});
