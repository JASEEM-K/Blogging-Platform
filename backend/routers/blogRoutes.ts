import { Router } from 'express'
import { protectedRoute } from '../middleware/protectedRoute'
import { getBlog, getAllBlog, deleteComment, deleteBlog, createBlog, editBlog, commentOnBlog } from './../controllers/blogController.ts'

const route = Router()

route.get('/:id', protectedRoute, getBlog)

route.delete('/:id', protectedRoute, deleteBlog)

route.get('/', protectedRoute, getAllBlog)

route.post('/', protectedRoute, createBlog)

route.put('/:id', protectedRoute, editBlog)

route.post('/comment/:id', protectedRoute, commentOnBlog)

route.delete('/comment/:id', protectedRoute, deleteComment)

export default route
