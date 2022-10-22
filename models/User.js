import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
 photo:{
     type:String,
       required:true
 },
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    phone:{
        type:String,
        required:true,
    },
    department:{
        type:String,
        required:true
    },
},
{timestamps:true});

export default mongoose.model('User', UserSchema)