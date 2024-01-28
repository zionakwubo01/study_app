import { Request, Response } from "express";
import Usermodel from "../model/Usermodel";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"

import crypto from "crypto"
import StudyModel from "../model/StudyModel";

export const Createuser = async (req: Request, res: Response) => {
    try {

        const { email, password } = req.body

        const code = crypto.randomBytes(3).toString("hex")
        const salt = await bcrypt.genSalt(2)

        const haSH = await bcrypt.hash(password, salt)
        const user = await Usermodel.create({
            email,
            password: haSH,
            token: code
        })

        return res.status(200).json({
            message: "Created",
            date: user
        })

    } catch (error) {
        return res.status(404).json({
            message: "error occured"
        })
    }
}
export const Readonsuser = async (req: Request, res: Response) => {
    try {
        const { userID } = req.params

        const user = await Usermodel.findById(userID)

        return res.status(200).json({
            message: "one user found",
            date: user
        })

    } catch (error) {
        return res.status(404).json({
            message: "error occured"
        })
    }
}
export const VerifyUser = async (req: Request, res: Response) => {
    try {
        const { token } = req.body

        const user = await Usermodel.findOne({ token })

        if (user?.token === token) {
            await Usermodel.findByIdAndUpdate(
                user?._id,
                { verify: true },
                { new: true }
            )
            return res.status(200).json({
                message: "verified"
            })
        } else {
            return res.status(404).json({
                message: "token incorrect"
            })
        }
    }

    catch (error: any) {
        return res.status(404).json({
            message: error.message
        })
    }

}
export const Loginuser = async (req: Request, res: Response) => {
    try {
        const { email, password } = req.body

        const getuser = await Usermodel.findOne({ email })
        if (getuser) {
            const check = await bcrypt.compare(password, getuser.password)
            if (check) {
                return res.status(200).json({
                    message: "signed in",
                    data: getuser._id
                })
            }
        } else {
            return res.status(404).json({
                message: "email dosent exist"
            })
        }
    }

    catch (error: any) {
        console.log(error)
        return res.status(404).json({
            message: error.message
        })
    }

}



