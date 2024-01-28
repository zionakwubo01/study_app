import { Document, Schema, Types, model } from "mongoose";

interface iStudy {

    StudyTime: string;
    StretchTime: string;
    BreakTime: string;
    TotalStudyTime: string
}

interface iStudyData extends iStudy, Document { }

const studyModel = new Schema<iStudyData>(
    {
        StudyTime: { type: String },
        StretchTime: { type: String },
        BreakTime: { type: String },

    },
    { timestamps: true }
);

export default model<iStudyData>("read", studyModel);