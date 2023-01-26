import { Schema as _Schema, model } from "mongoose";
const Schema = _Schema;

const novelSchema = new Schema({
    title: { type: String, required: true },
    authors: { type: Array, required: true },
    description: { type: String, required: true },
    image: { type: String },
    link: { type: String},
    publisher: {type:String},
    publishedDate: {type: String},
    dateAdded: {type: Date, default: Date.now}
    

});
const Novel = mongoose.model("Novel",novelSchema)
export default Novel
