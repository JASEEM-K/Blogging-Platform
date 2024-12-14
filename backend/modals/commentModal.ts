import mongoose, { Schema, Document, Model } from 'mongoose'

export interface IComment extends Document {
	postId: mongoose.Schema.Types.ObjectId,
	author: mongoose.Schema.Types.ObjectId,
	content: string,
}

const commentSchema: Schema<IComment> = new mongoose.Schema({

	postId: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "User",
		required: true,
	},

	author: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "User",
		required: true,
	},

	content: {
		type: String,
		required: true,
	},


}, { timestamps: true })

const Comment: Model<IComment> = mongoose.model<IComment>("Comment", commentSchema)

export default Comment
