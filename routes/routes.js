const { Router } = require('express');


const app = Router(); 
  
app.get('/', (req, res) => { 
    res.render('index', {people: "buiduchieu"});
});
app.get('/lab1', (req, res) => { 
    res.render('index', {people: "buiduchieu"});
});
app.get('/lab2', (req, res) => { 
    res.render('index', {people: "buiduchieu"});
});
app.get('/lab3', (req, res) => { 
    res.render('index', {people: "buiduchieu"});
});
app.get('/lab4', (req, res) => { 
    res.render('index', {people: "buiduchieu"});
});
app.get('/lab5', (req, res) => { 
    res.render('index', {people: "buiduchieu"});
}); 
  
module.exports = app;