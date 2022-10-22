import express from 'express'
import { createExpense, deleteExpense, getExpenses } from '../controllers/revenue.js'

const router = express.Router()

router.post('/', createExpense)
router.get('/', getExpenses)
router.delete('/expense/:id/', deleteExpense)

export default router;