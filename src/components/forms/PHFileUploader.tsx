import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { Input } from '@mui/material';
import Button from '@mui/material/Button';
import * as React from 'react';
import { Controller, useFormContext } from 'react-hook-form';

type TProps = {
	name: string;
	label: string;
	sx?: any;
};

export default function PHFileUploader({ name, label, sx }: TProps) {
	const { control } = useFormContext();
	return (
		<Controller
			name={name}
			control={control}
			render={({ field: { onChange, value, ...field } }) => (
				<Button component='label' tabIndex={-1} startIcon={<CloudUploadIcon />} sx={{ ...sx }}>
					{label || 'Upload File'}
					<Input
						{...field}
						type='file'
						value={value?.fileName}
						sx={{ display: 'none' }}
						onChange={(e) => onChange((e?.target as HTMLInputElement)?.files?.[0])}
					/>
				</Button>
			)}
		/>
	);
}
