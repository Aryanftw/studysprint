import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
 clerkId : {
  type:String,
  required:true,
  unique:true
 }
  , email : {
    required : true,
    type:String,
    unique : true
  },
  fullName : {
    required : true,
    type : String
  },
  
},{timestamps:true})

const User = mongoose.model("User",userSchema)

export default User