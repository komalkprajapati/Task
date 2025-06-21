import mongoose from "mongoose";


const packagesSchema = mongoose.Schema({
    name :String,
    image : String
})

export const Packages = mongoose.model('packages' , packagesSchema)