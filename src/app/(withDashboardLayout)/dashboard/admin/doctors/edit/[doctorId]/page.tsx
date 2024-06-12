'use client';
import PHForm from '@/components/forms/PHForm';
import PHInput from '@/components/forms/PHInput';
import PHSelect from '@/components/forms/PHSelect';
import { GenderOptions } from '@/constants';
import { useEditDoctorMutation, useGetDoctorQuery } from '@/redux/api/doctorApi';
import SendIcon from '@mui/icons-material/Send';
import { Backdrop, Box, Button, CircularProgress, Container, Grid, Stack, Typography } from '@mui/material';
import { useRouter } from 'next/navigation';
import { FieldValues } from 'react-hook-form';
import { toast } from 'sonner';

type TProps = {
	params: {
		doctorId: string;
	};
};

const EditDoctor = ({ params: { doctorId } }: TProps) => {
	const router = useRouter();
	const [editDoctor, { isLoading: isUpdating }] = useEditDoctorMutation();
	const { data, isLoading } = useGetDoctorQuery(doctorId);

	const defaultValues = {
		name: data?.data?.name,
		email: data?.data?.email,
		phone: data?.data?.phone,
		address: data?.data?.address,
		registrationNumber: data?.data?.registrationNumber,
		experience: data?.data?.experience,
		gender: data?.data?.gender,
		appointmentFee: data?.data?.appointmentFee,
		qualifications: data?.data?.qualifications,
		currentWorkplace: data?.data?.currentWorkplace,
		designation: data?.data?.designation
	};

	const handleSubmit = async (data: FieldValues) => {
		data.experience = Number(data.experience);
		data.appointmentFee = Number(data.appointmentFee);

		try {
			const res = await editDoctor({
				id: doctorId,
				data
			}).unwrap();

			console.log(res);
			if (res.success) {
				router.push('/dashboard/admin/doctors');
				toast.success('Doctor updated successfully!');
			} else {
				toast.error('Failed to update doctor');
			}
		} catch (error: any) {
			toast.error(error.message || 'Failed to update doctor');
		}
	};
	return (
		<Container>
			<Typography variant='h4' gutterBottom>
				Update Doctor
			</Typography>
			{isLoading ? (
				<Backdrop open={isLoading} sx={{ color: '#fff' }}>
					<CircularProgress color='inherit' />
				</Backdrop>
			) : (
				<PHForm onSubmit={handleSubmit} defaultValues={defaultValues}>
					<Grid container spacing={4} my={3}>
						<Grid item xs={12} sm={6} md={4}>
							<PHInput name='name' label='Name' />
						</Grid>

						<Grid item xs={12} sm={6} md={4}>
							<PHInput name='email' label='Email' />
						</Grid>

						<Grid item xs={12} sm={6} md={4}>
							<PHInput name='phone' label='Phone' type='tel' />
						</Grid>

						<Grid item xs={12} sm={6} md={4}>
							<PHInput name='address' label='Address' />
						</Grid>

						<Grid item xs={12} sm={6} md={4}>
							<PHInput name='registrationNumber' label='Registration Number' />
						</Grid>

						<Grid item xs={12} sm={6} md={4}>
							<PHInput name='experience' label='Experience' type='number' />
						</Grid>

						<Grid item xs={12} sm={6} md={4}>
							<PHSelect name='gender' label='Gender' items={GenderOptions} />
						</Grid>

						<Grid item xs={12} sm={6} md={4}>
							<PHInput name='appointmentFee' label='Appointment Fee' type='number' />
						</Grid>

						<Grid item xs={12} sm={6} md={4}>
							<PHInput name='qualifications' label='Qualifications' />
						</Grid>

						<Grid item xs={12} sm={6} md={4}>
							<PHInput name='currentWorkplace' label='Current Workplace' />
						</Grid>

						<Grid item xs={12} sm={6} md={4}>
							<PHInput name='designation' label='Designation' />
						</Grid>

						<Grid item xs={12}>
							<Stack direction='row' spacing={2}>
								<Box flexGrow={1} />
								<Button
									type='submit'
									variant='contained'
									disabled={isUpdating}
									endIcon={isUpdating ? <CircularProgress size={18} /> : <SendIcon />}
								>
									Update
								</Button>
							</Stack>
						</Grid>
					</Grid>
				</PHForm>
			)}
		</Container>
	);
};

export default EditDoctor;
