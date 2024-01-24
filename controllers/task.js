import ErrorHandler from "../middlewares/error.js";
import {task} from "../models/task.js"
import {user} from "../models/user.js"

export const newTask = async (req,res,next)=>{

try {
    const {tittle,discription}= req.body;

await task.create({tittle,
    discription,
user:req.user1});

res.status(201).json({
success:true,
message:"task added successfully"});
    
} catch (error) {
    next(error);
}
}




export const getMytask= async (req,res,next)=>{
try {
    const userid = req.user1._id;
const tasks = await task.find( {user:userid} );
res.status(200).json({
    success:true,
    tasks,
})


} catch (error) {
    next(error);
}
}


export const updateMytask= async (req,res,next)=>{
   try {
    const {id} = req.params;
    const task1 = await task.findById(id);
    if(!task1) return next(new ErrorHandler("update task not found",404));
    task1.isCompleted=!task1.iscompleted;
    await task1.save();

  
    res.status(200).json({
        success:true,
        message:"updated task successfully"
        
    })
   } catch (error) {
    next(error);
   }
    
    
    }

    export const deleteMytask= async (req,res,next)=>{
      try {
        const {id} = req.params;
        const task1 = await task.findById(id);
        if(!task1) return next(new ErrorHandler("delete task not found",404));

      await task1.deleteOne();

        res.status(200).json({
            success:true,
            message:" task deleted successfully"
        })
        
        
      } catch (error) {
        next(error);
      }
        }