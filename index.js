const app = require('express')();
const path = require('path');


// view engine configuration
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');


// routes configuration
app.get('/',(req, res)=>{
    res.render('index', {people: "buiduchieu"});
})

// port configuration
app.listen(3000,()=>{
    console.log('Server is running on port 3000');
})