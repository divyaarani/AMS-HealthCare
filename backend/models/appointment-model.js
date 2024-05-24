const mongoose=require('mongoose')
const appointmentSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    phone:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    doctor:{
        type:String,
        required:true,
    },
    date:{
        type:String,
        required:true,
    },
    time:{
        type:String,
        required:true,
    }
})
const AppointmentModel=mongoose.model('appointments',appointmentSchema)
module.exports=AppointmentModel