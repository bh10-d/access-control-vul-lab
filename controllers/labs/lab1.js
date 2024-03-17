const path = require('path');

lab1 = {
    getLab: (req, res)=>{
        res.render('index', {lab: "lab1"});
    },
    getId: (req, res)=>{
        res.end('10');
    },
    getRobots: (req, res)=>{
        res.statusCode = 200;
        res.sendFile(path.join(__dirname, '../../robots.txt'), 'utf8');
    }
}

module.exports = {lab1}