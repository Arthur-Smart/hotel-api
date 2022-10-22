import Items from "../models/Items.js";
import Item from "../models/Items.js"
import { createError } from "../utilys/error.js";


//Create a food item
export const createItem = async (req, res, next) => {
    try {
        const newItem = new Item(req.body)
        await newItem.save()
        res.status(201).json(newItem)     
    } catch (err) {
        next(err)
    }
};


//Get all items
export const getItems = async (req, res, next) => {
    try {
        const items = await Items.find().sort({_id:-1});
        res.status(200).json(items)
        
    } catch (err) {
        next(err)
    }
};


//Delete item
export const deleteItem = async (req, res, next) => {
            try {
            const deletedItem = await Item.findByIdAndDelete(req.params.id)
             res.status(200).json('Item delete')
        } catch (err) {
            next(err)
        }    
}