import * as mongoose from "mongoose";


export const CustomerSchema = new mongoose.Schema({
    id:String,
    first_name: String,
    last_name: String,
    email: String,
    phone: String,
    creation: {type: Date, default:Date.now}
})