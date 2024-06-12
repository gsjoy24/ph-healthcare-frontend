'use client';
import { useGetUserProfileQuery } from '@/redux/api/userApi';
import { getUserInfo } from '@/services/auth.services';
import MenuIcon from '@mui/icons-material/Menu';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { Avatar, Badge, Menu, MenuItem, Stack, Tooltip } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import AccountMenu from '../AccountMenu/AccountMenu';
import Sidebar from '../Sidebar/Sidebar';

const drawerWidth = 240;

export default function DashboardDrawer({ children }: { children: React.ReactNode }) {
	const [mobileOpen, setMobileOpen] = React.useState(false);
	const [isClosing, setIsClosing] = React.useState(false);

	const { data, isLoading } = useGetUserProfileQuery({});

	if (isLoading) {
		return <div>Loading...</div>;
	}

	const { name, profilePhoto } = data?.data;

	const handleDrawerClose = () => {
		setIsClosing(true);
		setMobileOpen(false);
	};

	const handleDrawerTransitionEnd = () => {
		setIsClosing(false);
	};

	const handleDrawerToggle = () => {
		if (!isClosing) {
			setMobileOpen(!mobileOpen);
		}
	};

	return (
		<Box sx={{ display: 'flex' }}>
			<CssBaseline />
			<AppBar
				position='fixed'
				sx={{
					width: { sm: `calc(100% - ${drawerWidth}px)` },
					ml: { sm: `${drawerWidth}px` },
					bgcolor: '#f4f7fe',
					boxShadow: 'none',
					borderBottom: '1px solid #e0e0e0'
				}}
			>
				<Toolbar>
					<IconButton
						color='inherit'
						aria-label='open drawer'
						edge='start'
						onClick={handleDrawerToggle}
						sx={{ mr: 2, display: { sm: 'none' }, color: 'primary.main' }}
					>
						<MenuIcon />
					</IconButton>
					<Box
						sx={{
							display: 'flex',
							justifyContent: 'space-between',
							width: '100%',
							alignItems: 'center'
						}}
					>
						<Box>
							<Typography variant='body2' noWrap component='div' color='gray'>
								Hi, {name}
							</Typography>
						</Box>
						<Stack direction='row' gap={3} alignItems='center'>
							<Badge
								badgeContent={4}
								color='primary'
								sx={{
									bgcolor: '#fff',
									p: 0.7,
									borderRadius: '50%'
								}}
							>
								<NotificationsIcon color='action' />
							</Badge>
							<Avatar
								alt={name}
								src={profilePhoto}
								sx={{
									border: '1px solid #fff',
									outline: '2px solid #1586FD'
								}}
							/>
							<AccountMenu />
						</Stack>
					</Box>
				</Toolbar>
			</AppBar>
			<Box component='nav' sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }} aria-label='mailbox folders'>
				{/* The implementation can be swapped with js to avoid SEO duplication of links. */}
				<Drawer
					variant='temporary'
					open={mobileOpen}
					onTransitionEnd={handleDrawerTransitionEnd}
					onClose={handleDrawerClose}
					ModalProps={{
						keepMounted: true // Better open performance on mobile.
					}}
					sx={{
						display: { xs: 'block', sm: 'none' },
						'& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth }
					}}
				>
					<Sidebar />
				</Drawer>
				<Drawer
					variant='permanent'
					sx={{
						display: { xs: 'none', sm: 'block' },
						'& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth }
					}}
					open
				>
					<Sidebar />
				</Drawer>
			</Box>
			<Box component='main' sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}>
				<Toolbar />
				{children}
			</Box>
		</Box>
	);
}
