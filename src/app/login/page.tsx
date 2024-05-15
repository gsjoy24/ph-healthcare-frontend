'use client';
import assets from '@/assets';
import PHForm from '@/components/forms/PHForm';
import PHInput from '@/components/forms/PHInput';
import userLogin from '@/services/actions/userLogin';
import { storeUserInfo } from '@/services/auth.services';
import { Box, Button, Container, Grid, Stack, Typography } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { FieldValues } from 'react-hook-form';
import { toast } from 'sonner';

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
						<PHForm onSubmit={handleLogin}>
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

							<Box>
								<Typography variant='body2' align='center'>
									Don&#39;t have an account?
									<Link href='/register' className='px-2 hover:text-blue-600 duration-200'>
										Register
									</Link>
								</Typography>
							</Box>
						</PHForm>
					</Box>
				</Box>
			</Stack>
		</Container>
	);
};

export default LoginPage;
