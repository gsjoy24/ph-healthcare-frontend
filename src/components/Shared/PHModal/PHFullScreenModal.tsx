import CloseIcon from '@mui/icons-material/Close';
import { Container } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Dialog from '@mui/material/Dialog';
import IconButton from '@mui/material/IconButton';
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
					<Typography sx={{ ml: 2, flex: 1 }} variant='h6' component='div'>
						{title}
					</Typography>
					<IconButton edge='start' color='inherit' onClick={() => setOpen(false)} aria-label='close'>
						<CloseIcon />
					</IconButton>
				</Toolbar>
			</AppBar>
			<Container>{children}</Container>
		</Dialog>
	);
};

export default PHFullScreenModal;
