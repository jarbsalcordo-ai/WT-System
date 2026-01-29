const db = require('./db');

console.log('Updating existing requests with multi-level statuses...');

const updates = [
    ["Approved", "Pending", "Waiting", 1],
    ["Approved", "Approved", "Approved", 2],
    ["Rejected", "Waiting", "Waiting", 3]
];

async function updateRequests() {
    for (const [hr, su, om, id] of updates) {
        await new Promise((resolve) => {
            db.query("UPDATE requests SET hr_status = ?, su_status = ?, om_status = ? WHERE id = ?", [hr, su, om, id], (err) => {
                if (err) console.error(`Error updating request ${id}:`, err.message);
                resolve();
            });
        });
    }
    console.log('Requests updated successfully!');
    process.exit(0);
}

updateRequests();
