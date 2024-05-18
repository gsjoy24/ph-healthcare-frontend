import facebookIcon from '@/assets/landing_page/facebook.png';
import instagramIcon from '@/assets/landing_page/instagram.png';
import linkedin from '@/assets/landing_page/linkedin.png';
import twitterIcon from '@/assets/landing_page/twitter.png';
import { Box, Container, Stack, Typography } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
	return (
		<Box bgcolor={'#0c1133'} py={5}>
			<Container>
				{/* links */}
				<Stack direction='row' justifyContent='center' py={2} alignItems='center' gap={4}>
					<Typography color='#fff' component={Link} href='/consultation'>
						Consultation
					</Typography>
					<Typography color='#fff' component={Link} href='/'>
						Health Plans
					</Typography>
					<Typography color='#fff' component={Link} href='/'>
						Medicines
					</Typography>
					<Typography color='#fff' component={Link} href='/'>
						Diagnostics
					</Typography>
					<Typography color='#fff' component={Link} href='/'>
						NGOs
					</Typography>
				</Stack>

				{/* social links */}
				<Stack direction='row' justifyContent='center' py={4} alignItems='center' gap={2}>
					<Image src={facebookIcon} alt='facebook' width={30} height={30} />
					<Image src={instagramIcon} alt='facebook' width={30} height={30} />
					<Image src={linkedin} alt='facebook' width={30} height={30} />
					<Image src={twitterIcon} alt='facebook' width={30} height={30} />
				</Stack>

				{/* divider */}
				<Box
					sx={{
						borderBottom: '1px dashed #fff'
					}}
				></Box>

				{/* text */}
				<Stack direction='row' justifyContent='space-between' py={3} alignItems='center'>
					<Typography color='#fff' component='p'>
						&copy; 2024 PHealthCare. All Rights Reserved.
					</Typography>

					<Typography color='#fff' variant='h4' component={Link} href='/' fontWeight={500}>
						P
						<Box component='span' color='primary.main'>
							H
						</Box>{' '}
						Health Care
					</Typography>

					<Typography color='#fff' component='p'>
						Privacy Policy | Terms and Conditions
					</Typography>
				</Stack>
			</Container>
		</Box>
	);
};

export default Footer;
