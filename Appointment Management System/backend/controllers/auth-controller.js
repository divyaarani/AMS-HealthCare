const UserModel=require('../models/user-model')
const {v4:uuidv4}=require('uuid')
const bcrypt=require('bcryptjs')
const nodemailer=require('nodemailer')
exports.signup=async(req,res)=>{
    const{email,password,username}=req.body
    let user=await UserModel.findOne({email})
    if(user){
        return res.status(400).json({message:"Email already registered"})
    }
    const activationCode=uuidv4()
    const salt=await bcrypt.genSalt(10)
    const hashPassword=await bcrypt.hash(password,salt)
    user=new UserModel({
        username,
        email,
        password:hashPassword,
        activationCode
    })
    await user.save()
    const transport=nodemailer.createTransport({
        host:'smtp.hostinger.com',
        port:465,
        auth:{
            user:process.env.EMAIL_USER,
            pass:process.env.EMAIL_PASS
        }
    })
    const activationLink=`http://localhost:${process.env.PORT}/auth/activate/${activationCode}`
    const mailOptions={
        from:process.env.EMAIL_USER,
        to:email,
        subject:"Please verify your email address",
        text:`Click the below link to verify your email address for Appointment Management System [Health Care] ${activationLink}`
    }
    transport.sendMail(mailOptions,(err,info)=>{
        if(err){
            return res.status(500).json({message:"Cannot send Activation link"})
        }
        else{
            return res.status(200).json({message:"Activation link sent to your email please vaerify to proceed to login"})
        }
    })
}
exports.activate=async(req,res)=>{
const{activationCode}=req.params
let user=await UserModel.findOne({activationCode})
if(!user){
    res.status(500).json({message:"Cannot send activation link"})
}
user.isActivated=true
user.save()
res.status(200).json({message:"Account activated successfully"})
}
//Login
exports.signin=async(req,res)=>{
    const{email,password}=req.body
    let user=await UserModel.findOne({email})
    if(!user){
        return res.status(400).json({message:"Email not found"})
    }
    const isMatching=await bcrypt.compare(password,user.password)
    if(!isMatching){
        return res.status(400).json({message:"Incorrect password"})
    }
    if(!user.isActivated){
        return res.status(400).json({message:"Account not yet activated please activate first to login"})
    }
    return res.status(200).json({message:"Login successful",
        user
    })
}