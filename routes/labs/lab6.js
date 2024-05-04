const {Router} = require('express');
const {lab6} = require('../../controllers/labs/lab6');

const app = Router();

app.get('/lab6', lab6.getLab);
app.get('/lab6/post', lab6.getPosts);
// app.get('/lab5/login', lab5.getLogin);
// app.post('/lab5/login', lab5.postLogin);
// app.get('/lab5/my-account', lab5.getMyAccount);
// // app.get('/lab5/administrator', lab5.getAdmin);
// app.get('/lab5/logout', lab5.getLogout);

app.all('/lab6/*', (req,res) => {
    res.statusCode = 404;
    res.end('Not found');
});

module.exports = app;
