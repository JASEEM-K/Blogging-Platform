import { create } from "zustand";
import { axiosInstance } from '../lib/axios.ts'
import { IUser } from "../types.ts";

interface UserState {
	authUser: IUser | null,
	login: (formData: IUser) => Promise<void>,
	register: (formData: IUser) => Promise<void>,
	authCheck: () => Promise<void>,
	isRegistering: boolean,
	isLogingIn: boolean,
	isCheckingAuth: boolean,
}

export const useUserStore = create<UserState>((set) => ({
	authUser: null,
	isRegistering: false,
	isLogingIn: false,
	isCheckingAuth: true,

	register: async (formData: IUser) => {
		set({ isRegistering: true })
		try {
			const res = await axiosInstance.post<{ data: IUser }>('/auth/register', formData)
			set({ authUser: res.data as IUser })
		} catch (error) {
			console.log('Error in Registering User ', error);
			set({ authUser: null })
		} finally {
			set({ isRegistering: false })
		}
	},

	authCheck: async () => {
		try {
			const res = await axiosInstance.post<{ data: IUser }>('/auth/me')
			set({ authUser: res.data as IUser })
		} catch (error) {
			console.log('Error in Auth Checking in User ', error);
			set({ authUser: null })
		} finally {
			set({ isCheckingAuth: false })
		}
	},



	login: async (formData: IUser) => {
		set({ isLogingIn: true })
		try {
			const res = await axiosInstance.post<{ data: IUser }>('/auth/login', formData)
			set({ authUser: res.data as IUser })
		} catch (error) {
			console.log('Error in Loging in User ', error);
			set({ authUser: null })
		} finally {
			set({ isLogingIn: false })
		}

	}


}))

