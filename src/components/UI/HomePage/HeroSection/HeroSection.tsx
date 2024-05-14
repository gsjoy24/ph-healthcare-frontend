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
				<Typography component='p' className='py-4'>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci ratione doloremque dolore nulla quis
					officiis necessitatibus amet dicta temporibus cum quas explicabo itaque eum quam beatae.
				</Typography>

				<Button sx={{ marginRight: '12px' }}>Make Appointment</Button>
				<Button variant='outlined'>Contact Us</Button>
			</Box>
			{/* right side */}
			<Box
				sx={{
					position: 'relative'
				}}
			>
				<Box
					sx={{
						p: 1,
						display: 'flex',
						flex: 1,
						justifyContent: 'center',
						position: 'relative',
						mt: 0
					}}
				>
					<Box
						sx={{
							position: 'absolute',
							top: '-30px',
							left: '200px'
						}}
					>
						<Image src={assets.svgs.arrow} alt='arrow' width={100} height={100} />
					</Box>
					<Box
						sx={{
							display: 'flex',
							gap: 2
						}}
					>
						<Box mt={4}>
							<Image src={assets.images.doctor1} alt='doctor1' width={240} height={380} />
						</Box>
						<Box>
							<Image src={assets.images.doctor2} alt='doctor2' width={240} height={350} />
						</Box>
					</Box>
				</Box>
				<Box
					sx={{
						position: 'absolute',
						top: '220px',
						right: '150px'
					}}
				>
					<Image src={assets.images.doctor3} alt='doctor3' width={240} height={240} />
				</Box>
				<Box
					sx={{
						position: 'absolute',
						bottom: '-50px',
						right: '-40px',
						zIndex: -1
					}}
				>
					<Image src={assets.images.stethoscope} alt='stethoscope' width={180} height={180} />
				</Box>
			</Box>
		</Container>
	);
};

export default HeroSection;
