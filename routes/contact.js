const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('contact', { currentPage: 'contact' });
});

router.post('/', (req, res) => {
    const { author, email, subject, text } = req.body;
    console.log('Contact form submitted:', { author, email, subject, text });
    res.render('contact', { currentPage: 'contact', success: true });
});

module.exports = router;
