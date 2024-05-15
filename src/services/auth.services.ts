import { authKey } from '@/constants/authkey';
import { setTOLocalStorage } from '@/utils/local-storage';

const storeUserInfo = (token: string) => {
	return setTOLocalStorage(authKey, token);
};

export default storeUserInfo;
