

const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
    res.render('commente')
});


router.post('/', (req, res) => {
    const { comment } = req.body;
    res.send(`New comment added: ${comment}`);
});



module.exports = router;


