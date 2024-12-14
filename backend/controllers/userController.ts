import { Request, Response } from "express"
import { compare, getSalt, hash } from "bcryptjs";
import User, { IUser } from './../modals/userModal.ts'
import { generateTokenAndSetCookie } from "./../utils/lib/generateJWT.ts";
import { ObjectId } from "mongoose";
import { v2 } from 'cloudinary'


export const login = async (req: Request, res: Response): Promise<void> => {
	const { username, password } = req.body
	try {
		if (!username || !password) {
			res.status(400).json({ error: "Please fill in all the input fields" })
			return
		}
		if (password.length < 6) {
			res.status(400).json("Password must be atleast more than 6 letters ")
			return
		}
		const user = await User.findOne({ username })
		const isPass = compare(password, user?.password || "")
		if (!isPass || !user) {
			res.status(400).json({ error: "Invalid Credentials" })
			return
		}

		generateTokenAndSetCookie(user?._id as ObjectId, res)
		res.status(200).json(user)

	} catch (error) {
		console.log(`Error in Logging User in ${error instanceof Error && error.message}`);
		res.status(500).json({ error: "Internal server error" })
		return
	}
}


// User Registration Controller
export const register = async (req: Request, res: Response): Promise<void> => {
	const { username, password, email }: IUser = req.body
	try {
		if (!username || !password || !email) {
			res.status(400).json({ error: "Please fill all the input fields" })
			return
		}
		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
		if (!emailRegex.test(email)) {
			res.status(400).json({ error: "Invalid email format" })
			return
		}
		if (password.length < 6) {
			res.status(400).json({ error: "Password must be atleast 6 character" })
			return
		}
		const isUser = await User.findOne({ username })
		if (isUser) {
			res.status(400).json("username is already been using by someone else")
			return
		}
		const isEmail = await User.findOne({ email })
		if (isEmail) {
			res.status(400).json("email is already been using by someone else")
			return
		}

		const salt = getSalt('10')
		const hashPass = await hash(password, salt)

		const newUser = new User({
			email: email,
			username: username,
			password: hashPass,
		})

		if (newUser) {
			await newUser.save()
			generateTokenAndSetCookie(newUser._id as ObjectId, res)
			res.status(201).json({ message: "Account created Successfully" })
			return
		}


	} catch (error) {
		console.log(`Error in Registering User ${error instanceof Error && error.message}`);
		res.status(500).json({ error: "Internal server error" })
		return
	}
}


export const getPorfile = async (req: Request, res: Response): Promise<void> => {
	const { username } = req.params
	try {
		const user = await User.findOne({ username }).select("-password")
		if (!user) {
			res.status(404).json({ error: "Invalid username" })
			return
		}
		res.status(200).json(user)
	} catch (error) {
		console.log(`Error in Getting user Profile ${error instanceof Error && error.message}`);
		res.status(500).json({ error: "Internal server error" })
		return
	}
}

export const updateProfile = async (req: Request, res: Response): Promise<void> => {
	try {
		const { username, email, newPassword, currentPassword, bio } = req.body
		let { profilePic } = req.body

		const user = await User.findById(req.user?._id)

		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
		if (!emailRegex.test(email)) {
			res.status(400).json({ error: "Invalid email format" })
			return
		}

		if ((!newPassword && currentPassword) || (newPassword && !currentPassword)) {
			res.status(400).json({
				error: "Please Provide Both Current and New Password"
			})
			return
		}
		if (newPassword && currentPassword) {
			const isPass = compare(currentPassword, user?.password || "")
			if (newPassword.length < 6 || currentPassword.length < 6) {
				res.status(400).json({ error: "Password must be atleast 6 character" })
				return
			}
			if (!isPass) {
				res.status(400).json({ error: "Invalid Credentials" })
				return
			}
		}
		const isUser = await User.findOne({ username }) && username !== req.user?.username
		if (isUser) {
			res.status(400).json("username is already been using by someone else")
			return
		}
		const isEmail = await User.findOne({ email }) && email !== req.user?.email
		if (isEmail) {
			res.status(400).json("email is already been using by someone else")
			return
		}
		if (profilePic) {
			if (user?.profilePic) {
				const publicId = (user?.profilePic.split('/').pop()?.split(".")[0]) as string
				if (publicId)
					await v2.uploader.destroy(publicId)
			}
			const uploadedResponse = await v2.uploader.upload(profilePic)
			profilePic = uploadedResponse.secure_url

			const salt = getSalt('10')
			const hashPass = await hash(newPassword, salt)

			await User.findByIdAndUpdate(req.user?._id, { bio, profilePic, username, password: hashPass, email })
		}

	} catch (error) {
		console.log(`Error in Updatting user Profile ${error instanceof Error && error.message}`);
		res.status(500).json({ error: "Internal server error" })
		return
	}
}
