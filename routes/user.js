import express  from "express";
import { deleteUser, singleUser, updateUser, userCollection } from "../controllers/user.js";
import { checkToken } from "../utilys/verify.js";

const router = express.Router();

router.get('/user' , userCollection);
router.get('/user/:id', singleUser);
router.put('/user/:id', updateUser);
router.delete('/user/:id', deleteUser);
export default router