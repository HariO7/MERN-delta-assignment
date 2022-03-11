require('dotenv').config()

const express = require('express')
const app = express()
const cors = require("cors")
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const User = require('./models/user')
app.use(cors())
app.use(express.json())


mongoose.connect(process.env.mongoDB,()=>{
    console.log('database connected');
})

app.post('/register',async(req,res)=>{
    try {
        const newUser = new User({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password
        })
        const user= await newUser.save((err)=>{
            if(err){
                console.log(err);
            }else{
                res.json({ status: 'ok'}) 
            }
        })
    } catch (error) {
        console.log(error);
        res.json({ status: 'error' })
    }
})

app.post('/login',async(req,res)=>{
    const user = await User.findOne({
        email:req.body.email,
        password:req.body.password,
    })
    if(user){
        res.json({ status:'ok' , user: true})
    }else{
        return res.json({ status: 'ok', user: false})
    }
})


app.listen(3000,()=>{
    console.log('server has started');
})