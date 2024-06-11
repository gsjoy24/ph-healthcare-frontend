import { Box, SxProps } from '@mui/material';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import dayjs from 'dayjs';
import { Controller, useFormContext } from 'react-hook-form';
import { CiWarning } from 'react-icons/ci';

type TProps = {
	label?: string;
	name: string;
	required?: boolean;
	sx?: SxProps;
};

const PHTimePicker = ({ label, name, required, sx }: TProps) => {
	const { control, formState } = useFormContext();

	return (
		<Controller
			name={name}
			control={control}
			defaultValue={dayjs(new Date().toDateString())}
			render={({ field: { onChange, value, ...field }, fieldState: { error } }) => (
				<LocalizationProvider dateAdapter={AdapterDayjs}>
					<TimePicker
						label={label}
						{...field}
						value={value || Date.now()}
						onChange={(date) => onChange(date)}
						timezone='system'
						disablePast
						slotProps={{
							textField: {
								sx: { ...sx },
								required: required || true,
								variant: 'outlined',
								fullWidth: true,
								size: 'small',
								error: !!error?.message,
								helperText: error?.message
									? `${(
											<Box
												sx={{
													display: 'flex',
													alignItems: 'center',
													gap: 1,
													position: 'relative',
													right: 10
												}}
											>
												<CiWarning size={16} /> {error?.message}
											</Box>
									  )}`
									: null
							}
						}}
					/>
				</LocalizationProvider>
			)}
		/>
	);
};

export default PHTimePicker;
