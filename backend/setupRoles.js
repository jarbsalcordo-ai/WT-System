const db = require('./db');

const roles = [
    'Employee',
    'HR Manager',
    'Department Head',
    'Officer',
    'Operations Manager',
    'Admin',
    'Manager'
];

const createTableQuery = `
CREATE TABLE IF NOT EXISTS roles (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL UNIQUE
)
`;

db.query(createTableQuery, (err) => {
    if (err) {
        console.error('Error creating roles table:', err);
        process.exit(1);
    }
    console.log('Roles table created or already exists.');

    // Prepare insert logic
    let completed = 0;
    roles.forEach(role => {
        const insertQuery = 'INSERT IGNORE INTO roles (name) VALUES (?)';
        db.query(insertQuery, [role], (err) => {
            if (err) console.error(`Error inserting role ${role}:`, err);
            else console.log(`Role verified: ${role}`);

            completed++;
            if (completed === roles.length) {
                console.log('Role setup completed.');
                process.exit(0);
            }
        });
    });
});
