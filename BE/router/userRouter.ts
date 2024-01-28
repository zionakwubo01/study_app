import { Router } from "express";
import { Createuser, Loginuser, VerifyUser, Readonsuser } from "../controller/userController";




const router: Router = Router()

router.route("/create-user").post(Createuser)
router.route("/verify-user").post(VerifyUser)
router.route("/login-user").post(Loginuser)
router.route("/login-user/:userID").get(Readonsuser)


export default router;