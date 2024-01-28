import express, { Application, Request, Response, NextFunction } from "express"
import cors from "cors"
import { Dbconfig } from "./utils/Dbconfig"
import { Mainapp } from "./Mainapp"
import dotenv from "dotenv"

import session from "express-session"
import mongoDb from "connect-mongodb-session"
dotenv.config()

const PortServer = process.env.port!

const port: number = parseInt(PortServer)
console.log(port)
const Url: string = process.env.Url!
const mongoDbstore = mongoDb(session)
const store = new mongoDbstore({
    uri: Url!,
    collection: "sessions"
})

const app: Application = express()
app.use(express.json())
app.use(cors())
Mainapp(app)

app.use((req: Request, res: Response, next: NextFunction) => {
    res.header("Access-Control-Allow-Origin", "http://localhost:5173");
    res.header("Access-Control-Allow-Credentials", "true");
    res.header("Access-Control-Allow-Methods", "GET, PATCH, PUT, POST, DELETE");
    res.header("Access-Control-Allow-Headers", "Content-Type");
    next();
})
app.use(cors({ origin: "http://localhost:5174" }))

app.use(session({
    secret: process.env.secret!,
    resave: false,
    saveUninitialized: false,

    cookie: {
        sameSite: "lax",
        secure: false,
    },
    store
}))


const server = app.listen(port, () => {
    console.log("server is active")
    Dbconfig()
})


process.on("uncaughtException", (error: Error) => {
    process.exit(1)
})

process.on("unhandledRejection", (reason: any) => {
    server.close(() => {
        process.exit(1)
    })
})