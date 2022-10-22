import New from "../models/New.js"

export const createNew = async (req, res, next) =>{
      try {
        const newNew = new New(req.body)
        await newNew.save()
        res.status(201).json(newNew)     
    } catch (err) {
        next(err)
    }
}

export const getNew = async (req, res, next) => {
    try {
        const items = await New.find().sort({_id:-1});
        res.status(200).json(items)
        
    } catch (err) {
        next(err)
    }
};

export const deleteNew = async (req, res, next) =>{
    try {
        const deletedNew = await New.findByIdAndDelete(req.params.id)
        res.status(200).json('New delete Successfull')
    } catch (err) {
        next(err)
    }
}