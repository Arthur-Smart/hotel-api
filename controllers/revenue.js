import Expenses from "../models/Revenue.js"

export const createExpense = async(req, res, nex) => {
    try {
        const newExpense = new Expenses(req.body)
        await newExpense.save()
        res.status(200).json(newExpense)
    } catch (err) {
        next(err)
    }
}

export const getExpenses = async (req, res, next) => {
    try {
        const items = await Expenses.find()
        res.status(200).json(items)
        
    } catch (err) {
        next(err)
    }
};

export const deleteExpense = async (req, res, next) =>{
    try {
        const deletedExpense = await Expenses.findByIdAndDelete(req.params.id)
        res.status(200).json('Expense delete Successfull')
    } catch (err) {
        next(err)
    }
}