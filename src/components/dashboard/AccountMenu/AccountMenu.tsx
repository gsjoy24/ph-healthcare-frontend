'use client';
import { getUserInfo } from '@/services/auth.services';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { Avatar, Box, IconButton, Menu, MenuItem, Tooltip, Typography } from '@mui/material';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
const AccountMenu = () => {
	const router = useRouter();
	const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
	const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);

	const userInfo = getUserInfo();

	const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorElUser(event.currentTarget);
	};

	const handleCloseUserMenu = () => {
		setAnchorElUser(null);
	};

	const handleLogout = () => {
		setAnchorElNav(null);
		localStorage.removeItem('accessToken');
		router.push('/login');
	};

	return (
		<Box sx={{ flexGrow: 0 }}>
			<Tooltip title='Open settings'>
				<IconButton onClick={handleOpenUserMenu} sx={{ p: 1, bgcolor: '#fff', color: '#1586FD' }}>
					<KeyboardArrowDownIcon />
				</IconButton>
			</Tooltip>
			<Menu
				sx={{ mt: '45px' }}
				id='menu-appbar'
				anchorEl={anchorElUser}
				anchorOrigin={{
					vertical: 'top',
					horizontal: 'right'
				}}
				keepMounted
				transformOrigin={{
					vertical: 'top',
					horizontal: 'right'
				}}
				open={Boolean(anchorElUser)}
				onClose={handleCloseUserMenu}
			>
				<Link href={`/dashboard/${userInfo?.role}/profile`}>
					<MenuItem>
						<Typography textAlign='center'>Profile</Typography>
					</MenuItem>
				</Link>

				<MenuItem onClick={handleLogout}>
					<Typography textAlign='center'>Log Out</Typography>
				</MenuItem>
			</Menu>
		</Box>
	);
};

export default AccountMenu;
