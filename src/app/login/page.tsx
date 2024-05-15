import assets from '@/assets';
import { Box, Button, Container, Grid, Stack, TextField, Typography } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';

const LoginPage = () => {
	return (
		<Container>
			<Stack sx={{ height: '100vh', justifyContent: 'center', alignItems: 'center' }}>
				<Box
					sx={{
						maxWidth: '600px',
						width: '100%',
						boxShadow: 1,
						borderRadius: 1,
						p: 4,
						mt: 4
					}}
				>
					<Stack
						sx={{
							justifyContent: 'center',
							alignItems: 'center',
							gap: 2
						}}
					>
						<Box>
							<Image src={assets.svgs.logo} alt='Ph healthcare logo' width={50} />
						</Box>
						<Box>
							<Typography variant='h6'>Login</Typography>
						</Box>
					</Stack>

					<Box>
						<form>
							<Grid container spacing={2} my={1}>
								<Grid item md={6}>
									<TextField label='Email' variant='outlined' size='small' fullWidth />
								</Grid>
								<Grid item md={6}>
									<TextField label='Password' type='password' variant='outlined' size='small' fullWidth />
								</Grid>
							</Grid>

							{/* create forgot password */}
							<Link href='/forgot-password'>
								<Typography variant='body2' align='right' color='primary'>
									Forgot password?
								</Typography>
							</Link>

							<Button
								sx={{
									my: 2
								}}
								fullWidth
							>
								Login
							</Button>

							<Box>
								<Typography variant='body2' align='center'>
									Don&#39;t have an account?
									<Link href='/register' className='px-2 hover:text-blue-600 duration-200'>
										Register
									</Link>
								</Typography>
							</Box>
						</form>
					</Box>
				</Box>
			</Stack>
		</Container>
	);
};

export default LoginPage;
