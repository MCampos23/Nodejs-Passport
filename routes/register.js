const express = require('express')
const router = express.Router()

router.get('/register',(req, res)=>{
    res.render("register.ejs", {name: 'Miguel'})
})

router.post('/register',async(req, res)=>{
    try {
        const hashedPassword = await bcrypt.hash(req.body.password, 10)
        users.push({
            id: Date.now().toString(),
            name: req.body.name,
            email: req.body.email,
            password: hashedPassword
        })
    res.redirect('/login')
    }catch{
        res.redirect('/register')
    }
})

module.exports = router