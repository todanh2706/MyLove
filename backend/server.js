const express = require('express');
const path = require('path');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Serve static files from the React app (when built)
app.use(express.static(path.join(__dirname, '../frontend/dist')));

// Simple API endpoint
app.get('/api/message', (req, res) => {
    res.json({ message: "I love you more than words can say. ❤️" });
});

// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
app.use((req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/dist/index.html'));
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
