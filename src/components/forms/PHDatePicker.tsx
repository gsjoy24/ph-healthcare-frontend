import { Box, SxProps } from '@mui/material';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import dayjs from 'dayjs';
import { Controller, useFormContext } from 'react-hook-form';
import { CiWarning } from 'react-icons/ci';

type TProps = {
	label?: string;
	name: string;
	required?: boolean;
	sx?: SxProps;
	setValue?: React.Dispatch<React.SetStateAction<any>>;
};

const PHDatePicker = ({ label, name, required, sx, setValue }: TProps) => {
	const { control, formState } = useFormContext();

	return (
		<Controller
			name={name}
			control={control}
			defaultValue={dayjs(new Date().toDateString())}
			render={({ field: { onChange, value, ...field }, fieldState: { error } }) => (
				<LocalizationProvider dateAdapter={AdapterDayjs}>
					<DatePicker
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
								onChange: (e) => {
									if (setValue) {
										setValue(e.target.value);
									}
								},
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

export default PHDatePicker;
