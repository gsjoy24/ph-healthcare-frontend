'use client';
import PHFullScreenModal from '@/components/Shared/PHModal/PHFullScreenModal';
import PHForm from '@/components/forms/PHForm';
import PHInput from '@/components/forms/PHInput';
import PHSelect from '@/components/forms/PHSelect';
import { GenderOptions } from '@/constants';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { Box, Button, Grid, IconButton, Stack } from '@mui/material';
import { useState } from 'react';
import { FieldValues } from 'react-hook-form';

type TProps = {
	open: boolean;
	setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};
const CreateDoctorModal = ({ open, setOpen }: TProps) => {
	const [showPassword, setShowPassword] = useState<boolean>(false);
	const handleSubmit = (data: FieldValues) => {
		console.log(data);
	};
	return (
		<PHFullScreenModal open={open} setOpen={setOpen} title='Create Doctor'>
			<PHForm onSubmit={handleSubmit}>
				<Grid container spacing={4} my={3}>
					<Grid item xs={12} sm={6} md={4}>
						<PHInput name='doctor.name' label='Name' />
					</Grid>

					<Grid item xs={12} sm={6} md={4}>
						<PHInput name='doctor.email' label='Email' />
					</Grid>

					<Grid item xs={12} sm={6} md={4}>
						<div className='relative'>
							<PHInput name='password' label='Password' type={showPassword ? 'text' : 'password'} />
							<IconButton
								onClick={() => setShowPassword((prev) => !prev)}
								sx={{
									position: 'absolute',
									top: 0,
									right: 0
								}}
							>
								{showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
							</IconButton>
						</div>
					</Grid>

					<Grid item xs={12} sm={6} md={4}>
						<PHInput name='doctor.phone' label='Phone' type='tel' />
					</Grid>

					<Grid item xs={12} sm={6} md={4}>
						<PHInput name='doctor.address' label='Address' />
					</Grid>

					<Grid item xs={12} sm={6} md={4}>
						<PHInput name='doctor.registrationNumber' label='Registration Number' />
					</Grid>

					<Grid item xs={12} sm={6} md={4}>
						<PHInput name='doctor.experience' label='Experience' type='number' />
					</Grid>

					<Grid item xs={12} sm={6} md={4}>
						<PHSelect name='doctor.gender' label='Gender' items={GenderOptions} />
					</Grid>

					<Grid item xs={12} sm={6} md={4}>
						<PHInput name='doctor.appointmentFee' label='Appointment Fee' type='number' />
					</Grid>

					<Grid item xs={12} sm={6} md={4}>
						<PHInput name='doctor.qualifications' label='Qualifications' />
					</Grid>

					<Grid item xs={12} sm={6} md={4}>
						<PHInput name='doctor.currentWorkplace' label='Current Workplace' />
					</Grid>

					<Grid item xs={12} sm={6} md={4}>
						<PHInput name='doctor.designation' label='Designation' />
					</Grid>

					<Grid item xs={12}>
						<Stack direction='row' spacing={2}>
							<Box flexGrow={1} />
							<Button type='submit' variant='contained'>
								Create Doctor
							</Button>
						</Stack>
					</Grid>
				</Grid>
			</PHForm>
		</PHFullScreenModal>
	);
};

export default CreateDoctorModal;
