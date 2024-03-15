const {Router} = require('express');
const {lab1} = require('../../controllers/labs/lab1');

const app = Router();

app.get('/lab1', lab1.getLab);
app.get('/lab1/id', lab1.getId);

module.exports = app;