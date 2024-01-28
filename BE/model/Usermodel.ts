

import { Schema, Types, model } from "mongoose";



interface iuser {
    email: string,
    password: string,
    verify: boolean,
    token: string,
    studyHistory: Array<{}>
}

interface iUserData extends iuser, Document { }


const Usermodel = new Schema<iUserData>({
    email: {
        type: String
    },
    token: {
        type: String
    },
    password: {
        type: String
    },
    verify: {
        type: Boolean, default: false
    },
    studyHistory: [
        {
            type: Types.ObjectId,
            ref: "read"

        }
    ]
},
    { timestamps: true }
)

export default model<iUserData>("user", Usermodel)