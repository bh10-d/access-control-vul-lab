const { Router } = require('express');
const bodyParser = require("body-parser");
let cookieParser = require('cookie-parser');
const lab1 = require('../routes/labs/lab1');
const lab2 = require('../routes/labs/lab2');
const lab3 = require('../routes/labs/lab3');
const lab5 = require('../routes/labs/lab5');
const lab6 = require('../routes/labs/lab6');
const solve = require('../routes/labs/solve');

// const app = require('express')();

// configure app
const app = Router();

app.use(
    bodyParser.urlencoded({
        extended: true
    })
);
app.use(cookieParser());


// configure routes
app.get('/', (req, res) => {
    res.render('index');
});

app.get('/my-account', (req, res) => {
    res.redirect('/login');
});
app.get('/login', (req, res) => {
    res.render('login');
});
app.post('/login', (req, res) => {
    res.redirect('/login');
})

app.get('/logout', (req, res) => {
    res.statusCode = 404;
    res.end('not found');
})

app.get('/administrator', (req, res) => {
    console.log(req.cookies.admin);
    if(req.cookies.admin == 'true'){
        res.statusCode = 200;
        res.render('administrator');
    }else{
        res.statusCode = 404;
        res.end('not found');
    }
})

// app.all('/*', (req, res)=>{
//     res.statusCode = 404;
//     res.end('Not found');
// })



// configure routes for labs
app.use(lab1);
app.use(lab2);
app.use(lab3);
app.use(lab5);
app.use(lab6);
app.use(solve);

module.exports = app;