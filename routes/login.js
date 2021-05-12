const express = require('express')
const router = express.Router()


router.get('/login',(req, res)=>{
    res.render("login.ejs", {name: 'Miguel'})
})

router.post('/login',(req, res)=>{
    console.log(req.body.email)
})


module.exports = router