const mongoose=require('mongoose')
const userSchema=new mongoose.Schema({
    username:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    activationCode:{
        type:String,
        required:true,
        default:null
    },
    password:{
        type:String,
        required:true,
        default:null,
    },
    isActivated:{
        type:Boolean,
        required:true,
        default:false,
    }
})
const UserModel=mongoose.model('users',userSchema)
module.exports=UserModel