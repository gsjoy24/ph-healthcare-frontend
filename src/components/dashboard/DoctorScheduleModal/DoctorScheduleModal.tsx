import PHModal from '@/components/Shared/PHModal/PHModal';
import PHForm from '@/components/forms/PHForm';
import { useCreateScheduleMutation, useGetSchedulesQuery } from '@/redux/api/scheduleApi';
import { Button, CircularProgress, Grid } from '@mui/material';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import dayjs, { Dayjs } from 'dayjs';
import { useState } from 'react';
import { FieldValues } from 'react-hook-form';
import { toast } from 'sonner';
import MultiScheduleSelector from './MultiScheduleSelector';

type TProps = {
	open: boolean;
	setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const DoctorScheduleModal = ({ open, setOpen }: TProps) => {
	const [createSchedule, { isLoading }] = useCreateScheduleMutation();
	const [date, setDate] = useState<Dayjs | null>(dayjs(new Date()));
	const [selectedScheduleIds, setSelectedScheduleIds] = useState<string[]>([]);
	console.log(selectedScheduleIds);
	const query: Record<string, any> = {};

	if (date) {
		query.startDate = dayjs(date).hour(0).minute(0).millisecond(0).toISOString();
		query.endDate = dayjs(date).hour(23).minute(59).millisecond(59).toISOString();
	}

	const { data } = useGetSchedulesQuery(query);

	const handleFormSubmit = async (values: FieldValues) => {
		// convert date to iso string
		// const startDate = new Date(values.startDate).toISOString();
		// const endDate = new Date(values.endDate).toISOString();
		// try {
		// 	const res = await createSchedule(data).unwrap();
		// 	if (res?.success) {
		// 		toast.success('Schedule created successfully!');
		// 		setOpen(false);
		// 	} else {
		// 		toast.error(res?.message || 'Failed to create schedule');
		// 	}
		// } catch (error) {
		// 	console.log(error);
		// }
	};

	return (
		<PHModal open={open} setOpen={setOpen} title='Create a New Specialty'>
			<PHForm onSubmit={handleFormSubmit}>
				<Grid
					container
					spacing={2}
					sx={{
						maxWidth: 400
					}}
				>
					<Grid item md={12}>
						<LocalizationProvider dateAdapter={AdapterDayjs}>
							<DatePicker
								label={'Date'}
								onChange={(date) => setDate(date)}
								timezone='system'
								disablePast
								slotProps={{
									textField: {
										variant: 'outlined',
										fullWidth: true,
										size: 'small'
									}
								}}
							/>
						</LocalizationProvider>
					</Grid>
					<Grid item md={12}>
						<MultiScheduleSelector
							setSelectedScheduleIds={setSelectedScheduleIds}
							selectedScheduleIds={selectedScheduleIds}
							schedules={data?.data?.data}
						/>
					</Grid>
					<Grid item md={12}>
						<Button type='submit' fullWidth disabled={isLoading}>
							{isLoading ? <CircularProgress size={24} /> : 'Create Schedule'}
						</Button>
					</Grid>
				</Grid>
			</PHForm>
		</PHModal>
	);
};

export default DoctorScheduleModal;
