import express from 'express'
import { createNew, deleteNew, getNew } from '../controllers/new.js';

const router = express.Router()

router.post('/', createNew);
router.get('/', getNew);
router.delete('/new/:id', deleteNew)

export default router;