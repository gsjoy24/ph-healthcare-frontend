import { TDrawerItem } from '@/types';
import { Box, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const SidebarItem = ({ item }: { item: TDrawerItem }) => {
	const { title, path, icon } = item;
	const pathLink = `/dashboard/${path}`;
	const pathname = usePathname();

	return (
		<Link href={pathLink}>
			<ListItem
				key={title}
				disablePadding
				sx={{
					...(pathname === pathLink
						? {
								transition: '0.2s',
								borderRight: '4px solid #1586fd',
								'& svg': {
									color: '#1586fd'
								}
						  }
						: {})
				}}
			>
				<ListItemButton>
					<ListItemIcon>{icon && <Box component={icon} />}</ListItemIcon>
					<ListItemText primary={title} />
				</ListItemButton>
			</ListItem>
		</Link>
	);
};

export default SidebarItem;
