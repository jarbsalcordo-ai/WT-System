const db = require('./db');

console.log('Adding middle_name column to users table...');

const alterQuery = "ALTER TABLE users ADD COLUMN middle_name VARCHAR(100) AFTER first_name";

db.query(alterQuery, (err) => {
    if (err) {
        if (err.code === 'ER_DUP_COLUMN_NAME') {
            console.log('middle_name column already exists.');
            process.exit(0);
        }
        console.error('Error adding middle_name column:', err.message);
        process.exit(1);
    }
    console.log('middle_name column added successfully!');
    process.exit(0);
});
