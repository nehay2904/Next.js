const express = require('express')

const app = express()
const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/students', {useNewUrlParser : true, useUnifiedTopology: true}, function(err){
    if(err){
        console.log(err)
    }
    else{
        console.log("mongoDB connection is successful")
    } 
})

app.get('/' , function(req, res){

        res.end('this is home page using express')
   
})

app.listen(5000, function(){
    console.log(`success`)
})