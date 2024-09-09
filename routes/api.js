const express = require('express');
const router = express.Router();
const connection = require('../config/database');

// Add a new comment to a post
router.post('/posts/:postId/comments', (req, res) => {
  const postId = req.params.postId;
  const { content, userId } = req.body;
  const query = 'INSERT INTO comments (post_id, user_id, comment) VALUES (?, ?, ?)';
  connection.query(query, [postId, userId, content], (err, result) => {
    if (err) {
      console.error('Error adding comment:', err);
      if (err.code === 'ER_NO_REFERENCED_ROW_2') {
        return res.status(400).json({ error: 'Invalid post ID or user ID' });
      } else {
        return res.status(500).json({ error: 'Error adding comment' });
      }
    }
    res.status(201).json({ id: result.insertId, post_id: postId, user_id: userId, comment: content });
  });
});

module.exports = router;