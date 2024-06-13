import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { Input } from '@mui/material';
import Button from '@mui/material/Button';
import * as React from 'react';

type TProps = {
	onFileUpload: (file: File) => void;
	label?: string;
	sx?: any;
	isUpdating?: boolean;
};

export default function PHAutoFileUploader({ onFileUpload, label = 'Upload File', sx, isUpdating }: TProps) {
	return (
		<>
			<Button
				component='label'
				tabIndex={-1}
				startIcon={<CloudUploadIcon />}
				sx={{ ...sx }}
				disabled={isUpdating}
				variant='text'
			>
				{isUpdating ? 'Uploading...' : label}
				<Input
					type='file'
					inputProps={{ accept: 'image/*' }}
					sx={{ display: 'none' }}
					onChange={(e) => {
						const file = (e?.target as HTMLInputElement)?.files?.[0];
						if (file) {
							onFileUpload(file);
						}
					}}
				/>
			</Button>
		</>
	);
}
