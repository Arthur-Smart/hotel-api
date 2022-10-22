import User from "../models/User.js"
import { createError } from "../utilys/error.js"
import bcrypt from 'bcryptjs'


//Get all users
export const userCollection = async (req, res, next) => {
    try {
    const users = await User.find().sort({_id:-1});
    if(!users) return next(createError(404, 'There are no users'))
    res.status(200).json(users)
 } catch (err) {
    next(err)
 }
}

//Get a single User
export const singleUser = async (req, res, next) =>{
   try {
      const singleUser = await User.findById(req.params.id);
      res.status(201).json(singleUser)
      
   } catch (err) {
      next(err)
   }
}

//Update User
export const updateUser = async(req, res, next) => {
  if(req.body.userId === req.body.params){
      if(req.body.password){
         const salt = await bcrypt.genSalt(10);
          req.body.password = await bcrypt.hash(req.body.password, salt);
      }

       try{
          const updatedUser = await User.findByIdAndUpdate(req.params.id, {
         $set:req.body
     }, {new:true});

     res.status(201).json(updatedUser)
       }
       catch(err){
            next(err)
       }
  }
    
}

//Delete User
export const deleteUser = async(req, res, next) => {   
   try{
    const deletedUser = await User.findByIdAndDelete(req.params.id)
    res.status(200).json('User delete successfully')    
   } 
   catch(err){
      next(err)
   } 
   
}