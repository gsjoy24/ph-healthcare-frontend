'use client';
import assets from '@/assets';
import userLogin from '@/services/actions/userLogin';
import storeUserInfo from '@/services/auth.services';
import { Box, Button, Container, Grid, Stack, TextField, Typography } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { SubmitHandler, useForm } from 'react-hook-form';
import { toast } from 'sonner';

type Inputs = {
	email: string;
	password: string;
};

const LoginPage = () => {
	const router = useRouter();
	const {
		register,
		handleSubmit,
		watch,
		reset,
		formState: { errors }
	} = useForm<Inputs>();
	const onSubmit: SubmitHandler<Inputs> = async (data) => {
		try {
			const res = await userLogin(data);
			if (res.success) {
				toast.success(res.message);
				storeUserInfo(res?.data?.accessToken);
				// reset();
				// router.push('/login');
			} else {
				toast.error(res.message);
			}
		} catch (error: any) {
			console.log(error);
			toast.error(error?.message);
		}
	};
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
						<form onSubmit={handleSubmit(onSubmit)}>
							<Grid container spacing={2} my={1}>
								<Grid item md={6}>
									<TextField label='Email' variant='outlined' size='small' fullWidth {...register('email')} />
								</Grid>
								<Grid item md={6}>
									<TextField
										label='Password'
										type='password'
										variant='outlined'
										size='small'
										fullWidth
										{...register('password')}
									/>
								</Grid>
							</Grid>

							{/* create forgot password */}
							<Link href='/forgot-password'>
								<Typography variant='body2' align='right' color='primary'>
									Forgot password?
								</Typography>
							</Link>

							<Button
								type='submit'
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
