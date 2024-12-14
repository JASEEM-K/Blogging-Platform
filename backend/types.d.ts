import { IUser } from "./modals/userModal";


declare global {
	namespace Express {
		interface Request {
			user?: IUser;
		}
	}
}
