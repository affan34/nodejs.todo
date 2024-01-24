import mongoose from "mongoose";

// making schema
const userSchema= mongoose.Schema({
    tittle:{
        type:String,
        required:true,
    },
    discription:{
      type:String,
     
      required:true,
    },
    isCompleted:{
      type:Boolean,
      default:false
    },
    user:{
type:mongoose.Schema.Types.ObjectId,
    ref :"user",
    required:true,
    },
    createdAt:{
      type:Date,
      default:Date.now,

    }
  })
 export const task = mongoose.model("Task",userSchema);
