import { user } from "../models/user.js";
import jwt from "jsonwebtoken";

export const isAuthanticated = async (req,res,next)=>{

    const {token} = req.cookies;
    if(!token) return res.status(404).json({
        success:false,
        message:"please login first",
    });
    
    const decoded = jwt.verify(token,process.env.JWT_SECRET);
    
   req.user1 = await user.findById(decoded._id);
   next();



}