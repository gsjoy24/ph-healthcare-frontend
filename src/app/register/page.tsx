'use client';
import assets from '@/assets';
import PHForm from '@/components/forms/PHForm';
import PHInput from '@/components/forms/PHInput';
import registerPatient from '@/services/actions/registerPatient';
import userLogin from '@/services/actions/userLogin';
import { storeUserInfo } from '@/services/auth.services';
import modifiedPayload from '@/utils/modifiedPayload';
import { zodResolver } from '@hookform/resolvers/zod';
import { Box, Button, Container, Grid, Stack, TextField, Typography } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { toast } from 'sonner';
import { z } from 'zod';

const RegisterValidationSchema = z.object({
	patient: z.object({
		name: z.string({ required_error: 'Please enter the name!' }),
		email: z.string({ required_error: 'Please enter the email!' }).email({
			message: 'Invalid email address!'
		}),
		phone: z
			.string({ required_error: 'Please enter the phone number!' })
			.regex(/^\d{11}$/, 'Phone number must be 11 digits!'),
		address: z.string({ required_error: 'Please enter the address!' })
	}),
	password: z
		.string({
			required_error: 'Please enter the password!'
		})
		.min(6, 'Password must be at least 6 characters!')
});

const RegisterPage = () => {
	const router = useRouter();

	const onSubmit: SubmitHandler<FieldValues> = async (data) => {
		const modifiedData = modifiedPayload(data);
		try {
			const res = await registerPatient(modifiedData);
			if (res.success) {
				toast.success(res.message);
				const login = await userLogin({ email: data.patient.email, password: data.password });
				if (login.success) {
					toast.success(login.message);
					storeUserInfo(login?.data?.accessToken);
					router.push('/');
				}
			}
		} catch (error) {
			console.log(error);
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
							<Typography variant='h6'>Patient Register</Typography>
						</Box>
					</Stack>

					<Box>
						<PHForm onSubmit={onSubmit} resolver={zodResolver(RegisterValidationSchema)}>
							<Grid container spacing={2} my={1}>
								<Grid item md={12} sm={12}>
									<PHInput label='Name' name='patient.name' />
								</Grid>
								<Grid item md={6}>
									<PHInput label='Email' name='patient.email' />
								</Grid>
								<Grid item md={6}>
									<PHInput label='Password' name='password' type='password' />
								</Grid>
								<Grid item md={6}>
									<PHInput label='Phone' name='patient.phone' />
								</Grid>

								<Grid item md={6}>
									<PHInput label='Address' name='patient.address' />
								</Grid>
							</Grid>

							<Button
								sx={{
									my: 2
								}}
								fullWidth
								type='submit'
							>
								Register
							</Button>

							<Box>
								<Typography variant='body2' align='center'>
									Already have an account?
									<Link href='/login' className='px-2 hover:text-blue-600 duration-200'>
										Login
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

export default RegisterPage;
