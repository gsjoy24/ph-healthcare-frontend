import PHModal from '@/components/Shared/PHModal/PHModal';
import PHDatePicker from '@/components/forms/PHDatePicker';
import PHFileUploader from '@/components/forms/PHFileUploader';
import PHForm from '@/components/forms/PHForm';
import PHInput from '@/components/forms/PHInput';
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
		const data = modifiedPayload(values);

		try {
			const res = await createSpecialty(data).unwrap();

			if (res?.id) {
				toast.success('Specialty created successfully!');
				setOpen(false);
			}
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<PHModal open={open} setOpen={setOpen} title='Create a New Specialty'>
			<PHForm onSubmit={handleFormSubmit}>
				<Grid container spacing={2}>
					<Grid item md={7}>
						<PHDatePicker />
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
