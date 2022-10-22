import express from 'express'
import { createItem, deleteItem, getItems } from '../controllers/item.js';

const router = express.Router()

router.post('/', createItem);
router.get('/', getItems);
router.delete('/item/:id', deleteItem)

export default router