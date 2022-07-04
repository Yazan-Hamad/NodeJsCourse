const express = require('express');
const path = require('path');
const app = express();
const bodyParser = require('body-parser'); // requires also npm isntall --save body-parser

app.set('view engine', 'ejs');
app.set('views', 'views');

const admin = require('./routes/admin');
const user = require('./routes/user');

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname,'public')));

app.use(user);
app.use('/admin',admin);
app.use((req,res)=>{res.status(404).render('404',{errorMsg:"Page Not Found"})});



app.listen(3000);