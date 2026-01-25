const mysql = require('mysql2');
const fs = require('fs');
const path = require('path');
require('dotenv').config();

const dbConfig = {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    multipleStatements: true
};

const connection = mysql.createConnection(dbConfig);

const sqlPath = path.join(__dirname, 'database.sql');
const sql = fs.readFileSync(sqlPath, 'utf8');

connection.connect((err) => {
    if (err) {
        console.error('Error connecting to MySQL:', err.message);
        // Try without password if "your_password" is set and failed
        if (dbConfig.password === 'your_password') {
            console.log('Retrying with empty password...');
            const retryConfig = { ...dbConfig, password: '' };
            const retryConnection = mysql.createConnection(retryConfig);
            retryConnection.connect(err2 => {
                if (err2) {
                    console.error('Retry failed:', err2.message);
                    process.exit(1);
                }
                runQuery(retryConnection);
            });
        } else {
            process.exit(1);
        }
        return;
    }
    console.log('Connected to MySQL.');
    runQuery(connection);
});

function runQuery(conn) {
    conn.query(sql, (err, results) => {
        if (err) {
            console.error('Error executing SQL:', err.message);
            process.exit(1);
        }
        console.log('Database initialized successfully!');
        console.log('Results:', results ? results.length : 0, 'statements executed.');
        conn.end();
    });
}
