const {Router} = require('express');
const {lab2} = require('../../controllers/labs/lab2');

const app = Router();

app.get('/lab2', lab2.getLab);
app.get('/lab2/administrator', lab2.getAdmin);

app.all('/lab2/*', (req,res) => {
    res.statusCode = 404;
    res.end('Not found');
});

module.exports = app;