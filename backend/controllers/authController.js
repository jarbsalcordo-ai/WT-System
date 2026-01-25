const db = require('../db');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

exports.login = (req, res) => {
    const { identifier, password } = req.body;

    if (!identifier || !password) {
        return res.status(400).json({ error: 'All fields are required' });
    }

    // Unified Login Logic: Search by Company ID (or Email if we wanted, but sticking to company_id as primary)
    const query = 'SELECT * FROM users WHERE company_id = ?';
    const queryParams = [identifier];

    db.query(query, queryParams, async (err, results) => {
        if (err) return res.status(500).json({ error: err.message });

        if (results.length === 0) {
            return res.status(401).json({ error: 'Invalid Company ID or Password' });
        }

        const user = results[0];

        // Check if password matches (support both hashed and legacy plain text for transition)
        let isMatch = false;
        if (user.password.startsWith('$2a$') || user.password.startsWith('$2b$')) {
            isMatch = await bcrypt.compare(password, user.password);
        } else {
            // Fallback for legacy plain text passwords
            isMatch = (password === user.password);
        }

        if (!isMatch) {
            return res.status(401).json({ error: 'Invalid password' });
        }

        const { password: _, ...userWithoutPassword } = user;

        const token = jwt.sign(
            { id: user.id, role: user.role, company_id: user.company_id },
            process.env.JWT_SECRET || 'secret_key_fallback',
            { expiresIn: '24h' }
        );

        res.json({
            message: 'Login successful',
            user: userWithoutPassword,
            token: token
        });
    });
};
