import { SxProps, TextField } from '@mui/material';
import { Controller, useFormContext } from 'react-hook-form';

type PHInputProps = {
	label?: string;
	type?: string;
	name: string;
	sx?: SxProps;
	required?: boolean;
};

const PHInput = ({ label, type = 'text', name, sx, required }: PHInputProps) => {
	const { control } = useFormContext();

	return (
		<Controller
			control={control}
			name={name}
			render={({ field }) => (
				<TextField
					{...field}
					sx={{ ...sx }}
					label={label}
					placeholder={label}
					type={type}
					variant='outlined'
					size='small'
					fullWidth
					required={required || true}
				/>
			)}
		/>
	);
};

export default PHInput;
