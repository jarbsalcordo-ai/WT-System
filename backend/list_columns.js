const mysql = require('mysql2');
require('dotenv').config();

const db = mysql.createConnection({
    host: process.env.DB_HOST || '127.0.0.1',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || '',
    database: process.env.DB_NAME || 'watchtower_db'
});

db.connect((err) => {
    if (err) {
        console.error('Connection error:', err.message);
        process.exit(1);
    }
    console.log('Connected!');

    const queries = [
        'DESCRIBE users',
        'DESCRIBE requests'
    ];

    let completed = 0;

    queries.forEach(query => {
        db.query(query, (error, results) => {
            if (error) {
                console.error(`Error describing table for query "${query}":`, error.message);
            } else {
                console.log(`\nColumns for query "${query}":`);
                results.forEach(row => {
                    console.log(`${row.Field} (${row.Type})`);
                });
            }
            completed++;
            if (completed === queries.length) {
                db.end();
            }
        });
    });
});
