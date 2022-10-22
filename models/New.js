import mongoose from 'mongoose'

const NewSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    town:{
        type:Number,
        required:true
    },
    individual:{
        type:String,
        required:true
    }
}, {timestamps:true})

export default mongoose.model('New', NewSchema)