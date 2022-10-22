import express from 'express'
import { restaurantRoom } from '../controllers/room.js';

const router = express.Router()

router.get('/',restaurantRoom)  



export default router