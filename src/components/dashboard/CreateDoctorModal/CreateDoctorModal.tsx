'use client';
import PHFullScreenModal from '@/components/Shared/PHModal/PHFullScreenModal';
import PHForm from '@/components/forms/PHForm';
import PHInput from '@/components/forms/PHInput';
import PHSelect from '@/components/forms/PHSelect';
import { GenderOptions } from '@/constants';
import { useCreateDoctorMutation } from '@/redux/api/doctorApi';
import modifiedPayload from '@/utils/modifiedPayload';
import SendIcon from '@mui/icons-material/Send';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { Box, Button, CircularProgress, Grid, IconButton, Stack } from '@mui/material';
import { useState } from 'react';
import { FieldValues } from 'react-hook-form';
import { toast } from 'sonner';

type TProps = {
	open: boolean;
	setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};
const CreateDoctorModal = ({ open, setOpen }: TProps) => {
	const [showPassword, setShowPassword] = useState<boolean>(false);
	const [createDoctor, { isLoading }] = useCreateDoctorMutation();

	const handleSubmit = async (data: FieldValues) => {
		data.doctor.experience = Number(data.doctor.experience);
		data.doctor.appointmentFee = Number(data.doctor.appointmentFee);
		const modifiedData = modifiedPayload(data);
		try {
			const res = await createDoctor(modifiedData).unwrap();
			if (res?.doctor?.id) {
				toast.success('Doctor created successfully!');
				setOpen(false);
			}
		} catch (error) {}
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
							<Button
								type='submit'
								variant='contained'
								disabled={isLoading}
								endIcon={isLoading ? <CircularProgress size={18} /> : <SendIcon />}
							>
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
