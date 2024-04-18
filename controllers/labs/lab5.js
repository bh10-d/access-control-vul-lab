//this lab using horizontal attack

let users = require('../data/users');
let count = 1;
let authentication = false;
let getUsername = '';
lab5 = {
    getLab: (req, res)=>{
        res.render('index', {lab: "/lab5"});
    },
    getLogin: (req, res)=>{
        if(authentication){
            getUsername = req.query.username;
            res.redirect(`/lab5/my-account?username=${getUsername}`);
        }else{
            res.render('login', {lab5: true, lab: "/lab5"});
        }
    },
    postLogin: (req, res)=>{
        //this lab using horizontal attack
        if(count <= 5){
            // console.log(users.find(f => req.body.username == f.username));
            users.map(m => {
                if(m.username == req.body.username && m.password == req.body.password){
                    authentication = true;
                    getUsername = req.body.username;
                    // res.render('account', {lab: "/lab5"});
                }
            });
            if(authentication){
                res.redirect(`/lab5/my-account?id=${getUsername}`);
                // res.render('account', {lab: "/lab5", username: getUsername});
            }else{
                res.redirect('/lab5/login')
            }
        }else{
            res.status(404).end('Not found');
            setTimeout(()=>{
                count = 1; // het thoi gian ma loi 404
            },10000);
        }
    },
    getMyAccount: (req, res) => {
        if(authentication){
            let param = req.query.id
            // console.log(typeof param);
            if(param !== undefined){
                getUsername = req.query.id;
            }
            // console.log(req.query.id);
            // let path = req.url.split('/');
            // console.log(path[1]);
            res.statusCode = 200;
            res.render('account', {lab: "/lab5", username: getUsername});
        }else{
            res.redirect('/lab5/login');
        }
    },
    getLogout : (req,res) => {
        authentication = false;
        res.redirect('/lab5')
    }
}

module.exports = {lab5}