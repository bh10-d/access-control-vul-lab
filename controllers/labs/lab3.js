let {users} = require('../data/users');
let count = 1;
let authentication = false;
lab3 = {
    getLab: (req, res)=>{
        res.render('index', {lab: "/lab3"});
    },
    getLogin: (req, res)=>{
        if(authentication){
            res.redirect('/lab3/my-account');
        }else{
            res.render('login', {lab3: true, lab: "/lab3", authentication: authentication});
        }
    },
    postLogin: (req, res)=>{
        if(count <= 5){
            if(req.body.username == 'buiduchieu' && req.body.password == 'MyP@ssW0rd'){
                res.cookie('admin', true);
                res.cookie('session', req.body.csrf); // mo phong
                res.redirect('/lab3/administrator');
                authentication = true;
            }else if(req.body.username == 'hieu' && req.body.password == 'hieu'){
                res.cookie('admin', false);
                res.cookie('session', req.body.csrf); // mo phong
                res.redirect('/lab3/my-account');
                authentication = true;
            }else{
                count += 1;
                res.redirect('/lab3/login');
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
            let path = req.url.split('/');
            // console.log(path[1]);
            res.statusCode = 200;
            res.render('account', {lab: "/lab3", authentication:authentication});
        }else{
            res.redirect('/lab3/login');
        }
    },
    getAdmin: (req, res) => {
        if(req.cookies.admin == 'true'){
            res.statusCode = 200;
            res.render('administrator');
        }else{
            res.statusCode = 404;
            res.end('Not found');
        }
    },
    getLogout: (req, res) => {
        res.clearCookie('admin');
        res.clearCookie('session');
        res.redirect('/lab3/login');
        authentication = false;
    }
}

module.exports = {lab3}