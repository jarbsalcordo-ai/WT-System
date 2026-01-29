const mysql = require('mysql2');
const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '../.env') });

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

    const queries = [
        "ALTER TABLE requests DROP COLUMN su_status",
        "ALTER TABLE requests DROP COLUMN su_approved_by",
        "ALTER TABLE requests DROP COLUMN su_approver"
    ];

    let completed = 0;

    const runQuery = (index) => {
        if (index >= queries.length) {
            console.log('Finished dropping columns.');
            db.end();
            process.exit(0);
        }

        const query = queries[index];
        db.query(query, (error) => {
            if (error) {
                if (error.code === 'ER_CANT_DROP_FIELD_OR_KEY') {
                    console.log(`Column not found or already dropped for query: ${query}`);
                } else {
                    console.error(`Error executing "${query}":`, error.message);
                }
            } else {
                console.log(`SUCCESS: Executed "${query}"`);
            }
            runQuery(index + 1);
        });
    };

    runQuery(0);
});
