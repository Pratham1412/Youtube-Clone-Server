import mongoose from "mongoose";

const videoFileSchema= new mongoose.Schema({
    videoTitle: {
        type:String,
        required:true,
    },
    fileName: {
        type:String,
        required:true,
    },
    filePath : {
        type:String,
        required:true,
    },
    filetype: {
        type:String,
        required:true,
    },
    fileSize: {
        type:String,
        required:true,
    },
    videoChanel:{
        type:String,
        required:true,
    } ,
    Like:{
        type:Number,
        default:0
    },
    Views:{
        type:Number,
        default:0
    },
    Uploader: {
        type:String,
    },
},
    {
        timestamps:true,
    }
);
export default mongoose.model("VideoFiles",videoFileSchema);