'use client';
import assets from '@/assets';
import PHForm from '@/components/forms/PHForm';
import PHInput from '@/components/forms/PHInput';
import userLogin from '@/services/actions/userLogin';
import { storeUserInfo } from '@/services/auth.services';
import { zodResolver } from '@hookform/resolvers/zod';
import { Box, Button, Container, Grid, Stack, Typography } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { FieldValues } from 'react-hook-form';
import { toast } from 'sonner';
import { z } from 'zod';

const LoginValidationSchema = z.object({
	email: z.string({ required_error: 'Please enter the email!' }).email({
		message: 'Invalid email address!'
	}),
	password: z
		.string({
			required_error: 'Please enter the password!'
		})
		.min(6, 'Password must be at least 6 characters!')
});

const LoginPage = () => {
	const router = useRouter();

	const handleLogin = async (data: FieldValues) => {
		try {
			const res = await userLogin(data);
			if (res.success) {
				toast.success(res.message);
				storeUserInfo(res?.data?.accessToken);
				router.push('/');
			} else {
				toast.error(res.message);
			}
		} catch (error: any) {
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
						<PHForm onSubmit={handleLogin} resolver={zodResolver(LoginValidationSchema)}>
							<Grid container spacing={2} my={1}>
								<Grid item md={6}>
									<PHInput label='Email' name='email' />
								</Grid>
								<Grid item md={6}>
									<PHInput label='Password' name='password' type='password' />
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

							{/* bottom text */}
							<Box
								sx={{
									display: 'flex',
									justifyContent: 'center',
									alignItems: 'center',
									gap: 1
								}}
							>
								<Typography>Don&#39;t have an account?</Typography>
								<Link href='/register'>
									<Typography
										sx={{
											color: 'primary.main',
											cursor: 'pointer',
											fontSize: '1rem'
										}}
									>
										Create an account
									</Typography>
								</Link>
							</Box>
						</PHForm>
					</Box>
				</Box>
			</Stack>
		</Container>
	);
};

export default LoginPage;
