import jwt from "jsonwebtoken";
export const sendCookie=(user1,res,message, statuscode)=>{

    const token = jwt.sign({_id:user1._id},process.env.JWT_SECRET);
    res.status(statuscode).cookie("token",token,
    {httpOnly:true,
        maxAge:1000*60*15,
        sameSite:process.env.NODE_ENV==="Development"?"lax":"none",
        secure:process.env.NODE_ENV==="Development"?false:true,
    }).json({
        success:true,
        message,
    })
  
}
