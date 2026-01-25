const db = require('../db');

exports.getRoles = (req, res) => {
    db.query('SELECT name FROM roles ORDER BY name', (err, results) => {
        if (err) {
            return res.status(500).json({ error: 'Database error fetching roles' });
        }
        // Return array of strings
        res.json(results.map(r => r.name));
    });
};
