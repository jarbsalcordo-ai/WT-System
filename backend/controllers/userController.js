const db = require('../db');
const bcrypt = require('bcryptjs');

exports.createUser = async (req, res) => {
    const { companyId, firstName, middleName, lastName, email, role, department, birthdate, status } = req.body;

    if (!companyId || !firstName || !lastName || !email || !role) {
        return res.status(400).json({ error: 'Missing required fields (including Company ID)' });
    }

    try {
        const defaultRawPassword = birthdate ? `${lastName}${birthdate}` : 'password123';
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(defaultRawPassword, salt);

        const sql = `INSERT INTO users (company_id, first_name, middle_name, last_name, email, birthdate, password, role, status, department) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;
        const values = [companyId, firstName, middleName || '', lastName, email, birthdate, hashedPassword, role, status || 'Active', department || 'N/A'];

        db.query(sql, values, (err, result) => {
            if (err) {
                if (err.code === 'ER_DUP_ENTRY') {
                    return res.status(400).json({ error: 'Email or Company ID already exists.' });
                }
                return res.status(500).json({ error: err.message });
            }

            res.json({
                message: 'User created successfully',
                user: {
                    id: result.insertId,
                    company_id: companyId,
                    first_name: firstName,
                    last_name: lastName,
                    email: email,
                    role: role,
                    tempPassword: defaultRawPassword
                }
            });
        });
    } catch (error) {
        res.status(500).json({ error: 'Internal server error: ' + error.message });
    }
};

exports.updateUser = (req, res) => {
    const { id } = req.params;
    const { firstName, middleName, lastName, email, birthdate, role, department, status } = req.body;

    const sql = 'UPDATE users SET first_name=?, middle_name=?, last_name=?, email=?, birthdate=?, role=?, department=?, status=? WHERE id=?';
    db.query(sql, [firstName, middleName || '', lastName, email, birthdate, role, department, status, id], (err, result) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json({ message: 'User updated successfully' });
    });
};

exports.getUsers = (req, res) => {
    db.query('SELECT * FROM users ORDER BY created_at DESC', (err, results) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(results);
    });
};
