import assets from '@/assets';
import chooseUsImage from '@/assets/choose-us.png';
import { Box, Container, Grid, Typography } from '@mui/material';
import Image from 'next/image';

const servicesData = [
	{
		imageSrc: assets.svgs.award,
		title: 'Award Winning Service',
		description: 'Duas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui offici'
	},
	{
		imageSrc: assets.svgs.award,
		title: 'Best Quality Pregnancy Care',
		description: 'Duas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui offici'
	},
	{
		imageSrc: assets.svgs.award,
		title: 'Complete Medical Equipments',
		description: 'Duas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui offici'
	},
	{
		imageSrc: assets.svgs.award,
		title: 'Dedicated Emergency Care',
		description: 'Duas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui offici'
	}
];

const WhyUs = () => {
	return (
		<Container>
			<Box py={3}>
				<Box
					sx={{
						maxWidth: '500px',
						margin: 'auto',
						textAlign: 'center',
						marginBottom: '50px'
					}}
				>
					<Typography variant='h5' fontWeight={500} color='primary.main'>
						Why Us
					</Typography>
					<Typography variant='h4' fontWeight={500}>
						Why Choose Us
					</Typography>
				</Box>

				<Grid container spacing={3} sx={{ display: 'flex', alignItems: 'center' }}>
					<Grid item xs={12} md={6}>
						{servicesData.map((service, index) => (
							<Box
								sx={{
									display: 'flex',
									alignItems: 'center',
									gap: '15px',
									padding: '15px',
									marginBottom: index === servicesData.length - 1 ? 0 : '10px',
									backgroundColor: 'rgba(245, 245, 245, 1)',
									borderRadius: index % 2 === 1 ? '10px 100px 10px 10px' : '10px 10px 100px 10px'
								}}
								key={index}
							>
								<Box
									sx={{
										backgroundColor: '#fff',
										padding: '20px',
										borderRadius: '10px'
									}}
								>
									<Image src={service.imageSrc} alt='award' />
								</Box>
								<Box>
									<Box>
										<Typography variant='h6' fontSize={18} fontWeight={500}>
											{service.title}
										</Typography>
									</Box>
									<Box>
										<Typography variant='body2' fontWeight={400}>
											{service.description}
										</Typography>
									</Box>
								</Box>
							</Box>
						))}
					</Grid>
					<Grid item xs={12} md={6}>
						<Image src={chooseUsImage} alt='Choose Us' width={360} />
					</Grid>
				</Grid>
			</Box>
		</Container>
	);
};

export default WhyUs;
