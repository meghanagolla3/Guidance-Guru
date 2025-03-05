const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();
const PORT = 5001;

// Middleware
app.use(cors());
app.use(express.json());

// Database Connection
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Roshan@143',  // Replace with your MySQL password
    database: 'guidanceguru'   // Replace with your actual database name
});

db.connect((err) => {
    if (err) {
        console.error('❌ Database connection failed:', err);
    } else {
        console.log('✅ Connected to MySQL database');
    }
});

// Fix favicon error
app.get('/favicon.ico', (req, res) => res.status(204).end());

// ✅ GET route to fetch users
app.get('/users', (req, res) => {
    const sql = 'SELECT * FROM users';

    db.query(sql, (err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.status(200).json(results);
    });
});

// ✅ POST route to insert users
app.post('/users', (req, res) => {
    const { name, email, password } = req.body;
    const sql = 'INSERT INTO users (name, email, password) VALUES (?, ?, ?)';

    db.query(sql, [name, email, password], (err, result) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.status(201).json({ message: 'User added!', userId: result.insertId });
    });
});

// Start Server
app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
});
