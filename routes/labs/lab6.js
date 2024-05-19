const {Router} = require('express');
const {lab6} = require('../../controllers/labs/lab6');

const app = Router();

app.get('/lab6', lab6.getLab);
app.get('/lab6/post', lab6.getPosts);
app.get('/lab6/blogs', lab6.getBlog);
app.get('/lab6/login', lab6.getLogin);
app.post('/lab6/login', lab6.postLogin);
app.get('/lab6/my-account', lab6.getMyAccount);
// // app.get('/lab6/administrator', lab6.getAdmin);
app.get('/lab6/logout', lab6.getLogout);

app.all('/lab6/*', (req,res) => {
    res.statusCode = 404;
    res.end('Not found');
});

module.exports = app;
