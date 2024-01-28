import dotenv from "dotenv"
import { connect } from "mongoose"
dotenv.config()

const url: string = process.env.Url!
export const Dbconfig = async () => {
    try {
        return await connect(url).then(() => {
            console.log("Database is active")
        })
    } catch (error) {
        return error
    }
}