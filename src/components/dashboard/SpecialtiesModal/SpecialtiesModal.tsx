import PHModal from '@/components/Shared/PHModal/PHModal';
import PHFileUploader from '@/components/forms/PHFileUploader';
import PHForm from '@/components/forms/PHForm';
import PHInput from '@/components/forms/PHInput';
import modifiedPayload from '@/utils/modifiedPayload';
import { Button, Grid, TextField } from '@mui/material';
import { FieldValues } from 'react-hook-form';

type TProps = {
	open: boolean;
	setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const SpecialtiesModal = ({ open, setOpen }: TProps) => {
	const handleFormSubmit = (values: FieldValues) => {
		const data = modifiedPayload(values);

		try {
		} catch (error) {}
	};
	return (
		<PHModal open={open} setOpen={setOpen} title='Create a New Specialty'>
			<PHForm onSubmit={handleFormSubmit}>
				<Grid container spacing={2}>
					<Grid item md={7}>
						<PHInput name='title' label='Specialty Title' />
					</Grid>
					<Grid item md={5}>
						<PHFileUploader name='file' label='Upload file' />
					</Grid>
					<Grid item md={12}>
						<Button type='submit' fullWidth>
							Create
						</Button>
					</Grid>
				</Grid>
			</PHForm>
		</PHModal>
	);
};

export default SpecialtiesModal;
