import express from "express"
import { loginUser, registerUser } from "../controllers/auth.js";
import { checkToken } from "../utilys/verify.js";


const router = express.Router();

router.post('/register', registerUser);
router.post('/login',loginUser)



export default router