import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import booksRoute from "./routes/booksRoute.js"
import cors from "cors"

dotenv.config()

const app = express();
const PORT = process.env.PORT || 3000
app.use(express.json())


app.get("/",(req,res)=>{
    res.send("welcome to Book-store-Project");
})

app.use("/books",booksRoute);
app.use(cors({
  origin:"http://localhost:3000",
  methods:["GET","POST","PUT","DELETE"],
  allowedHeaders:["Content-Type"]
}));
mongoose.connect(process.env.MONGODB_URL)
.then(()=>{
  console.log("App connected to database");
  app.listen(PORT,()=>{
    console.log(`Server is running at port ${PORT}`)
})
})
.catch((err)=>{
   console.log(err);
})