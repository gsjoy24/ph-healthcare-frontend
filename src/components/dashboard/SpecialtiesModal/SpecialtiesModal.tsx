import PHModal from '@/components/Shared/PHModal/PHModal';
import PHFileUploader from '@/components/forms/PHFileUploader';
import PHForm from '@/components/forms/PHForm';
import PHInput from '@/components/forms/PHInput';
import { Button, Grid, TextField } from '@mui/material';

type TProps = {
	open: boolean;
	setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const SpecialtiesModal = ({ open, setOpen }: TProps) => {
	const handleFormSubmit = () => {};
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
