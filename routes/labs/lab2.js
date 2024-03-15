const {Router} = require('express');
const {lab2} = require('../../controllers/labs/lab2');

const app = Router();

app.get('/lab2', lab2.getLab);

module.exports = app;