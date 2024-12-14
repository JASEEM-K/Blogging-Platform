import mongoose, { Schema, Document, Model } from 'mongoose'

export interface IBlog extends Document {
	title: string;
	content: string;
	author: mongoose.Schema.Types.ObjectId;
	tags?: string[],
	likes?: mongoose.Schema.Types.ObjectId[],
	comments?: mongoose.Schema.Types.ObjectId[],
	isDraft?: boolean,
}


const blogSchema: Schema<IBlog> = new mongoose.Schema({

	title: {
		type: String,
		required: true,
	},

	content: {
		type: String,
		required: true,
	},

	author: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'User',
		required: true,
	},

	tags: {
		type: String,
		default: [],
	},

	likes: {
		type: [mongoose.Schema.Types.ObjectId],
		ref: 'User',
		default: [],
	},

	comments: {
		type: [mongoose.Schema.Types.ObjectId],
		ref: 'User',
		default: [],
	},


	isDraft: {
		type: Boolean,
		default: false,
	},

}, { timestamps: true })


const Blog: Model<IBlog> = mongoose.model<IBlog>("Blog", blogSchema)

export default Blog



