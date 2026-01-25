const db = require('../db');

exports.getRequests = (req, res) => {
    const userId = req.query.userId;
    let query = 'SELECT r.*, u.first_name, u.last_name, u.company_id FROM requests r JOIN users u ON r.user_id = u.id ORDER BY r.created_at DESC';
    let params = [];

    if (userId) {
        query = 'SELECT r.*, u.first_name, u.last_name, u.company_id FROM requests r JOIN users u ON r.user_id = u.id WHERE r.user_id = ? ORDER BY r.created_at DESC';
        params = [userId];
    }

    db.query(query, params, (err, results) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(results);
    });
};

exports.createRequest = (req, res) => {
    const { userId, type, details, reason, meta } = req.body;

    if (!userId || !type || !reason) {
        return res.status(400).json({ error: 'Missing required fields' });
    }

    const sql = 'INSERT INTO requests (user_id, type, details, reason, meta_data, status) VALUES (?, ?, ?, ?, ?, "Pending")';
    db.query(sql, [userId, type, details, reason, JSON.stringify(meta || {})], (err, result) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json({ message: 'Request submitted successfully', id: result.insertId });
    });
};

exports.updateRequestStatus = (req, res) => {
    const { id } = req.params;
    const { status, role, adminName } = req.body;

    let column = 'status';
    if (role === 'Department Head') column = 'dh_status';
    else if (role === 'HR Manager') column = 'hr_status';
    else if (role === 'Operations Manager') column = 'om_status';

    let approverColumn = 'approved_by';
    if (role === 'Department Head') approverColumn = 'dh_approved_by';
    else if (role === 'HR Manager') approverColumn = 'hr_approved_by';
    else if (role === 'Operations Manager') approverColumn = 'om_approved_by';

    const updateRoleSql = `UPDATE requests SET ${column} = ?, ${approverColumn} = ? WHERE id = ?`;
    db.query(updateRoleSql, [status, adminName || 'System', id], (err, result) => {
        if (err) {
            console.error('SQL Update Error:', err.message);
            return res.status(500).json({ error: `Update failed: ${err.message}` });
        }

        if (result.affectedRows === 0) {
            return res.status(404).json({ error: 'Request not found' });
        }

        // Fetch the updated request to calculate overall status
        db.query('SELECT * FROM requests WHERE id = ?', [id], (err2, results2) => {
            if (err2 || results2.length === 0) {
                console.error('Error fetching request for status calculation:', err2);
                return res.json({ message: 'Request status updated successfully' }); // Continue anyway
            }

            const reqData = results2[0];
            const { dh_status, hr_status, om_status } = reqData;

            let newOverallStatus = 'Pending';

            // Dynamic Approval Logic based on Type
            const type = reqData.type;
            let requiredApprovals = [];

            // Define required approvers based on type
            if (type === 'Undertime Request' || type === 'Leave Request') {
                requiredApprovals = ['dh_status', 'hr_status', 'om_status'];
            } else if (type === 'Shift Swap Request' || type === 'Overtime Request') {
                requiredApprovals = ['hr_status', 'om_status'];
            } else {
                // Fallback for unknown types
                requiredApprovals = ['dh_status', 'hr_status', 'om_status'];
            }

            // Check statuses
            const allApproved = requiredApprovals.every(field => reqData[field] === 'Approved');
            const anyRejected = requiredApprovals.some(field => reqData[field] === 'Rejected');

            if (anyRejected) {
                newOverallStatus = 'Rejected';
            } else if (allApproved) {
                newOverallStatus = 'Approved';
            }

            // Update overall status if it changed
            if (reqData.status !== newOverallStatus) {
                db.query('UPDATE requests SET status = ? WHERE id = ?', [newOverallStatus, id], (err3) => {
                    if (err3) console.error('Error updating overall status:', err3);
                });
            }

            res.json({ message: 'Request status updated successfully', overallStatus: newOverallStatus });
        });
    });
};
