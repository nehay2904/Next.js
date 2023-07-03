
const express = require('express')

const router = express.Router()

router.get('/login' ,(req, res) =>{
    
    res.send('this is about login page')
})

router.get('/register' ,(req, res) =>{
    
    res.send('this is about register page')
})


module.exports = router;