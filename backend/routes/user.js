const express=require('express')
const {signup,activate,signin}= require('../controllers/auth-controller')
const bodyParser = require('body-parser')
const router=express.Router()
const cors=require('cors')
const app=express()
router.use(bodyParser.json())
app.use(cors())
router.get('/',(req,res)=>{
    res.send("This is another page")
})
router.post('/signup',signup)
router.get('/activate/:activationCode',activate)
router.post('/signin',signin)

module.exports=router