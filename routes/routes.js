const { Router } = require('express');
const lab1 = require('../routes/labs/lab1');
const lab2 = require('../routes/labs/lab2');

// const app = require('express')();

const app = Router();

// configure routes
app.get('/', (req, res) => {
    res.render('index');
});

app.get('/my-account', (req, res) => {
    res.render('account');
});

app.post('/login', (req, res) => {
    res.statusCode = 404;
})

app.get('/logout', (req, res) => {
    res.statusCode = 404;
    res.end('not found');
})

app.get('/adminustrator', (req, res) => {
    res.statusCode = 200;
    res.end('adminustrator');
})

app.all('/*', (req, res)=>{
    res.statusCode = 404;
    res.end('Not found');
})

// configure routes for labs
app.use(lab1);
app.use(lab2);

module.exports = app;