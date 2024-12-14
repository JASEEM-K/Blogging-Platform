import { Request, Response, NextFunction } from 'express'
import { verify, JwtPayload } from 'jsonwebtoken'
import User from "./../modals/userModal.ts";

interface customJwtPayload extends JwtPayload {
	userId: string;
}

export const protectedRoute = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
	try {
		const token = req.cookies.jwt
		if (!token) {
			res.status(400).json({ error: "Unauthorized :No Token Provided" })
			return
		}
		const decode = verify(token, process.env.JWT_SECRET as string) as customJwtPayload
		if (!decode) {
			res.status(400).json({ error: "Unauthorized:Invalid Token Porvided" })
			return
		}

		const user = await User.findById(decode.userId).select("-password")
		if (!user) {
			res.status(404).json({ error: "Invalid Token No user not found " })
			return
		}

		req.user = user
		next()
	} catch (error) {
		console.log(`Error in Protected Route ${error instanceof Error && error.message}`);
		res.status(500).json({ error: "Internal server error" })
		return
	}
}


