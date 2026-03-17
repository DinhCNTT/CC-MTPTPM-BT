const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('blog', { currentPage: 'blog' });
});

module.exports = router;
