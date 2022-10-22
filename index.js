import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import authRouter from './routes/auth.js'
import roomRouter from './routes/room.js'
import usersRouter from './routes/user.js'
import itemsRouter from './routes/item.js'
import meetingRouter from './routes/meeting.js'
import expensesRouter from './routes/revenue.js'
import newRouter from './routes/new.js'
import cookieParser from "cookie-parser"
const app = express()
dotenv.config()


const connect = async () =>{
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log('Successfully connected to MongoDb')
    } catch (error) {
        throw error
    }
}

mongoose.connection.on('disconnected', () => {
    console.log('The database has been disconnected')
})

mongoose.connection.on('connected', () => {
    console.log('The database has been  connected')
})


const PORT = process.env.PORT || 5000


//Middlewares
app.use(cookieParser())
app.use(express.json())
app.use('/api/auth', authRouter)
app.use('/api/room', roomRouter)
app.use('/api/users', usersRouter)
app.use('/api/items',itemsRouter)
app.use('/api/meetings', meetingRouter)
app.use('/api/expenses',  expensesRouter)
app.use('/api/new',  newRouter)

app.use((err, req, res, next) => {
    const errorStatus = err.status || 500
    const errorMessage = err.message || 'Ops Something wrong happend'
    return res.status(errorStatus).json({
        success:false,
        status:errorStatus,
        message:errorMessage,
        stack:err.stack
    })
})



app.listen(PORT, () =>{
    connect()
    console.log(`The server is up and running at PORT ${PORT}`)
})