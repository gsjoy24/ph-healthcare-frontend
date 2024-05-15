'use client';
import assets from '@/assets';
import registerPatient from '@/services/actions/registerPatient';
import modifiedPayload from '@/utils/modifiedPayload';
import { Box, Button, Container, Grid, Stack, TextField, Typography } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { SubmitHandler, useForm } from 'react-hook-form';
import { toast } from 'sonner';

type Inputs = {
	password: string;
	patient: {
		name: string;
		email: string;
		phone: string;
		address: string;
	};
};

const RegisterPage = () => {
	const router = useRouter();
	const {
		register,
		handleSubmit,
		watch,
		formState: { errors }
	} = useForm<Inputs>();
	const onSubmit: SubmitHandler<Inputs> = async (data) => {
		const modifiedData = modifiedPayload(data);
		try {
			const res = await registerPatient(modifiedData);
			if (res.success) {
				toast.success(res.message);
				router.push('/login');
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
						<form onSubmit={handleSubmit(onSubmit)}>
							<Grid container spacing={2} my={1}>
								<Grid item md={12} sm={12}>
									<TextField label='Name' variant='outlined' size='small' fullWidth {...register('patient.name')} />
								</Grid>
								<Grid item md={6}>
									<TextField label='Email' variant='outlined' size='small' fullWidth {...register('patient.email')} />
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
								<Grid item md={6}>
									<TextField
										label='Contact Number'
										type='tel'
										variant='outlined'
										size='small'
										fullWidth
										{...register('patient.phone')}
									/>
								</Grid>
								<Grid item md={6}>
									<TextField
										label='Address'
										variant='outlined'
										size='small'
										fullWidth
										{...register('patient.address')}
									/>
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
						</form>
					</Box>
				</Box>
			</Stack>
		</Container>
	);
};

export default RegisterPage;
