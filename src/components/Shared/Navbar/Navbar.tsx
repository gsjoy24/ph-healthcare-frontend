'use client';
// import AuthButton from '@/components/UI/AuthButton/AuthButton';
import { Box, Container, Stack, Typography } from '@mui/material';
import dynamic from 'next/dynamic';
import Link from 'next/link';

const Navbar = () => {
	const AuthButton = dynamic(() => import('@/components/UI/AuthButton/AuthButton'), { ssr: false });
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
				<AuthButton />
			</Stack>
		</Container>
	);
};

export default Navbar;
