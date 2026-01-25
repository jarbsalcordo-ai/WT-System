const db = require('./db');

console.log('Adding multi-level approval columns to requests table...');

const alterQueries = [
    "ALTER TABLE requests ADD COLUMN hr_status ENUM('Pending', 'Approved', 'Rejected', 'Waiting') DEFAULT 'Pending' AFTER status",
    "ALTER TABLE requests ADD COLUMN su_status ENUM('Pending', 'Approved', 'Rejected', 'Waiting') DEFAULT 'Waiting' AFTER hr_status",
    "ALTER TABLE requests ADD COLUMN om_status ENUM('Pending', 'Approved', 'Rejected', 'Waiting') DEFAULT 'Waiting' AFTER su_status",
    "ALTER TABLE requests ADD COLUMN approved_by VARCHAR(255) AFTER om_status"
];

async function runMigrations() {
    for (const query of alterQueries) {
        try {
            await new Promise((resolve, reject) => {
                db.query(query, (err) => {
                    if (err) {
                        if (err.code === 'ER_DUP_COLUMN_NAME') {
                            console.log(`Column already exists, skipping...`);
                            resolve();
                        } else {
                            reject(err);
                        }
                    } else {
                        resolve();
                    }
                });
            });
        } catch (err) {
            console.error('Migration error:', err.message);
            process.exit(1);
        }
    }
    console.log('Multi-level approval columns added successfully!');
    process.exit(0);
}

runMigrations();
