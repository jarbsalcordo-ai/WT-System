const db = require('./db');
const queries = [
    "ALTER TABLE requests ADD COLUMN hr_status ENUM('Pending', 'Approved', 'Rejected', 'Waiting') DEFAULT 'Pending' AFTER status",
    "ALTER TABLE requests ADD COLUMN su_status ENUM('Pending', 'Approved', 'Rejected', 'Waiting') DEFAULT 'Waiting' AFTER hr_status",
    "ALTER TABLE requests ADD COLUMN om_status ENUM('Pending', 'Approved', 'Rejected', 'Waiting') DEFAULT 'Waiting' AFTER su_status",
    "ALTER TABLE requests ADD COLUMN approved_by VARCHAR(255) AFTER om_status"
];

async function run() {
    console.log('Starting migration...');
    for (const q of queries) {
        try {
            await new Promise((resolve, reject) => {
                db.query(q, (err) => {
                    if (err) reject(err);
                    else resolve();
                });
            });
            console.log('Migrated: ' + q);
        } catch (e) {
            console.log('Skipped/Error: ' + e.message);
        }
    }
    console.log('Migration finished.');
    process.exit(0);
}

run();
