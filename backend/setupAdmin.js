const db = require('./db');
const bcrypt = require('bcryptjs');
console.log('Starting admin setup...');

const createAdmin = async () => {
    const firstName = 'System';
    const lastName = 'Admin';
    const email = 'admin@watchtower.com';
    const password = 'WT_admin2026@'; // New requested admin password
    const role = 'Admin';
    const companyId = 'WT-ADMIN-001';

    try {
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const query = `
            INSERT INTO users (company_id, first_name, last_name, email, password, role, status, department)
            VALUES (?, ?, ?, ?, ?, ?, 'Active', 'Management')
            ON DUPLICATE KEY UPDATE password = ?
        `;

        db.query(query, [companyId, firstName, lastName, email, hashedPassword, role, hashedPassword], (err, result) => {
            if (err) {
                console.error('Error creating admin:', err);
                process.exit(1);
            }
            console.log('Admin account created/updated successfully!');
            console.log('-------------------------------------------');
            console.log(`Company ID: ${companyId}`);
            console.log(`Password:   ${password}`);
            console.log(`Role:       ${role}`);
            console.log('-------------------------------------------');
            process.exit(0);
        });

    } catch (error) {
        console.error('Script error:', error);
        process.exit(1);
    }
};

createAdmin();
