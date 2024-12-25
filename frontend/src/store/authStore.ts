import { create } from "zustand";
import { axiosInstance } from '../lib/axios.ts'
import { IUser } from "../types.ts";

interface AuthState {
	authUser: IUser | null,
	login: (formData: IUser) => Promise<void>,
	register: () => Promise<void>,
	authCheck: () => Promise<void>,
}

export const useAuthStore = create<AuthState>((set) => ({
	authUser: null,
	register: async () => {
		try {
			const res: IUser = await axiosInstance.post('/auth/register')
			set({ authUser: res })
		} catch (error) {
			console.log('Error in Registering User ', error);
			set({ authUser: null })
		}
	},

	authCheck: async () => {
		try {
			const res = await axiosInstance.post<{ data: IUser }>('/auth/me')


			set({ authUser: res.data })
		} catch (error) {
			console.log('Error in Auth Checking in User ', error);
			set({ authUser: null })
		}
	},



	login: async (formData: IUser) => {
		try {
			const res: IUser = await axiosInstance.post('/auth/login', formData)
			set({ authUser: res })
		} catch (error) {
			console.log('Error in Loging in User ', error);
			set({ authUser: null })
		}
	}


}))

