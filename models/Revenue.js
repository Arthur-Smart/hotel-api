import mongoose from 'mongoose'

const RevenueSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    cost:{
        type:String,
        required:true
    },
    person:{
        type:String,
        required:true
    }
}
);

export default mongoose.model('Revenue', RevenueSchema)
