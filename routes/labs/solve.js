const {Router} = require('express');
const {solve} = require('../../controllers/labs/solve');

const app = Router();

app.get('/solve', solve.getLab);
app.get('/solve/robots.txt', solve.getRobots)
app.get('/solve/login', solve.getLogin);
app.post('/solve/login', solve.postLogin);
app.get('/solve/my-account', solve.getMyAccount);
app.get('/solve/administrator', solve.getAdmin);
app.get('/solve/logout', solve.getLogout);

app.all('/solve/*', (req,res) => {
    res.statusCode = 404;
    res.end('Not found');
});

module.exports = app