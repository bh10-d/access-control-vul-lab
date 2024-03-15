const { Router } = require('express');
const lab1 = require('../routes/labs/lab1');
const lab2 = require('../routes/labs/lab2');

// const app = require('express')();

const app = Router();

app.get('/', (req, res) => {
    res.render('index');
});

app.use(lab1);
app.use(lab2);

module.exports = app;