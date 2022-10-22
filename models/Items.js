import mongoose from 'mongoose'

const ItemsSchema = new mongoose.Schema({
    photo:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true,
    },
    minutes:{
        type:String,
        required:true
    },
    cost:{
       type:String,
       required:true
    },
    description:{
        type:String,
        required:true
    }
})

export default mongoose.model('Item', ItemsSchema)