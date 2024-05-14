import { Box, Button, Container, Stack, Typography } from '@mui/material';
import Link from 'next/link';

const Navbar = () => {
	return (
		<Container>
			<Stack py={2} direction='row' justifyContent='space-between'>
				<Typography variant='h4' component={Link} href='/' fontWeight={500}>
					P
					<Box component='span' color='primary.main'>
						H
					</Box>{' '}
					Health Care
				</Typography>
				<Stack direction='row' justifyContent='space-between' alignItems='center' gap={4}>
					<Typography component={Link} href='/consultation'>
						Consultation
					</Typography>
					<Typography component={Link} href='/'>
						Health Plans
					</Typography>
					<Typography component={Link} href='/'>
						Medicines
					</Typography>
					<Typography component={Link} href='/'>
						Diagnostics
					</Typography>
					<Typography component={Link} href='/'>
						NGOs
					</Typography>
				</Stack>
				<Button component={Link} href='/login'>
					Login
				</Button>
			</Stack>
		</Container>
	);
};

export default Navbar;
