import express from "express"
import mongoose from "mongoose"
import cors from 'cors'
import { Destination } from "./model/destination.js"
import { Packages } from "./model/packages.js"
import dotenv from "dotenv";
dotenv.config(); // Load variables from .env

const app = express()
const port = process.env.PORT || 3000;
app.use(cors())


mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("✅ Connected to MongoDB Atlas"))
  .catch((err) => console.error("❌ MongoDB connection error:", err));

app.get('/api/destination', async(req, res) => {
    const destination = await  Destination.find()
    res.json(destination)
})

app.get('/api/packages/top-selling' , async(req,res)=>{
        const packages =await Packages.find();
        res.json(packages);
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})