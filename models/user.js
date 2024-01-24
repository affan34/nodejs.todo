import mongoose from "mongoose";

// making schema
const userSchema= mongoose.Schema({
    name:{
      required:true,
      type:String,
     
    },
    email:{
      required:true,
      type:String,
      unique:true
    },
    password:{
      required:true,
      type:String,
      select:false
    },
    createdAt:{
      type:Date,
      default:Date.now,

    }
  })
 export const user = mongoose.model("User",userSchema);
