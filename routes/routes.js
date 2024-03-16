const { Router } = require('express');
const bodyParser = require("body-parser");
let cookieParser = require('cookie-parser');
const lab1 = require('../routes/labs/lab1');
const lab2 = require('../routes/labs/lab2');
const lab3 = require('../routes/labs/lab3');

// const app = require('express')();

let count = 1;

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
    res.render('account');
});
app.get('/login', (req, res) => {
    res.render('login');
});
app.post('/login', (req, res) => {
    if(count <= 5){ // chong brute force password
        res.cookie('admin', false);
        res.cookie('session', req.body.csrf); // mo phong
        console.log(req.body);
        if(req.body.username == 'buiduchieu' && req.body.password == 'buiduchieu'){
            // res.cookie('admin', true);
            // res.cookie('session', req.body.csrf); // mo phong
            // res.redirect('/administrator');
            res.redirect('/my-account');
        }else{
            count += 1;
            res.render('login');
        }
        console.log(count);
    }else{
        res.statusCode = 404;
        res.end('not found');
        setTimeout(()=>{
            count = 1; // het thoi gian ma loi 404
        }, 10000)
    }
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

module.exports = app;