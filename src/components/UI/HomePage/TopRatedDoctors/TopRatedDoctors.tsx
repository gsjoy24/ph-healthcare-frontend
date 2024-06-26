import { Box, Button, Container, Grid, Typography } from '@mui/material';

import DoctorCard from './DorcorCard';

const TopRatedDoctors = async () => {
	const res = await fetch('http://localhost:5000/api/v1/doctors?page=1&limit=3', {
		next: {
			revalidate: 30
		}
	});
	const { data: doctors } = await res.json();

	return (
		<Box
			sx={{
				py: 10,
				backgroundColor: 'rgba(20, 20, 20, 0.1)',
				clipPath: 'polygon(0 0, 100% 15%, 100% 100%, 0 85%)'
			}}
		>
			<Box
				sx={{
					maxWidth: '500px',
					margin: '30px auto',
					textAlign: 'center'
				}}
			>
				<Typography variant='h4' fontWeight={500} mb={2}>
					Our Top Rated Doctors
				</Typography>
				<Typography component='p' fontSize={18}>
					Access to expert physicians, surgeons, advanced technology, and top-quality surgery facilities here.
				</Typography>
			</Box>

			{/* doctors */}
			<Container
				sx={{
					margin: '30px auto'
				}}
			>
				<Grid container spacing={3}>
					{doctors.map((doctor: any) => (
						<Grid item key={doctor._id} xs={12} sm={6} md={4}>
							<DoctorCard doctor={doctor} />
						</Grid>
					))}
				</Grid>
				<Box
					sx={{
						textAlign: 'center'
					}}
				>
					<Button variant='outlined' sx={{ mt: 5 }}>
						View All
					</Button>
				</Box>
			</Container>
		</Box>
	);
};

export default TopRatedDoctors;
