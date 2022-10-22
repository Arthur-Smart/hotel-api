import mongoose from 'mongoose'

const MeetingSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    phone:{
        type:String,
        required:true,
        unique:true
    },
    category:{
        type:String,
        required:true,
    },    
     roomNum:{
        type:Number,
        required:true     
    },
    date:{
        type:String,
        required:true
    },
    cost:{
       type:String,
       required:true
    }
},
{timestamps:true});

export default mongoose.model('Meeting', MeetingSchema)