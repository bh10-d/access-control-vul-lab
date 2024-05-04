//this lab using horizontal attack

let users = require('../data/users');
let count = 1;
let authentication = false;
let getUsername = '';


lab6 = {
    getLab: (req, res)=>{
        res.render('index2', {lab: "/lab6", username: getUsername, authentication: authentication});
    },
    getPosts: (req, res)=>{
        getPostId = req.query.postId;
        console.log(getPostId);
        res.render('blog', {lab: "/lab6", postId: getPostId, authentication: authentication});
    },
    // getLogin: (req, res)=>{
    //     if(authentication){
    //         getUsername = req.query.username;
    //         res.redirect('/lab6/my-account');
    //     }else{
    //         res.render('login', {lab6: true, lab: "/lab6"});
    //     }
    // },
}

module.exports = {lab6}