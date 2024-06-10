import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';
import * as React from 'react';

const Transition = React.forwardRef(function Transition(
	props: TransitionProps & {
		children: React.ReactElement<any, any>;
	},
	ref: React.Ref<unknown>
) {
	return <Slide direction='up' ref={ref} {...props} />;
});

type ConfirmModalProps = {
	open: boolean;
	setOpen: React.Dispatch<React.SetStateAction<boolean>>;
	title: string;
	subTitle: string;
	handleAgree: () => void;
};

const ConfirmModal = ({ open, setOpen, title, subTitle, handleAgree }: ConfirmModalProps) => {
	return (
		<Dialog
			open={open}
			TransitionComponent={Transition}
			keepMounted
			onClose={() => setOpen(false)}
			aria-describedby='alert-dialog-slide-description'
		>
			<DialogTitle>{title}</DialogTitle>
			<DialogContent>
				<DialogContentText id='alert-dialog-slide-description'>{subTitle}</DialogContentText>
			</DialogContent>
			<DialogActions>
				<Button onClick={() => setOpen(false)}>Disagree</Button>
				<Button onClick={handleAgree}>Agree</Button>
			</DialogActions>
		</Dialog>
	);
};

export default ConfirmModal;
