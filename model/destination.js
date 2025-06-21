import mongoose from "mongoose";

const destinationSchema = mongoose.Schema({
    name : String,
    image :String,
    price:String
})

export const Destination = mongoose.model('destination' , destinationSchema)