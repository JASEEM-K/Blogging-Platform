import mongoose, { Schema, Document, Model } from 'mongoose'

export interface IUser extends Document {
	username: string,
	email: string,
	password: string,
	bio?: string,
	profilePic?: string,
}


const userSchema: Schema<IUser> = new mongoose.Schema({

	username: {
		type: String,
		required: true,
	},

	email: {
		type: String,
		required: true,
	},


	password: {
		type: String,
		required: true,
	},

	bio: {
		type: String,
	},

	profilePic: {
		type: String,
	},
}, { timestamps: true })


const User: Model<IUser> = mongoose.model<IUser>('User', userSchema)

export default User
