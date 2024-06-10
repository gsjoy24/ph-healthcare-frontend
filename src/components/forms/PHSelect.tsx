import { Box, MenuItem, SxProps, TextField } from '@mui/material';
import { Controller, useFormContext } from 'react-hook-form';
import { CiWarning } from 'react-icons/ci';

type PHSelectProps = {
	label?: string;
	type?: string;
	name: string;
	sx?: SxProps;
	required?: boolean;
	items: string[];
};

const PHSelect = ({ label, type = 'text', name, sx, required, items }: PHSelectProps) => {
	const { control, formState } = useFormContext();
	const isError = formState.errors[name] !== undefined;

	return (
		<Controller
			control={control}
			name={name}
			render={({ field }) => (
				<TextField
					{...field}
					sx={{ ...sx, width: '100%' }}
					label={label}
					type={type}
					value={field.value || ''}
					variant='outlined'
					select
					size='small'
					fullWidth
					required={required || false}
					error={isError}
					helperText={
						isError && (
							<Box
								sx={{
									display: 'flex',
									alignItems: 'center',
									gap: 1,
									position: 'relative',
									right: 10
								}}
							>
								<CiWarning size={16} />
								{formState.errors[name]?.message as string}
							</Box>
						)
					}
				>
					{items.map((item) => (
						<MenuItem key={item} value={item}>
							{item}
						</MenuItem>
					))}
				</TextField>
			)}
		/>
	);
};

export default PHSelect;
