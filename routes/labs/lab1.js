const {Router} = require('express');
const {lab1} = require('../../controllers/labs/lab1');

const app = Router();

app.get('/lab1', lab1.getLab);
app.get('/lab1/id', lab1.getId);
app.get('/lab1/robots.txt', lab1.getRobots);
app.all('/lab1/*', (req, res)=>{
    res.statusCode = 404;
    res.end('Not found');
});

module.exports = app;