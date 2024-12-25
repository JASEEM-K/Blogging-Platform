import { create } from "zustand";
import { axiosInstance } from '../lib/axios.ts'
import { IBlog } from "../types.ts";

interface BlogState {
	blogData: IBlog | null,
	createBlog: (content: string) => Promise<void>,
	deleteBlog: (id: string) => Promise<void>,
	editBlog: (content: string, id: string) => Promise<void>,
	likeBlog: (id: string) => Promise<void>,
	commentOnBlog: (content: string, id: string) => Promise<void>,
	isSavingBlog: boolean,
	isDeletingBlog: boolean
	isCommenting: boolean,
}


export const useBlogStore = create<BlogState>((set) => ({

	blogData: null,
	isSavingBlog: false,
	isDeletingBlog: false,
	isCommenting: false,

	createBlog: async (content: string) => {
		set({ isSavingBlog: true })
		try {
			const res = await axiosInstance.post<{ data: IBlog }>('/blog/create', content)
			set({ blogData: res.data as IBlog })
		} catch (error) {
			console.log("Error when creating Blog Post ", error);
			set({ blogData: null })
		} finally {
			set({ isSavingBlog: false })
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
			set({ isDeletingBlog: false })
		}
	},

	editBlog: async (content: string, id: string) => {
		set({ isSavingBlog: true })
		try {
			const res = await axiosInstance.post<{ data: IBlog }>(`/blog/edit/${id}`, content)
			set({ blogData: res.data as IBlog })
		} catch (error) {
			console.log("Error when creating Blog Post ", error);
			set({ blogData: null })
		} finally {
			set({ isSavingBlog: false })
		}
	},

	likeBlog: async (id: string) => {
		set({ isDeletingBlog: true })
		try {
			const res = await axiosInstance.post<{ data: IBlog }>(`/blog/like/${id}`)
			set({ blogData: res.data as IBlog })
		} catch (error) {
			console.log("Error when Deleting Blog Post ", error);
			set({ blogData: null })
		} finally {
			set({ isDeletingBlog: false })
		}
	},

	commentOnBlog: async (content: string, id: string) => {
		set({ isCommenting: true })
		try {
			const res = await axiosInstance.post<{ data: IBlog }>(`/blog/edit/${id}`, content)
			set({ blogData: res.data as IBlog })
		} catch (error) {
			console.log("Error when creating Blog Post ", error);
			set({ blogData: null })
		} finally {
			set({ isCommenting: false })
		}
	},

})

