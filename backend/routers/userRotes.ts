import express, { } from "express";
import { login, register, getPorfile, updateProfile } from './../controllers/userController.ts'
import { protectedRoute } from './../middleware/protectedRoute.ts'

const route = express.Router()

route.post('/register', register)

route.post('/login', login)

route.get('/user:id', protectedRoute, getPorfile)

route.post('/user/update', protectedRoute, updateProfile)

export default route
