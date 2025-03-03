const express = require('express');
const app = express();

// Middleware (if needed)
app.use(express.json());

// Example API route (Modify as needed)
app.get('/api/users', (req, res) => {
  res.json([{ id: 1, name: 'John Doe' }]);
});

// ✅ Add this to handle the root `/`
app.get('/', (req, res) => {
  res.send('Backend is running!');
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
