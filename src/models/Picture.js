import mongoose from "mongoose";

const pictureSchema = new mongoose.Schema({
    title : {type : String, required: true, trim:true},
    description : {type : String},
    createdAt : {type : Date, required: true, default: Date.now },
})

const Picture = mongoose.model("Picture", pictureSchema);

export default Picture;