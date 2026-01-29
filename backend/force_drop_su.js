const mysql = require('mysql2');
const fs = require('fs');
require('dotenv').config();

const log = (msg) => {
    // console.log(msg); // Optional: keep console output
    fs.appendFileSync('db_cleanup_log.txt', msg + '\n');
};

const db = mysql.createConnection({
    host: process.env.DB_HOST || '127.0.0.1',
    user: process.env.DB_USER || 'admin',
    password: process.env.DB_PASSWORD || 'admin123',
    database: process.env.DB_NAME || 'watchtower_db'
});

db.connect((err) => {
    if (err) {
        log('Connection error: ' + err.message);
        process.exit(1);
    }
    log('Connected to DB!');

    const queries = [
        "ALTER TABLE requests DROP COLUMN su_status",
        "ALTER TABLE requests DROP COLUMN su_approved_by",
        "ALTER TABLE requests DROP COLUMN su_approver"
    ];

    const runQuery = (index) => {
        if (index >= queries.length) {
            log('Cleanup sequence finished. Verifying columns...');

            db.query('DESCRIBE requests', (err, results) => {
                if (err) {
                    log('Error describing requests: ' + err.message);
                } else {
                    log('--- Current Columns ---');
                    results.forEach(r => log(r.Field));
                }
                db.end();
                process.exit(0);
            });
            return;
        }

        const query = queries[index];
        log(`Executing: ${query}`);
        db.query(query, (error) => {
            if (error) {
                // ER_CANT_DROP_FIELD_OR_KEY = 1091
                if (error.errno === 1091 || error.code === 'ER_CANT_DROP_FIELD_OR_KEY') {
                    log(` -> SKIPPED (Column already gone)`);
                } else {
                    log(` -> ERROR: ${error.message}`);
                }
            } else {
                log(` -> SUCCESS`);
            }
            runQuery(index + 1);
        });
    };

    runQuery(0);
});
