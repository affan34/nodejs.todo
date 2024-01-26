import {user} from "../models/user.js";
import bcrypt from "bcryptjs";

import {sendCookie} from "../utils/features.js";

import ErrorHandler from "../middlewares/error.js";



export const newfile = async (req,res)=>{

   try {
    const {name, email, password} = req.body;
    let user1 = await user.findOne({email});
    if (user1) return  next(new ErrorHandler("already registered",400));
       
 
        const hashed= await bcrypt.hash(password,10);
        user1 =await user.create({name,email,password:hashed});
      sendCookie(user1,res,"created successfully",201);
   } catch (error) {
    next(error)
   }
   

};












export const getmyprofile  = (req,res)=>{


   res.status(200).json({
    success:true,
    user1:req.user1,
   });

};









export const login = async (req,res,next)=>{

try {const {email ,password}=req.body;

const user1 = await user.findOne({email}).select("+password");

if (!user1) return next(new ErrorHandler("Invalid email or password",400));
const isMatch = await bcrypt.compare(password,user1.password);

if (!isMatch) return next(new ErrorHandler("Invalid email or password",400));
 
sendCookie(user1,res,`welcome back ${user1.name}`,201);

    
} catch (error) {
    next(error);
}

}


export const logout=  (req,res)=>{
    res.status(200).cookie("token","",{httpOnly:true,
        expires:new Date(Date.now() ),
        sameSite:process.env.NODE_ENV==="Development"?"lax":"none",
        secure:process.env.NODE_ENV==="Development"?false:true,
    }).json({
        success:true,
        message:"you logged out successfully",
       });

}