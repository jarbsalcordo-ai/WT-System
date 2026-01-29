const mysql = require('mysql2');
require('dotenv').config();

console.log('--- Database Connection Diagnostic ---');
console.log(`Host: ${process.env.DB_HOST}`);
console.log(`User: ${process.env.DB_USER}`);
console.log(`Password: ${process.env.DB_PASSWORD ? '******' : '(empty)'}`);
console.log(`Database: ${process.env.DB_NAME}`);

const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD
});

connection.connect((err) => {
    if (err) {
        console.error('\n[NON-FATAL] Connection to server failed:');
        console.error(`Code: ${err.code}`);
        console.error(`Message: ${err.message}`);

        if (err.code === 'ER_ACCESS_DENIED_ERROR') {
            console.log('\nSUGGESTION: Your username or password in .env is incorrect.');
            if (process.env.DB_USER === 'root') {
                console.log('For local XAMPP/WAMP, try clearing the DB_PASSWORD in .env so it is empty.');
                console.log("If you set a password for root, ensure it specifically matches.");
            }
        }
        process.exit(1);
    }
    console.log('\n[SUCCESS] Connected to MySQL server successfully!');
    connection.end();
    process.exit(0);
});
