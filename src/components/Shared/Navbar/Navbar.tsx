'use client';
// import AuthButton from '@/components/UI/AuthButton/AuthButton';
import { Box, Container, Stack, Typography } from '@mui/material';
import dynamic from 'next/dynamic';
import Link from 'next/link';

const Navbar = () => {
	const navLinks = [
		{ title: 'Consultation', href: '/consultation' },
		{ title: 'Health Plans', href: '/' },
		{ title: 'Medicines', href: '/' },
		{ title: 'Diagnostics', href: '/' },
		{ title: 'NGOs', href: '/' }
	];

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
					{navLinks.map((link, index) => (
						<Typography
							key={index}
							color='#000'
							component={Link}
							href={link.href}
							sx={{
								display: 'flex',
								flexDirection: 'column',
								justifyContent: 'center',
								alignItems: 'center',
								'& span': {
									width: '0%',
									height: 2,
									backgroundColor: 'primary.main',
									transition: 'width 0.2s ease'
								},
								'&:hover span': {
									width: '100%'
								}
							}}
						>
							{link.title}
							<span></span>
						</Typography>
					))}
				</Stack>
				<AuthButton />
			</Stack>
		</Container>
	);
};

export default Navbar;
