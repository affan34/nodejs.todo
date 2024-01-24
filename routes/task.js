import express from "express";
import { deleteMytask, getMytask, newTask, updateMytask } from "../controllers/task.js";
import { isAuthanticated } from "../middlewares/auth.js";
const router = express.Router();

router.post("/new",isAuthanticated,newTask);
router.get("/my",isAuthanticated,getMytask);
router.route("/:id").
put(isAuthanticated,updateMytask)
.delete(isAuthanticated,deleteMytask);
export default router;