const db = require('../db');

exports.getAnnouncements = (req, res) => {
    db.query('SELECT * FROM announcements ORDER BY created_at DESC', (err, results) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(results);
    });
};

exports.createAnnouncement = (req, res) => {
    const { title, description, type, date, time, author, image } = req.body;
    const sql = 'INSERT INTO announcements (title, description, type, date_event, time_event, author, image_url) VALUES (?, ?, ?, ?, ?, ?, ?)';
    db.query(sql, [title, description, type, date, time, author, image], (err, result) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json({ message: 'Announcement posted', id: result.insertId });
    });
};
