import { Router } from "express";
import { CreateStudy, ReadoneStudy } from "../controller/Studycontroller";




const router: Router = Router()
router.route("/create-study/:userID").post(CreateStudy)
router.route("/read-study/:userID").get(ReadoneStudy)


export default router;