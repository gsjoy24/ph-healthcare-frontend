import CloseIcon from '@mui/icons-material/Close';
import { Container } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Slide from '@mui/material/Slide';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { TransitionProps } from '@mui/material/transitions';
import * as React from 'react';

const Transition = React.forwardRef(function Transition(
	props: TransitionProps & {
		children: React.ReactElement;
	},
	ref: React.Ref<unknown>
) {
	return <Slide direction='up' ref={ref} {...props} />;
});

type TProps = {
	open: boolean;
	setOpen: React.Dispatch<React.SetStateAction<boolean>>;
	children: React.ReactNode;
	title: string;
};
const PHFullScreenModal = ({ open, setOpen, children, title }: TProps) => {
	return (
		<Dialog fullScreen open={open} onClose={() => setOpen(false)} TransitionComponent={Transition}>
			<AppBar sx={{ position: 'relative' }}>
				<Toolbar>
					<IconButton edge='start' color='inherit' onClick={() => setOpen(false)} aria-label='close'>
						<CloseIcon />
					</IconButton>
					<Typography sx={{ ml: 2, flex: 1 }} variant='h6' component='div'>
						{title}
					</Typography>
					<Button
						autoFocus
						variant='outlined'
						sx={{
							color: 'white'
						}}
						onClick={() => console.log('object')}
					>
						Submit
					</Button>
				</Toolbar>
			</AppBar>
			<Container>{children}</Container>
		</Dialog>
	);
};

export default PHFullScreenModal;
