import assets from '@/assets';
import { Box, Button, Container, Grid, Stack, TextField, Typography } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';

const RegisterPage = () => {
	return (
		<Container>
			<Stack justifyContent='center' alignItems='center'>
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
							<Typography variant='h6'>Patient Register</Typography>
						</Box>
					</Stack>

					<Box>
						<form>
							<Grid container spacing={2} my={1}>
								<Grid item md={12} sm={12}>
									<TextField label='Name' variant='outlined' size='small' fullWidth />
								</Grid>
								<Grid item md={6}>
									<TextField label='Email' variant='outlined' size='small' fullWidth />
								</Grid>
								<Grid item md={6}>
									<TextField label='Password' type='password' variant='outlined' size='small' fullWidth />
								</Grid>
								<Grid item md={6}>
									<TextField label='Contact Number' type='tel' variant='outlined' size='small' fullWidth />
								</Grid>
								<Grid item md={6}>
									<TextField label='Address' variant='outlined' size='small' fullWidth />
								</Grid>
							</Grid>

							<Button
								sx={{
									my: 2
								}}
								fullWidth
							>
								Register
							</Button>

							<Box>
								<Typography variant='body2' align='center'>
									Already have an account?
									<Button color='primary' variant='text' component={Link} href='/login'>
										Login
									</Button>
								</Typography>
							</Box>
						</form>
					</Box>
				</Box>
			</Stack>
		</Container>
	);
};

export default RegisterPage;
