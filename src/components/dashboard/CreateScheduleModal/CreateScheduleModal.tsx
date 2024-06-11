import PHModal from '@/components/Shared/PHModal/PHModal';
import PHDatePicker from '@/components/forms/PHDatePicker';
import PHFileUploader from '@/components/forms/PHFileUploader';
import PHForm from '@/components/forms/PHForm';
import PHInput from '@/components/forms/PHInput';
import PHTimePicker from '@/components/forms/PHTimePicker';
import { useCreateSpecialtyMutation } from '@/redux/api/specialtiesApi';
import modifiedPayload from '@/utils/modifiedPayload';
import { Button, CircularProgress, Grid, TextField } from '@mui/material';
import { FieldValues } from 'react-hook-form';
import { toast } from 'sonner';

type TProps = {
	open: boolean;
	setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const CreateScheduleModal = ({ open, setOpen }: TProps) => {
	const [createSpecialty, { isLoading }] = useCreateSpecialtyMutation();

	const handleFormSubmit = async (values: FieldValues) => {
		console.log(values);

		// try {
		// 	const res = await createSpecialty(data).unwrap();

		// 	if (res?.id) {
		// 		toast.success('Specialty created successfully!');
		// 		setOpen(false);
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
						<PHTimePicker name='startTime' label='Start Time' />
					</Grid>

					<Grid item md={12}>
						<PHTimePicker name='endTime' label='End Time' />
					</Grid>
					<Grid item md={12}>
						<Button type='submit' fullWidth disabled={isLoading}>
							{isLoading ? <CircularProgress size={24} /> : 'Create Specialty'}
						</Button>
					</Grid>
				</Grid>
			</PHForm>
		</PHModal>
	);
};

export default CreateScheduleModal;
