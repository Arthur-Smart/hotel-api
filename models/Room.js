import mongoose from 'mongoose'


const RoomSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    roomNum:{
        type:String,
        required:true
    },
    cost:{
        type:String,
        required:true
    },
    availability:{
        type:String,
        required:true
    },
    coverPhoto:{
        type:String,
    },
    showPhoto1:{
        type:String,
    },
    showPhoto2:{
        type:String,
    }
},{
    timestamps:true
})