import { getUserInfo, logout } from '@/services/auth.services';
import { Button } from '@mui/material';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const AuthButton = () => {
	const userData = getUserInfo();
	const router = useRouter();

	const handleLogout = () => {
		logout();
		router.refresh();
	};

	return (
		<>
			{userData?.email ? (
				<Button onClick={handleLogout}>Logout</Button>
			) : (
				<Button component={Link} href='/login'>
					Login
				</Button>
			)}
		</>
	);
};

export default AuthButton;
