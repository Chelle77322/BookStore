import { Schema as _Schema, model } from "mongoose";
const Schema = _Schema;

const novelSchema = new Schema({
    title: { type: String, required: true },
    authors: { type: String, required: true },
    description: { type: String, required: true },
    image: { type: String },
    link: { type: String}
    

});

const Novel = model("Novel", novelSchema);
export default Novel;