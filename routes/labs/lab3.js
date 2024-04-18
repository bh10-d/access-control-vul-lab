// lien quan den cookie

const {Router} = require('express');
const {lab3} = require('../../controllers/labs/lab3');

const app = Router();

app.get('/lab3', lab3.getLab);
app.get('/lab3/login', lab3.getLogin);
app.post('/lab3/login', lab3.postLogin);
app.get('/lab3/my-account', lab3.getMyAccount);
app.get('/lab3/administrator', lab3.getAdmin);
app.get('/lab3/logout', lab3.getLogout);

app.all('/lab3/*', (req,res) => {
    res.statusCode = 404;
    res.end('Not found');
});

module.exports = app;
