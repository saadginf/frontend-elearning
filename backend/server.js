const express = require('express');
const mongoose = require('mongoose');
const app= express();

//db config

const db =require('./config/keys').mangoURI;

//connect to mango db

mongoose
.connect(db,{useNewUrlParser: true, useUnifiedTopology: true})
.then(()=>console.log("connected"))
.catch(err=>console.log(err))



app.get('/',(req,res)=> res.send("hello world"))
const port = 5000;
app.listen(port,()=> console.log(`Server running on port ${port}`) )
