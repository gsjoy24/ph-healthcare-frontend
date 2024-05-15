'use client';
import { getUserInfo } from '@/services/auth.services';
import { Box, Button, Container, Stack, Typography } from '@mui/material';
import Link from 'next/link';

const Navbar = () => {
	const userData = getUserInfo();
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
					<Typography className='hover:text-blue-500 duration-200' component={Link} href='/consultation'>
						Consultation
					</Typography>
					<Typography className='hover:text-blue-500 duration-200' component={Link} href='/'>
						Health Plans
					</Typography>
					<Typography className='hover:text-blue-500 duration-200' component={Link} href='/'>
						Medicines
					</Typography>
					<Typography className='hover:text-blue-500 duration-200' component={Link} href='/'>
						Diagnostics
					</Typography>
					<Typography className='hover:text-blue-500 duration-200' component={Link} href='/'>
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
