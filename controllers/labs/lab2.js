

lab2 = {
    getLab: (req, res)=>{
        // optional
        // let path = req.originalUrl.replace(/^\//, '');
        // console.log(path);
        // if(path == 'lab2'){
        //     res.render('index', {param: true});
        // }
        res.render('index', {lab2: true});
    },
   
}

module.exports = {lab2}