const mysql = require('mysql2');
const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '.env') });

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

    const sql = "ALTER TABLE users DROP COLUMN position";

    db.query(sql, (error, results) => {
        if (error) {
            if (error.code === 'ER_CANT_DROP_FIELD_OR_KEY') {
                console.log('Column "position" does not exist or already dropped.');
            } else {
                console.error('Error dropping column:', error.message);
            }
        } else {
            console.log('SUCCESS: Dropped "position" column from "users" table.');
        }
        db.end();
    });
});
