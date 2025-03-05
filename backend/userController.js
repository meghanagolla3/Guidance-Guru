const db = require("../config/db");

exports.getProfile = (req, res) => {
    const userId = req.user.id;

    db.query("SELECT id, name, email FROM users WHERE id = ?", [userId], (err, results) => {
        if (err) return res.status(500).json({ error: err });

        if (results.length === 0) return res.status(404).json({ message: "User not found" });

        res.status(200).json(results[0]);
    });
};
