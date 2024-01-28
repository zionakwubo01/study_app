import { log } from "console";
import { CronJob } from "cron";
import { Request, Response } from "express";
import moment from "moment";
import StudyModel from "../model/StudyModel";
import Usermodel from "../model/Usermodel";
import { Types } from "mongoose";
// import userModel from "../model/Usermodel";
// import studyModel from "../model/StudyModel";
// import { Types } from "mongoose";

export const CreateStudy = async (req: Request, res: Response) => {
    try {
        const { StudyTime, StretchTime, BreakTime } = req.body
        const { userID } = req.params

        const startTime = new Date();


        console.log("Study Start Time:", moment(startTime).format("LT"));

        const stretchMinutes = parseInt(StretchTime); // Assuming StretchTime is in minutes

        const stretchTime = new Date(startTime);
        stretchTime.setMinutes(stretchTime.getMinutes() + stretchMinutes);

        const strrr = moment(stretchTime).format("LT");

        const Break = parseInt(BreakTime)

        const Breakminutes = new Date(stretchTime)
        Breakminutes.setMinutes(Breakminutes.getMinutes() + Break)
        const brr = moment(Breakminutes).format("LT")


        const Length = StudyTime * 60 / StretchTime
        console.log("length", Length)

        const len = Length * BreakTime
        console.log("len", len)
        const le = len + StudyTime * 60

        const final = le / 60
        console.log("final", final)



        const min = final
        const wholeNumber = Math.floor(min);

        console.log("1st", wholeNumber); // Output: 5


        const hor = final
        const fractionalPart = Math.floor(hor * 10) % 10;

        console.log("2nd", fractionalPart); // Output: 3



        const job = new CronJob(
            `${fractionalPart} ${wholeNumber} * * *`, // minute hour * * *
            function () {
                console.log('You will see this message every second');
            },
            null,
            true,
            'America/Los_Angeles'
        );

        const get = await Usermodel.findById(userID)


        const stu = await StudyModel.create({
            BreakTime: brr,
            StretchTime: strrr,
            StudyTime: StudyTime,
            TotalStudyTime: final
        })

        get?.studyHistory.push(new Types.ObjectId(stu._id))
        get?.save()
        return res.status(201).json({
            message: "study created",
            data: stu
        })



    } catch (error: any) {
        return res.status(404).json({
            message: `${error.message} is the error that occured`
        })
    }
}



export const ReadoneStudy = async (req: Request, res: Response) => {
    try {

        const { userID } = req.params

        const study = await StudyModel
            .findById(userID).populate({
                path: "user"
            })


        return res.status(200).json({
            message: "good",
            data: study
        })

    } catch (error: any) {
        return res.status(404).json({
            message: error.message
        })
    }
}