const mysql = require('mysql2');
require('dotenv').config();

const db = mysql.createConnection({
    host: '127.0.0.1',
    user: 'admin',
    password: 'WT_admin2026@',
    database: 'watchtower_db'
});

db.query(sql, (err) => {
    if (err) {
        console.log('Error or duplicate:', err.message);
    } else {
        console.log('Columns added successfully!');
    }
    process.exit(0);
});
