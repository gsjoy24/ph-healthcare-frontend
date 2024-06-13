import { Box, Grid, Stack, Typography, styled } from '@mui/material';
const InfoBox = styled(Box)(({ theme }) => ({
	padding: '8px 12px',
	border: `1px solid ${theme.palette.divider}`,
	borderRadius: theme.shape.borderRadius,
	background: '#f7f4fe',
	width: '100%'
}));

const DoctorInfo = ({ data }: any) => {
	return (
		<Grid item xs={12} md={8}>
			<Typography variant='h4' gutterBottom>
				{data?.name}
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
					<Typography variant='body1'>{data?.role}</Typography>
				</InfoBox>
				<InfoBox>
					<Typography variant='caption'>Gender</Typography>
					<Typography variant='body1'>{data?.gender}</Typography>
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
					<Typography variant='body1'>{data?.email}</Typography>
				</InfoBox>
				<InfoBox>
					<Typography variant='caption'>Phone</Typography>
					<Typography variant='body1'>{data?.phone}</Typography>
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
					<Typography variant='body1'>{data?.qualifications}</Typography>
				</InfoBox>
				<InfoBox>
					<Typography variant='caption'>Experience</Typography>
					<Typography variant='body1'>{data?.experience}</Typography>
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
					<Typography variant='body1'>{data?.currentWorkplace}</Typography>
				</InfoBox>
				<InfoBox>
					<Typography variant='caption'>Designation</Typography>
					<Typography variant='body1'>{data?.designation}</Typography>
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
					<Typography variant='body1'>{data?.registrationNumber}</Typography>
				</InfoBox>
				<InfoBox>
					<Typography variant='caption'>Appointment Fee</Typography>
					<Typography variant='body1'>{data?.appointmentFee}</Typography>
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
					<Typography variant='body1'>{data?.address}</Typography>
				</InfoBox>
				<InfoBox>
					<Typography variant='caption'>Average Rating</Typography>
					<Typography variant='body1'>{data?.avgRating}</Typography>
				</InfoBox>
			</Stack>
		</Grid>
	);
};

export default DoctorInfo;
