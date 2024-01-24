import express from "express";
import { isAuthanticated } from "../middlewares/auth.js";
import { newfile,getmyprofile,login,logout} from "../controllers/user.js";
// for splitting routes
const router = express.Router();



router.post("/new",newfile)
router.post("/login",login)
router.get("/logout",logout)

router.get("/me",isAuthanticated,getmyprofile)



export default router;