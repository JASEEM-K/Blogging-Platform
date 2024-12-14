import * as express from 'express'
import * as cookieParser from 'cookie-parser'
import * as cors from 'cors'
import * as dotenv from 'dotenv'
import { v2 as cloudinary } from 'cloudinary'

import blogRoute from './routers/blogRoutes.ts'
import userRoute from './routers/blogRoutes.ts'

const app = express();

dotenv.config()
cloudinary.config({
	api_key: process.env.CLOUDINARY_API_KEY,
	api_secret: process.env.CLOUDINARY_API_SECRET,
	cloud_name: process.env.CLOUDINARY_NAME,
})

const PORT = process.env.PORT || 5000

app.use(cors({}))
app.use(express.json({ limit: '5mb' }))
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())

app.use('/api', userRoute)
app.use('/api/posts', blogRoute)

app.listen(PORT, () => {
	console.log(`Server is running on https://localhost:${PORT}/`);
})

