//this lab using horizontal attack

const path = require('path');
let users = require('../data/users');
let count = 1;
let authentication = false;
let getUsername = '';
let uid = '';
let administrator = false;


solve = {
    getLab: (req, res)=>{
        res.render('index2', {lab: "/solve", username: getUsername, uid:uid, authentication: authentication});
    },
    getRobots: (req, res)=>{
        res.statusCode = 200;
        res.sendFile(path.join(__dirname, '../../robots.txt'), 'utf8');
    },
    getLogin: (req, res)=>{
        if(authentication){
            getUsername = req.query.username;
            res.redirect('/solve/my-account');
        }else{
            res.render('login', {lab6: true, lab: "/solve"});
        }
    },
    postLogin: (req, res)=>{
        if(count <= 5){
            users.map(m => {
                if(m.username == req.body.username && m.password == req.body.password){
                    authentication = true;
                    uid = m.uid;
                    getUsername = m.uid;
                }
            });
            if(authentication){
                res.redirect(`/solve/my-account?id=${getUsername}`);
            }else{
                res.redirect('/solve/login')
            }
        }else{
            res.status(404).end('Not found');
            setTimeout(()=>{
                count = 1;
            },10000);
        }
    },
    getMyAccount: (req, res)=>{
        if(authentication){
            let param = req.query.id
            if(param !== undefined){
                if(req.query.id != getUsername){
                    res.redirect('/solve/logout')
                }
            }

            detectUser = users.filter(user => user.uid === getUsername)
            if(detectUser.length != 0){
                uid = detectUser[0].uid;
                username = detectUser[0].username;  
                if(detectUser[0].admin){
                    administrator = true;
                    res.redirect('/solve/administrator')
                    // res.statusCode = 200;
                    // res.render('administrator', {lab: "/solve", username: username, uid: uid, authentication: authentication});
                }else{
                    res.statusCode = 200;
                    res.render('account', {lab: "/solve", username: username, uid: uid, authentication: authentication});
                }
            }else{
                console.log("Warning");
            }
        }else{
            res.redirect('/solve/login');
        }
    },
    getAdmin: (req, res) => {
        if(authentication && administrator){
            res.statusCode = 200;
            res.render('administrator', {lab: "/solve", username: username, uid: uid, authentication: authentication});
        }else{
            res.statusCode = 404;
            res.end('Not found');
            setTimeout(()=>{
                res.redirect('/solve')
            },3000)
        }
    },
    getLogout : (req,res) => {
        authentication = false;
        uid = ''
        getUsername = ''
        res.redirect('/solve')
    }
}

module.exports = {solve}