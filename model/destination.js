import mongoose from "mongoose";

const destinationSchema = mongoose.Schema({
    name : String,
    price:String,
    image :String
})

export const Destination = mongoose.model('destination' , destinationSchema)