import PHModal from '@/components/Shared/PHModal/PHModal';
import PHDatePicker from '@/components/forms/PHDatePicker';
import PHForm from '@/components/forms/PHForm';

import { useCreateScheduleMutation } from '@/redux/api/scheduleApi';
import { Button, CircularProgress, Grid } from '@mui/material';
import { FieldValues } from 'react-hook-form';
import { toast } from 'sonner';

type TProps = {
	open: boolean;
	setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const DoctorScheduleModal = ({ open, setOpen }: TProps) => {
	const [createSchedule, { isLoading }] = useCreateScheduleMutation();

	const handleFormSubmit = async (values: FieldValues) => {
		// convert date to iso string
		const startDate = new Date(values.startDate).toISOString();
		const endDate = new Date(values.endDate).toISOString();

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
						<PHDatePicker name='startDate' label='Start Date' />
					</Grid>
					<Grid item md={12}>
						<PHDatePicker name='endDate' label='End Date' />
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
