import User from "../models/User.js"
import bcrypt from 'bcryptjs'
import { createError } from "../utilys/error.js";
import jwt from "jsonwebtoken"

export const registerUser = async(req, res, next) => {  
        
    try {
        const salt = bcrypt.genSaltSync(10);
        const hashedPassword = bcrypt.hashSync(req.body.password, salt);

        const newUser = new User({
            photo:req.body.photo,
            name:req.body.name,
            email:req.body.email,
            password:hashedPassword,
            phone:req.body.phone,
            department: req.body.department
        })

        await newUser.save() 
        const {password, ...others} = newUser._doc;
        res.status(201).json(others)
    } catch (err) {
        next(err)
    }
}

export const loginUser = async(req, res, next) => {  
        
    try {
        const user = await User.findOne({name:req.body.name})
        if(!user) return next(createError(404, "There is no such user"))

        const validPassword = await bcrypt.compare(req.body.password, user.password);
        if(!validPassword) return next(createError(400, "Wrong credentials"))

           
        const token = jwt.sign({id:user._id}, process.env.JWT_SECRET )
        const {password, ...others} = user._doc
        res.cookie('access-token', token, {
            httpOnly:true,
            expiresIn:60
        }).status(201).json(others)
    } catch (err) {
        next(err)
    }
}