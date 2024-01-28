import { Application, NextFunction, Request, Response } from "express";
import user from "./router/userRouter"
import study from "./router/studyRouter"

export const Mainapp = async (app: Application) => {
    app.use("/api", user)
    app.use("/api", study)

    app.use("/", (req: Request, res: Response) => {
        try {
            return res.status(200).json({ message: "welcome to default page" })
        } catch (error) {
            return res.status(404).json({ message: "erroe" })
        }
    })

}