const db = require('../db');

exports.getSchedules = (req, res) => {
    db.query('SELECT * FROM schedules', (err, results) => {
        if (err) return res.status(500).json({ error: err.message });

        const formatted = results.map(s => {
            let names = "Unknown";
            try {
                const ids = typeof s.user_ids === 'string' ? JSON.parse(s.user_ids) : s.user_ids;
                if (Array.isArray(ids)) {
                    names = ids.join(', ');
                }
            } catch (e) { }

            return {
                names: names,
                mon: s.mon, tue: s.tue, wed: s.wed, thu: s.thu, fri: s.fri, sat: s.sat, sun: s.sun
            };
        });

        res.json(formatted);
    });
};
