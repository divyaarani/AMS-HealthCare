const express=require('express')
const bodyParser=require('body-parser')
const router=express.Router()
const appointModel = require("../models/appointment-model")
router.use(bodyParser.json())
router.get('/',(req,res)=>{
    appointModel.find().then(
        response=>res.send(response)
       ).catch(
        err=>console.log(err)
       )
})
router.post('/post',(req,res)=>{
    console.log(req.body)
    const newappointment=new appointModel(req.body)

    newappointment.save().then(
        res.send("post page")
    ).catch(
        err=>console.log(err)
    )
   
   
})
router.put('/update/:id',(req,res)=>{
    console.log(req.body)
    res.send(`Appointment update page ${req.params.id}`)
})
router.delete('/delete/:id',(req,res)=>{
    res.send(`Appointment delete page ${req.params.id}`)
})
module.exports=router
