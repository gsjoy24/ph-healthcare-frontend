'use client';
import CloseIcon from '@mui/icons-material/Close';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import IconButton from '@mui/material/IconButton';
import { SxProps, styled } from '@mui/material/styles';
import * as React from 'react';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
	'& .MuiDialogContent-root': {
		padding: theme.spacing(2)
	},
	'& .MuiDialogActions-root': {
		padding: theme.spacing(1)
	}
}));

type TModalProps = {
	open: boolean;
	setOpen: React.Dispatch<React.SetStateAction<boolean>>;
	title: string;
	children: React.ReactNode;
	sx?: SxProps;
};

const PHModal = ({ open = false, setOpen, title = '', children, sx }: TModalProps) => {
	const handleClose = () => {
		setOpen(false);
	};

	return (
		<BootstrapDialog onClose={handleClose} aria-labelledby='customized-dialog-title' open={open} sx={{ ...sx }}>
			<DialogTitle sx={{ m: 0, p: 2 }} id='customized-dialog-title'>
				{title}
			</DialogTitle>
			<IconButton
				aria-label='close'
				onClick={handleClose}
				sx={{
					position: 'absolute',
					right: 8,
					top: 8,
					color: (theme) => theme.palette.grey[500]
				}}
			>
				<CloseIcon />
			</IconButton>
			<DialogContent dividers>{children}</DialogContent>
		</BootstrapDialog>
	);
};

export default PHModal;
