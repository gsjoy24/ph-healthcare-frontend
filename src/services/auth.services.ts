import { authKey } from '@/constants/authkey';
import { decodeToken } from '@/utils/jwt';
import { getFromLocalStorage, setTOLocalStorage } from '@/utils/local-storage';

export const storeUserInfo = (token: string) => {
	return setTOLocalStorage(authKey, token);
};

export const getUserInfo = () => {
	const authToken = getFromLocalStorage(authKey);
	if (!authToken) return null;
	const userData: any = decodeToken(authToken);
	return {
		...userData,
		role: userData?.role?.toLowerCase()
	};
};
