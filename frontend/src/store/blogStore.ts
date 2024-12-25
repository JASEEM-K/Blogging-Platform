import { create } from "zustand";
import { axiosInstance } from '../lib/axios.ts'
import { IBlog } from "../types.ts";

interface BlogState {
	blogData: IBlog | null,
	createBlog: (content: string) => Promise<void>,
	deleteBlog: (id: string) => Promise<void>,
	editBlog: () => Promise<void>,
	likeBlog: () => Promise<void>,
	commentOnBlog: () => Promise<void>,
	isCreatingBlog: boolean,
	isDeletingBlog: boolean

}


export const useBlogStore = create<BlogState>((set) => ({

	blogData: null,
	isCreatingBlog: false,
	isDeletingBlog: false,

	createBlog: async (content: string) => {
		set({ isCreatingBlog: true })
		try {
			const res = await axiosInstance.post<{ data: IBlog }>('/blog/create', content)
			set({ blogData: res.data as IBlog })
		} catch (error) {
			console.log("Error when creating Blog Post ", error);
			set({ blogData: null })
		} finally {
			set({ isCreatingBlog: false })
		}
	},

	deleteBlog: async (id: string) => {
		set({ isDeletingBlog: true })
		try {
			const res = await axiosInstance.post<{ data: IBlog }>(`/blog/delete/${id}`)
			set({ blogData: res.data as IBlog })
		} catch (error) {
			console.log("Error when Deleting Blog Post ", error);
			set({ blogData: null })
		} finally {
			set({ isDeletingBlog: true })
		}
	},

	editBlog: async () => { },

	likeBlog: async () => { },

	commentOnBlog: async () => { },

})

