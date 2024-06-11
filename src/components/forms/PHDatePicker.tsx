import { SxProps } from '@mui/material';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import dayjs from 'dayjs';
import { Controller, useFormContext } from 'react-hook-form';

type TProps = {
	label?: string;
	name: string;
	required?: boolean;
	sx?: SxProps;
};

const PHDatePicker = ({ label, name, required, sx }: TProps) => {
	const { control } = useFormContext();

	return (
		<Controller
			name={name}
			control={control}
			defaultValue={dayjs(new Date().toDateString())}
			render={({ field: { onChange, value, ...field } }) => (
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
								fullWidth: true
							}
						}}
					/>
				</LocalizationProvider>
			)}
		/>
	);
};

export default PHDatePicker;
