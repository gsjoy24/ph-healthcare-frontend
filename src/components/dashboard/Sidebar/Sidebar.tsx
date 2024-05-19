import assets from '@/assets';
import { USER_ROLES } from '@/constants/role';
import { TUserRole } from '@/types';
import { drawerItems } from '@/utils/drawerItems';
import MailIcon from '@mui/icons-material/Mail';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import { Stack, Toolbar, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Image from 'next/image';
import Link from 'next/link';
import SidebarItem from './SidebarItem';

const Sidebar = () => {
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
				{drawerItems(USER_ROLES.ADMIN as TUserRole).map((item, index) => (
					<SidebarItem key={index} item={item} />
				))}
			</List>
		</Box>
	);
};

export default Sidebar;
