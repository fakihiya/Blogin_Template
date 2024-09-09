const express = require('express');
const router = express.Router();
const connection = require('../config/database');

router.get('/', (req, res) => {
  const query = 'SELECT * FROM posts';
  connection.query(query, (err, results) => {
    if (err) {
      console.error('Error fetching posts:', err);
      return res.status(500).send('Error fetching posts. Details: ' + err.message);
    }
    
    console.log('Posts fetched successfully:', results);
    res.render('commente', { posts: results });
  });
});

router.get('/:id', (req, res) => {
  const postId = req.params.id;
  const postQuery = 'SELECT * FROM posts WHERE id = ?';
  const commentsQuery = 'SELECT * FROM comments WHERE post_id = ?';

  connection.query(postQuery, [postId], (err, postResults) => {
    if (err) {
      console.error('Error fetching post:', err);
      return res.status(500).send('Error fetching post. Details: ' + err.message);
    }
    if (postResults.length === 0) {
      return res.status(404).send('Post not found.');
    }
    const post = postResults[0];

    connection.query(commentsQuery, [postId], (err, commentResults) => {
      if (err) {
        console.error('Error fetching comments:', err);
        return res.status(500).send('Error fetching comments. Details: ' + err.message);
      }
      console.log('Post and comments fetched successfully');
      res.render('post', { post, comments: commentResults });
    });
  });
});

module.exports = router;