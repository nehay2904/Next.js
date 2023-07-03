const express = require('express');

const app = express()
const userroute = require('./routes/users')
const productsroute = require('./routes/Products')

app.use('/user' , userroute);
app.use('/products' , productsroute);

app.listen(5000 , ()=>{
    console.log('server is started............')
})