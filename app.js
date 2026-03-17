const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

// Set EJS as view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});
// Serve static files from public folder
app.use(express.static(path.join(__dirname, 'public')));

// Parse form data
app.use(express.urlencoded({ extended: true }));

// Routes
const indexRouter = require('./routes/index');
const galleryRouter = require('./routes/gallery');
const newsRouter = require('./routes/news');
const blogRouter = require('./routes/blog');
const contactRouter = require('./routes/contact');

app.use('/', indexRouter);
app.use('/gallery', galleryRouter);
app.use('/news', newsRouter);
app.use('/blog', blogRouter);
app.use('/contact', contactRouter);

// Start server
app.listen(PORT, () => {
  console.log(`GreenAge website running at http://localhost:${PORT}`);
});
