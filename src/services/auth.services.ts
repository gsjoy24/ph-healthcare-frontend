import { authKey } from '@/constants/authKey';
import instance from '@/helpers/axios/axiosInstance';
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

export const isLoggedIn = () => {
	const authToken = getFromLocalStorage(authKey);
	return authToken ? true : false;
};

export const logout = () => {
	return localStorage.removeItem(authKey);
};

export const getNewAccessToken = async () => {
	return await instance({
		method: 'POST',
		url: `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/auth/refresh-token`,
		headers: {
			'Content-Type': 'application/json'
		},
		withCredentials: true
	});
};
