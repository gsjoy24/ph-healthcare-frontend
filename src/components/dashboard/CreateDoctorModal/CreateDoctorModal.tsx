import PHFullScreenModal from '@/components/Shared/PHModal/PHFullScreenModal';
import PHForm from '@/components/forms/PHForm';
import PHInput from '@/components/forms/PHInput';
import PHSelect from '@/components/forms/PHSelect';
import { GenderOptions } from '@/constants';
import { Box, Grid, Stack, Typography } from '@mui/material';

type TProps = {
	open: boolean;
	setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};
const CreateDoctorModal = ({ open, setOpen }: TProps) => {
	const handleSubmit = () => {
		console.log('submit');
	};
	return (
		<PHFullScreenModal open={open} setOpen={setOpen} title='Create Doctor'>
			<PHForm onSubmit={handleSubmit}>
				<Grid container spacing={2} my={3}>
					<Grid item xs={12} sm={6} md={4}>
						<PHInput name='doctor.name' label='Name' />
					</Grid>
					<Grid item xs={12} sm={6} md={4}>
						<PHInput name='doctor.email' label='Email' />
					</Grid>
					<Grid item xs={12} sm={6} md={4}>
						<PHInput name='doctor.phone' label='Phone' />
					</Grid>
					<Grid item xs={12} sm={6} md={4}>
						<PHInput name='doctor.address' label='Address' />
					</Grid>
					<Grid item xs={12} sm={6} md={4}>
						<PHInput name='doctor.registrationNumber' label='Registration Number' />
					</Grid>
					<Grid item xs={12} sm={6} md={4}>
						<PHInput name='doctor.experience' label='Experience' />
					</Grid>
					<Grid item xs={12} sm={6} md={4}>
						<PHSelect name='doctor.gender' label='Gender' items={GenderOptions} />
					</Grid>
				</Grid>
			</PHForm>
		</PHFullScreenModal>
	);
};

export default CreateDoctorModal;

// {
//   "password": "mySecurePassword123",
//   "doctor": {
//     "name": "Dr. Saha",
//     "email": "joysaha@example.com",
//     "phone": "+1234567890",
//     "address": "123 Main Street, City, Country",
//     "registrationNumber": "12345",
//     "experience": 10,
//     "gender": "MALE",
//     "appointmentFee": 100,
//     "qualifications": "MBBS, MD",
//     "currentWorkplace": "City Hospital",
//     "designation": "Consultant Physician"
//   }
// }
