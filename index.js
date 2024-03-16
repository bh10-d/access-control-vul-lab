const express = require('express');
const app = require('express')();
const path = require('path');
const hbs = require('hbs');

const routes = require('./routes/routes.js');


// view engine configuration
hbs.registerPartials(__dirname + '/views/partials');
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');


// app configuration
app.use(express.static(path.join(__dirname, 'public')));
app.use(routes);


// // routes configuration
// app.get('/',(req, res)=>{
//     res.render('index', {people: "buiduchieu"});
// })

// app.get('/lab1',(req, res)=>{
//     res.
// })

// app.get('/lab1/robots.txt',(req, res)=>{
//     res.status = 200;
//     res.sendFile(path.join(__dirname, 'robots.txt'));
// })

// app.get('/robots.txt',(req, res)=>{
//     res.statusCode = 200;
//     res.sendFile(path.join(__dirname, 'robots.txt'), 'utf8');
// })
// app.get('/administrator',(req, res)=>{
//     res.statusCode = 200;
//     res.setHeader('Content-Type', 'text/html');
//     res.end('<h1>Hello Admin</h1>');
// })

// port configuration
app.listen(3000,()=>{
    console.log('Server is running on port 3000');
})