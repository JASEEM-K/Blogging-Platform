import { sign } from 'jsonwebtoken'
import { ObjectId } from 'mongoose'
import { Response } from 'express'

export const generateTokenAndSetCookie = (userId: ObjectId, res: Response) => {

	const token: string = sign({ userId }, process.env.JWT_SECRET as string, {
		expiresIn: '7d',
	})

	res.cookie("jwt", token, {
		maxAge: 7 * 24 * 60 * 60 * 1000,
		httpOnly: true,
		sameSite: "strict",
		secure: process.env.NODE_ENV !== "development",
	})
}
