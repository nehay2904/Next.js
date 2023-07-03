
const express = require('express')

const router = express.Router()

router.get('/getproducts' ,(req, res) =>{
    const productsArray = ['wow red onion oil', 'mamaearth red onion oil ', 'khadi red onion oil']
    
    res.send(productsArray)
})

router.get('/addproduct' ,(req, res) =>{
    
    res.send('this is what we ad  products')
})


module.exports = router;