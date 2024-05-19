import assets from '@/assets';
import { getUserInfo } from '@/services/auth.services';
import { TUserRole } from '@/types';
import { drawerItems } from '@/utils/drawerItems';
import { Stack, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import SidebarItem from './SidebarItem';

const Sidebar = () => {
	const [userRole, setUserRole] = useState('');
	useEffect(() => {
		const userInfo = getUserInfo() as any;
		setUserRole(userInfo?.role);
	}, []);

	return (
		<Box>
			<Stack
				direction='row'
				justifyContent='center'
				alignItems='center'
				sx={{ p: 1 }}
				gap={1}
				component={Link}
				href={'/'}
			>
				<Image src={assets.svgs.logo} alt='logo' width={40} height={40} />
				<Typography variant='h6'>PH Health Care</Typography>
			</Stack>
			<Divider />
			<List>
				{drawerItems(userRole as TUserRole).map((item, index) => (
					<SidebarItem key={index} item={item} />
				))}
			</List>
		</Box>
	);
};

export default Sidebar;
