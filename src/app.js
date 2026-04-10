import express from 'express'

import cookieParser from 'cookie-parser'
import authRoutes from './routes/auth.routes.js'
const app = express()




//middleware
app.use(express.json());
app.use(cookieParser())


//prefix
app.use("/api" , authRoutes)



export default app