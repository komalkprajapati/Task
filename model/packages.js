import mongoose from "mongoose";


const packagesSchema = mongoose.Schema({
    name :String,
    Image : String
})

export const Packages = mongoose.model('packages' , packagesSchema)