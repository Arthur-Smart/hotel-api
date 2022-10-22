import express from "express"
import { allMeetings, deleteMeeting, newMeeting } from "../controllers/meeting.js";

const router = express.Router();

router.post('/', newMeeting);
router.get('/', allMeetings)
router.delete('/meeting/:id', deleteMeeting)


export default router;