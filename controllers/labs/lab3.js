
lab3 = {
    getLab: (req, res)=>{
        res.render('index');
    },
    postLogin: (req, res)=>{
        res.redirect('/login');
    }
}

module.exports = {lab3}