const express = require('express');
const path = require('path');
const app = express();
const bodyParser = require('body-parser'); // requires also npm isntall --save body-parser

const admin = require('./routes/admin');
const user = require('./routes/user');

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname,'public')));

app.use(user);
app.use('/admin',admin);
app.use((req,res)=>{res.status(404).sendFile(path.join(__dirname,'views','404.html'))});



app.listen(3000);