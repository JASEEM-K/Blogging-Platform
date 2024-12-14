import { Request, Response } from "express"
import Blog, { IBlog } from "./../modals/blogModal.ts"
import { ObjectId } from "mongoose"
import Comment from './../modals/commentModal.ts'

export const createBlog = async (req: Request, res: Response): Promise<void> => {
	try {
		const { title, content, tags, isDraft }: IBlog = req.body
		if (!title || !content) {
			res.status(400).json({ error: "Please fill in all the input fields " })
			return
		}

		const newBlog = new Blog({
			author: req.user?.id,
			title,
			content,
			tags,
			isDraft,
		})

		await newBlog.save()
		res.status(200).json(newBlog)

	} catch (error) {
		console.log("Error in Creating Blog :", error instanceof Error && error.message)
		res.status(500).json({ error: "Internal Server Error" })
		return
	}
}


export const editBlog = async (req: Request, res: Response): Promise<void> => {
	try {
		const blogId = req.params.id
		const { title, content, tags, isDraft } = req.body
		const blog = await Blog.findById(blogId)
		if (!blog) {
			res.status(404).json({ error: "Blog not found " })
			return
		}
		if (blog.author !== req.user?._id) {
			res.status(400).json({ error: "You are not authorized to Edit this Blog" })
			return
		}

		const updatedUser = await Blog.findByIdAndUpdate(blogId, { title, content, tags, isDraft })
		res.status(200).json(updatedUser)
	} catch (error) {
		console.log("Error in Updating Blog :", error instanceof Error && error.message)
		res.status(500).json({ error: "Internal Server Error" })
		return
	}
}

export const getBlog = async (req: Request, res: Response): Promise<void> => {
	try {
		const blogId = req.params.id
		const isBlog = await Blog.findById(blogId)
		if (!isBlog) {
			res.status(404).json({ error: "Blog not found" })
			return
		}
		res.status(200).json(isBlog)

	} catch (error) {
		console.log("Error in finding Blog :", error instanceof Error && error.message)
		res.status(500).json({ error: "Internal Server Error" })
		return
	}
}

export const getAllBlog = async (req: Request, res: Response): Promise<void> => {
	try {
		//TODO: Add filters and actually make this workable
		const blogs = await Blog.find()
		res.status(200).json(blogs)
	} catch (error) {

	}
}

export const deleteBlog = async (req: Request, res: Response): Promise<void> => {
	try {
		const blogId = req.params.id
		const userId = req.user?.id
		const blog = await Blog.findById(blogId)
		if (!blog) {
			res.status(404).json({ error: 'Blog not found ' })
			return
		}
		if (blog.author !== userId) {
			res.status(400).json({ error: "You don't have authority to delete this Blog " })
			return
		}
		await Blog.findByIdAndDelete(blogId)
		res.status(200).json({ message: "Blog Deleted Successfully" })
	} catch (error) {
		console.log("Error in Deleting Blog :", error instanceof Error && error.message)
		res.status(500).json({ error: "Internal Server Error" })
		return
	}
}

export const likeBlog = async (req: Request, res: Response): Promise<void> => {
	try {
		const blogId = req.params.id
		const blog = await Blog.findById(blogId)
		if (!blog) {
			res.status(404).json({ error: "Blog not found " })
			return
		}

		if (!blog.likes?.includes(req.user?._id as ObjectId)) {
			await Blog.findByIdAndUpdate(blogId, { $push: { likes: req.user?._id } })
			const isLiking = true
			res.status(200).json(isLiking)
			return
		}

		else if (blog.likes?.includes(req.user?._id as ObjectId)) {
			await Blog.findByIdAndUpdate(blogId, { $pull: { likes: req.user?._id } })
			const isLiking = false
			res.status(200).json(isLiking)
			return
		}

	} catch (error) {
		console.log("Error in Liking on Blog :", error instanceof Error && error.message)
		res.status(500).json({ error: "Internal Server Error" })
		return
	}
}


export const commentOnBlog = async (req: Request, res: Response): Promise<void> => {
	try {
		const blogId = req.params.id
		const { content } = req.body

		if (!content) {
			res.status(400).json({ error: "Please provide some content" })
			return
		}

		const blog = await Blog.findById(blogId)
		if (!blog) {
			res.status(404).json({ error: "Blog not found " })
			return
		}

		const newComment = new Comment({
			content,
			author: req.user?._id,
			postId: blogId,
		})

		await Blog.findByIdAndUpdate(blogId, { $push: { comments: newComment._id } })
		await newComment.save()
		res.status(200).json(newComment)

	} catch (error) {
		console.log("Error in Commenting on Blog :", error instanceof Error && error.message)
		res.status(500).json({ error: "Internal Server Error" })
		return
	}
}

export const deleteComment = async (req: Request, res: Response): Promise<void> => {
	try {
		const commentId = req.params.id
		const comment = await Comment.findById(commentId)
		if (!comment) {
			res.status(404).json({ error: "Comment not found " })
			return
		}
		const isAuthor = comment.author === req.user?._id
		if (!isAuthor) {
			res.status(400).json({ error: "You're not authorized to Delete this Comment" })
			return
		}

		await Comment.findByIdAndDelete(commentId)
		res.status(200).json({ message: "Comment Deleted Successfully" })
	} catch (error) {
		console.log("Error in Deleting Comment on Blog :", error instanceof Error && error.message)
		res.status(500).json({ error: "Internal Server Error" })
		return
	}
}

