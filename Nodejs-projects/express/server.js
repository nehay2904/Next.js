const express = require('express');

const app = express()

app.get('/' , function(res, req){
    res.send('this is home page on express')
})