import { Box, Container, Typography } from '@mui/material';

const Specialist = () => {
	return (
		<Container>
			<Box
				sx={{
					margin: '120px',
					backgroundColor: '#666'
				}}
			>
				<Box>
					<Typography variant='h4' fontWeight={500}>
						Explore Treatments Across Specialties
					</Typography>
					<Typography component='p' fontSize={18}>
						Find experienced doctors across all specialties.
					</Typography>
				</Box>
			</Box>
		</Container>
	);
};

export default Specialist;
