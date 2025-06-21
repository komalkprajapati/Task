import mongoose from "mongoose";

const destinationSchema = mongoose.Schema({
    name : String,
    Image :String,
    price:String
})

export const Destination = mongoose.model('destination' , destinationSchema)