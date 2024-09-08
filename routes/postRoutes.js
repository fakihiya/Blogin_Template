// const express = require('express');
// const router = express.Router();
// const connection = require('../config/database');

// router.get('/', (req, res) => {
//     const query = 'SELECT * FROM posts';
//     connection.query(query, (err, results) => {
//         if (err) {
//             console.error('Error fetching posts:', err);
//             return res.status(500).send('Error fetching posts.');
//         }
//         res.render('commente', { posts: results });
//     });
// });

// module.exports = router;



const express = require('express');
const router = express.Router();
const connection = require('../config/database');

router.get('/', (req, res) => {
    const query = 'SELECT * FROM posts';
    connection.query(query, (err, results) => {
        if (err) {
            console.error('Error fetching posts:', err);
            return res.status(500).send('Error fetching posts.');
        }
        res.render('commente', { posts: results });
    });
});

module.exports = router;