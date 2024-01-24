import express from "express";
import userRouter from "./routes/user.js"
import taskRouter from "./routes/task.js"
import {config} from "dotenv";
import cookieParser from "cookie-parser";
import { errorMiddleware } from "./middlewares/error.js";
import cors from "cors";


config({
  path: "./data/config.env",
})





export const app = express();



// usng middleware for working of json data coming from api body
app.use(express.json());
app.use(cookieParser());
app.use("/api/v1/users",userRouter);
app.use("/api/v1/task",taskRouter);
app.use(cors({
    origin :[process.env.FRONTEND_URL],
    methods:["PUT","GET","POST","DELETE"],
    credentials:true,
})
);





app.get("/",(req,res)=>{
res.send("nice working");
});

// middleware for error
app.use(errorMiddleware);



