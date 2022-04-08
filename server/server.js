const express       = require('express')
const mongoose      = require('mongoose')
const bodyParser    = require('body-parser')
const cors          = require('cors')
const User          = require('./User')


const app           = express()
app.use(cors())
app.use(bodyParser.json())
app.post('/users/register', async(req,res)=> {
    const newUser = new User({
         email: req.body.email,
         password: req.body.password
    })
    try {
        const savedUser = await newUser.save()
        res.status(201).json(savedUser)
    } catch(err){
        res.status(500).json(err)
    }
})

app.post('/users/login', async (req,res) => {
    const user = await User.findOne({
        email: req.body.email,
        password: req.body.password,
    })
    if(user) {

        return res.json({ status: 'ok', user: user})
    } else {
        return res.json({ status: 'error', user: false})
    }  
})

mongoose.connect(
    'mongodb://localhost:27017',
    {useNewUrlParser: true, useUnifiedTopology: true },
    () => console.log('Connected to DB')
)

app.listen(5003, () => {
    console.log('Listening to port 5003')
})