'use client';

import { useGetUserProfileQuery } from '@/redux/api/userApi';
import { Box, Container, Grid, Stack, Typography, styled } from '@mui/material';
import Image from 'next/image';

const InfoBox = styled(Box)(({ theme }) => ({
	padding: '8px 12px',
	border: `1px solid ${theme.palette.divider}`,
	borderRadius: theme.shape.borderRadius,
	background: '#f7f4fe',
	width: '100%'
}));

const DoctorProfile = () => {
	const { data, isLoading } = useGetUserProfileQuery({});
	return (
		<Container>
			<Grid container spacing={3}>
				<Grid item xs={12} md={4}>
					<Image src={data?.data?.profilePhoto} alt='Doctor' width={300} height={300} className='rounded-lg' />
				</Grid>
				<Grid item xs={12} md={8}>
					<Typography variant='h4' gutterBottom>
						{data?.data?.name}
					</Typography>
					<Stack
						gap={2}
						mb={1}
						alignItems='center'
						direction={{
							xs: 'column',
							md: 'row'
						}}
					>
						<InfoBox>
							<Typography variant='caption'>Role</Typography>
							<Typography variant='body1'>{data?.data?.role}</Typography>
						</InfoBox>
						<InfoBox>
							<Typography variant='caption'>Gender</Typography>
							<Typography variant='body1'>{data?.data?.gender}</Typography>
						</InfoBox>
					</Stack>
					<Stack
						gap={2}
						mb={1}
						alignItems='center'
						direction={{
							xs: 'column',
							md: 'row'
						}}
					>
						<InfoBox>
							<Typography variant='caption'>Email</Typography>
							<Typography variant='body1'>{data?.data?.email}</Typography>
						</InfoBox>
						<InfoBox>
							<Typography variant='caption'>Phone</Typography>
							<Typography variant='body1'>{data?.data?.phone}</Typography>
						</InfoBox>
					</Stack>
					<Stack
						gap={2}
						mb={1}
						alignItems='center'
						direction={{
							xs: 'column',
							md: 'row'
						}}
					>
						<InfoBox>
							<Typography variant='caption'>Qualifications</Typography>
							<Typography variant='body1'>{data?.data?.qualifications}</Typography>
						</InfoBox>
						<InfoBox>
							<Typography variant='caption'>Experience</Typography>
							<Typography variant='body1'>{data?.data?.experience}</Typography>
						</InfoBox>
					</Stack>
					<Stack
						gap={2}
						mb={1}
						alignItems='center'
						direction={{
							xs: 'column',
							md: 'row'
						}}
					>
						<InfoBox>
							<Typography variant='caption'>Current Workplace</Typography>
							<Typography variant='body1'>{data?.data?.currentWorkplace}</Typography>
						</InfoBox>
						<InfoBox>
							<Typography variant='caption'>Designation</Typography>
							<Typography variant='body1'>{data?.data?.designation}</Typography>
						</InfoBox>
					</Stack>
					<Stack
						gap={2}
						mb={1}
						alignItems='center'
						direction={{
							xs: 'column',
							md: 'row'
						}}
					>
						<InfoBox>
							<Typography variant='caption'>Registration Number</Typography>
							<Typography variant='body1'>{data?.data?.registrationNumber}</Typography>
						</InfoBox>
						<InfoBox>
							<Typography variant='caption'>Appointment Fee</Typography>
							<Typography variant='body1'>{data?.data?.appointmentFee}</Typography>
						</InfoBox>
					</Stack>
					<Stack
						gap={2}
						mb={1}
						alignItems='center'
						direction={{
							xs: 'column',
							md: 'row'
						}}
					>
						<InfoBox>
							<Typography variant='caption'>Address</Typography>
							<Typography variant='body1'>{data?.data?.address}</Typography>
						</InfoBox>
						<InfoBox>
							<Typography variant='caption'>Average Rating</Typography>
							<Typography variant='body1'>{data?.data?.avgRating}</Typography>
						</InfoBox>
					</Stack>
				</Grid>
			</Grid>
		</Container>
	);
};

export default DoctorProfile;

//  {
//       id: 'ed588bf1-b2a5-4523-bc13-f677039c1c57',
//       email: 'sompasaha@example.com',
//       status: 'ACTIVE',
//       role: 'DOCTOR',
//       needPasswordChange: true,
//       createdAt: '2024-05-14T17:07:54.459Z',
//       updatedAt: '2024-05-14T17:07:54.459Z',
//       name: 'Dr. Sompa Saha',
//       gender: 'MALE',
//       phone: '+1234567890',
//       profilePhoto:
//         'https://res.cloudinary.com/dghszztcc/image/upload/v1715706474/ffjpzowojg1nr6gafs3b.png',
//       address: '123 Main Street, City, Country',
//       registrationNumber: '12345',
//       experience: 10,
//       appointmentFee: 100,
//       qualifications: 'MBBS, MD',
//       currentWorkplace: 'City Hospital',
//       designation: 'Consultant Physician',
//       avgRating: 0,
//       isDeleted: false
//     },
