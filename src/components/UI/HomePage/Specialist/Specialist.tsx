import { Box, Button, Container, Stack, Typography } from '@mui/material';
import Image from 'next/image';

const Specialist = async () => {
	const res = await fetch('http://localhost:5000/api/v1/specialties', {
		next: {
			revalidate: 30
		}
	});
	const { data: specialties } = await res.json();

	return (
		<Container>
			<Box
				sx={{
					margin: '60px auto',
					textAlign: 'center'
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

				<Stack direction='row' gap={4} mt={5}>
					{specialties.slice(0, 6).map((specialty: any) => (
						<Box
							key={specialty.id}
							sx={{
								flex: 1,
								width: '150px',
								backgroundColor: 'rgba(245, 245, 245, 1)',
								border: '1px solid rgba(250, 250, 250, 1)',
								borderRadius: '10px',
								padding: '40px 10px',
								textAlign: 'center',
								transition: 'all 0.3s',
								'& img': {
									width: '50px',
									height: '50px',
									margin: '0 auto'
								},
								'&:hover': {
									cursor: 'pointer',
									border: '1px solid #1586FD',
									boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)'
								}
							}}
						>
							<Image src={specialty.icon} alt={specialty.title} width={100} height={100} />
							<Typography component='p' mt={2}>
								{specialty.title}
							</Typography>
						</Box>
					))}
				</Stack>
				<Button variant='outlined' sx={{ mt: 5 }}>
					View All
				</Button>
			</Box>
		</Container>
	);
};

export default Specialist;
