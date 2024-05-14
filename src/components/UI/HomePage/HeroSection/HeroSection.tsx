import assets from '@/assets';
import { Box, Button, Container, Typography } from '@mui/material';
import Image from 'next/image';

const HeroSection = () => {
	return (
		<Container
			sx={{
				display: 'flex',
				direction: 'row',
				my: 16
			}}
		>
			<Box
				sx={{
					flex: 1,
					position: 'relative'
				}}
			>
				{/* bg image */}
				<Box
					sx={{
						position: 'absolute',
						width: '700px',
						top: '-90px',
						left: '-120px'
					}}
				>
					<Image src={assets.svgs.grid} alt='bg grid' />
				</Box>

				{/* title and description */}
				<Typography variant='h3' component='h1' fontWeight={500}>
					Healthier Hearts
				</Typography>
				<Typography variant='h3' component='h1' fontWeight={500}>
					Come From
				</Typography>
				<Typography variant='h3' component='h1' fontWeight={500} color='primary.main'>
					Preventive Care
				</Typography>
				<Typography component='p' className='w-1/2 py-4'>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci ratione doloremque dolore nulla quis
					officiis necessitatibus amet dicta temporibus cum quas explicabo itaque eum quam beatae.
				</Typography>

				<Button sx={{ marginRight: '12px' }}>Make Appointment</Button>
				<Button variant='outlined'>Contact Us</Button>
			</Box>
			<Box>Right</Box>
		</Container>
	);
};

export default HeroSection;
