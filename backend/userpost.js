const express = require('express');
const bcrypt = require('bcrypt'); // Import bcrypt
const db = require('./db'); // Import MySQL connection

const router = express.Router();

// POST: Create a new user with password hashing
router.post('/users', async (req, res) => {
    try {
        const { name, email, password } = req.body;
        if (!name || !email || !password) {
            return res.status(400).json({ error: 'All fields are required' });
        }

        // Hash the password before storing
        const hashedPassword = await bcrypt.hash(password, 10);

        const sql = 'INSERT INTO users (name, email, password) VALUES (?, ?, ?)';
        db.query(sql, [name, email, hashedPassword], (err, result) => {
            if (err) {
                return res.status(500).json({ error: err.message });
            }
            res.status(201).json({ message: 'User added!', userId: result.insertId });
        });

    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
});

module.exports = router;
