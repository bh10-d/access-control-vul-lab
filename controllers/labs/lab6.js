//this lab using horizontal attack

let users = require('../data/users');
let count = 1;
let authentication = false;
let getUsername = '';
let uid = '';


lab6 = {
    getLab: (req, res)=>{
        res.render('index2', {lab: "/lab6", username: getUsername, uid:uid, authentication: authentication});
    },
    getPosts: (req, res)=>{
        getPostId = req.query.postId;
        // console.log(getPostId);
        res.render('blog', {lab: "/lab6", postId: getPostId, uid:uid, authentication: authentication});
    },
    getBlog: (req, res)=>{
        // console.log(req.query.userId);

        detectUser = users.filter(f =>f.uid === req.query.userId)

        if(detectUser.length != 0){
            res.render('author', {lab: "/lab6", getUsername: detectUser[0].username, uid: uid, authentication: authentication});
        }else{
            res.render('author', {lab: "/lab6", getUsername: "Bo tay ra ban ey", authentication: authentication});
        }

    },
    getLogin: (req, res)=>{
        if(authentication){
            getUsername = req.query.username;
            res.redirect('/lab6/my-account');
        }else{
            res.render('login', {lab6: true, lab: "/lab6"});
        }
    },
    postLogin: (req, res)=>{
        if(count <= 5){
            // console.log(users.find(f => req.body.username == f.username));
            users.map(m => {
                if(m.username == req.body.username && m.password == req.body.password){
                    authentication = true;
                    uid = m.uid;
                    // getUsername = req.body.username;
                    getUsername = m.uid;
                    // res.render('account', {lab: "/lab5"});
                    // console.log(m.uid);
                }
            });
            if(authentication){
                res.redirect(`/lab6/my-account?id=${getUsername}`);
                // res.render('account', {lab: "/lab5", username: getUsername});
            }else{
                res.redirect('/lab6/login')
            }
        }else{
            res.status(404).end('Not found');
            setTimeout(()=>{
                count = 1; // het thoi gian ma loi 404
            },10000);
        }
    },
    getMyAccount: (req, res)=>{
        if(authentication){
            let param = req.query.id
            if(param !== undefined){
                getUsername = req.query.id;
            }

            // console.log(getUsername);
            // console.log(users.filter(user => user.uid === getUsername));

            detectUser = users.filter(user => user.uid === getUsername)
            if(detectUser.length != 0){
                uid = detectUser[0].uid;
                getUsername = detectUser[0].username;
                // console.log(detectUser[0].username);    
                if(getUsername == "administrator"){
                    res.statusCode = 200;
                    res.render('administrator', {lab: "/lab6", username: getUsername, uid: uid, authentication: authentication});
                }else{
                    res.statusCode = 200;
                    res.render('account', {lab: "/lab6", username: getUsername, uid: uid, authentication: authentication});
                }
            }else{
                console.log("Warning");
                // res.redirect('/lab6/logout');
            }
        }else{
            res.redirect('/lab6/login');
        }
    },
    getLogout : (req,res) => {
        authentication = false;
        uid = ''
        getUsername = ''
        res.redirect('/lab6')
    }
}

module.exports = {lab6}