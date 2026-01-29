const mysql = require('mysql2');
const fs = require('fs');
const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '.env') });

const db = mysql.createConnection({
    host: process.env.DB_HOST || '127.0.0.1',
    user: process.env.DB_USER || 'admin',
    password: process.env.DB_PASSWORD || 'admin123',
    database: process.env.DB_NAME || 'watchtower_db'
});

const scriptsDir = path.join(__dirname, 'scripts');
if (!fs.existsSync(scriptsDir)) {
    fs.mkdirSync(scriptsDir);
}

// Files to move to scripts/
const filesToMove = [
    'addApprovalColumns.js',
    'addMiddleName.js',
    'check_columns.js',
    'diagnose_db.js',
    'execute_user_sql.js',
    'forceFix.js',
    'init_db.js',
    'list_columns.js',
    'list_columns_v2.js',
    'migrate.js',
    'populateApprovalStatuses.js',
    'remove_position_column.js',
    'setupAdmin.js',
    'setupRoles.js',
    'sync_role_position.js'
];

// Move files
console.log('--- Moving Files ---');
filesToMove.forEach(file => {
    const src = path.join(__dirname, file);
    const dest = path.join(scriptsDir, file);
    if (fs.existsSync(src)) {
        try {
            fs.renameSync(src, dest);
            console.log(`Moved ${file} to scripts/`);
        } catch (e) {
            console.error(`Failed to move ${file}:`, e.message);
        }
    } else {
        console.log(`${file} not found in root (already moved?)`);
    }
});

// Drop Columns
db.connect((err) => {
    if (err) {
        console.error('Connection error:', err.message);
        console.log('Skipping DB cleanup due to connection error.');
        process.exit(0);
    }
    console.log('\n--- Cleaning Database ---');

    const queries = [
        "ALTER TABLE requests DROP COLUMN su_status",
        "ALTER TABLE requests DROP COLUMN su_approved_by",
        "ALTER TABLE requests DROP COLUMN su_approver"
    ];

    let completed = 0;
    const runQuery = (index) => {
        if (index >= queries.length) {
            console.log('Database cleanup finished.');
            db.end();
            process.exit(0);
        }

        const query = queries[index];
        db.query(query, (error) => {
            if (error) {
                if (error.code === 'ER_CANT_DROP_FIELD_OR_KEY') {
                    console.log(`Column already dropped/missing: ${query}`);
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
