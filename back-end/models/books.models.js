import {mongoose} from "mongoose";

const booksSchema = new mongoose.Schema({
   title:{
    type:String,
    required:true,
   },
   author:{
      type:String,
      required:true
   },
   publishYear:{
      type:Number,
      required:true
   }
},{timestamps:true});

const Book = mongoose.model("Book",booksSchema)

export default Book;