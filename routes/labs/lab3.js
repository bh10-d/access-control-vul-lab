// lien quan den cookie

const {Router} = require('express');
const {lab3} = require('../../controllers/labs/lab3');

const app = Router();

app.get('/lab3', lab3.getLab);
// app.post('/lab3', lab3.postLogin);

app.all('/lab3/*', (req,res) => {
    res.statusCode = 404;
    res.end('Not found');
});

module.exports = app;