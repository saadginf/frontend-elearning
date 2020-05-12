const express = require('express');
const mongoose = require('mongoose');
const bodyParser= require('body-parser');
const passport = require('passport');
const users = require('./routes/api/users');
const courses = require('./routes/api/courses');

const app= express();

app.use((req, res, next) => {
    res.append('Access-Control-Allow-Origin', ['*']);
    res.append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.append('Access-Control-Allow-Headers', '*');
    next();
});
//Body parser midleware

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

//db config
const db =require('./config/keys').mangoURI;

//connect to mango db

mongoose
.connect(db,{useNewUrlParser: true, useUnifiedTopology: true})
.then(()=>console.log("connected"))
.catch(err=>console.log(err))

//passport midlware
app.use(passport.initialize())
//Passprt config
require('./config/passport')(passport);
app.get('/',(req,res)=> res.send("hello world"))
const port = 5000;

// Use Routes
app.use('/api/users', users);
app.use('/api/courses', courses);
app.listen(port,()=> console.log(`Server running on port ${port}`) )
