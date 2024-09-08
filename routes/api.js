// const express = require('express');
// const router = express.Router();

// module.exports = router;



const express = require('express');
const router = express.Router();
const connection = require('../config/database');

// API routes go here
// For example:
router.get('/posts', (req, res) => {
    const query = 'SELECT * FROM posts';
    connection.query(query, (err, results) => {
        if (err) {
            console.error('Error fetching posts:', err);
            return res.status(500).json({ error: 'Error fetching posts' });
        }
        res.json(results);
    });
});

module.exports = router;




