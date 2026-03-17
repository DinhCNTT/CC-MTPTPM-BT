const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('index', { currentPage: 'home' });
});

module.exports = router;
