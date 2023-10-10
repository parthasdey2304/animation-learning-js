const express = require('express');
const app = express();
const path = require('path');
const port = 8080;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, "views"));
app.set('public', path.join(__dirname, "public"));

app.get('/', (req, res) => {
    console.log("Homepage has been loaded");
    res.render('index.ejs');
});

app.listen(port, () => {
    console.log("[INFO] Express app is running on http://localhost:8080");
});