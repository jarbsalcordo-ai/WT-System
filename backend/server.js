require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const db = require('./db');

// Import Routes
const authRoutes = require('./routes/authRoutes');
const roleRoutes = require('./routes/roleRoutes');
const userRoutes = require('./routes/userRoutes');
const requestRoutes = require('./routes/requestRoutes');
const announcementRoutes = require('./routes/announcementRoutes');
const scheduleRoutes = require('./routes/scheduleRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes
app.get('/', (req, res) => {
    res.send('WatchTower Backend is running!');
});

app.use('/api', authRoutes);
app.use('/api/roles', roleRoutes);
app.use('/users', userRoutes);
app.use('/requests', requestRoutes);
app.use('/announcements', announcementRoutes);
app.use('/schedules', scheduleRoutes);

// --- Run Migrations on Startup ---
// Ideally this should be in a separate script or proper migration tool, 
// but keeping it here as requested by original architecture, just wrapped neatly.
// Or we can rely on the 'migration scripts' folder now. 
// However, to ensure user expectation of 'migration on start' stays effectively similar if they relied on it:
const runMigrations = () => {
    console.log('Server started. Running auto-fix for database consistency...');

    const queries = [
        "ALTER TABLE requests DROP COLUMN su_status",
        "ALTER TABLE requests DROP COLUMN su_approved_by",
        "ALTER TABLE requests DROP COLUMN su_approver",
        "ALTER TABLE requests DROP COLUMN hr_approver",
        "ALTER TABLE requests DROP COLUMN om_approver",
        "ALTER TABLE requests DROP COLUMN approved_by"
    ];

    queries.forEach(query => {
        db.query(query, (err) => {
            if (err) {
                // Ignore if specifically about missing column (already dropped)
                if (err.errno === 1091 || err.code === 'ER_CANT_DROP_FIELD_OR_KEY') {
                    // console.log(`Skipped missing column: ${query}`); 
                } else {
                    console.error(`Migration Warning: ${err.message}`);
                }
            } else {
                console.log(`Auto-fix Applied: ${query}`);
            }
        });
    });
};

runMigrations();

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
