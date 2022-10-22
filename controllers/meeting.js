import Meeting from "../models/Meeting.js"

//Regestering a meeting Request
export const newMeeting = async (req, res, next) => {
    try {
        const newItem = await new Meeting(req.body);
        newItem.save()
        res.status(201).json(newItem)
    } catch (err) {
        next(err)
    }
}

//Getting all meeting Request
export const allMeetings = async (req, res, next) => {
    try {
        const meetings = await Meeting.find().sort({_id:-1});
        res.status(200).json(meetings)
    } catch (err) {
        next(err)
    }
}

//Deleting Item
export const deleteMeeting = async (req, res, next) => {
    try {
        await Meeting.findByIdAndDelete(req.params.id)
        res.status(200).json('Meeting has been deleted successfully')
    } catch (err) {
        next(err)
    }
}