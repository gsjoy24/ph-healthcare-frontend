'use client';
import PHAutoFileUploader from '@/components/forms/PHAutoFileUploader';
import { useGetUserProfileQuery, useUpdateUserProfileMutation } from '@/redux/api/userApi';
import { Backdrop, CircularProgress, Container, Grid } from '@mui/material';
import Image from 'next/image';
import { toast } from 'sonner';
import DoctorInfo from './Components/DoctorInfo';

const DoctorProfile = () => {
	const { data, isLoading } = useGetUserProfileQuery({});
	const [updateUserProfile, { isLoading: isUpdating }] = useUpdateUserProfileMutation();

	const updateProPic = async (file: File) => {
		const formData = new FormData();
		formData.append('file', file);
		formData.append('data', JSON.stringify({}));

		try {
			const res = await updateUserProfile(formData).unwrap();
			console.log(res);
			if (res?.success) {
				toast.success('Profile Picture Updated Successfully!');
			} else {
				toast.error('Failed to Update Profile Picture!');
			}
		} catch (error) {}
	};
	return (
		<Container>
			{isLoading ? (
				<Backdrop sx={{ color: '#fff' }} open={isLoading}>
					<CircularProgress color='inherit' />
				</Backdrop>
			) : (
				<Grid container spacing={2}>
					<Grid item xs={12} md={4}>
						<Image
							src={data?.data?.profilePhoto}
							alt={data?.name}
							width={400}
							height={400}
							objectFit='cover'
							className='rounded-xl'
						/>
						<div className='text-center mt-6'>
							<PHAutoFileUploader label='Upload Profile Picture' onFileUpload={updateProPic} isUpdating={isUpdating} />
						</div>
					</Grid>
					<DoctorInfo data={data?.data} />
				</Grid>
			)}
		</Container>
	);
};

export default DoctorProfile;

//  {
//       id: 'ed588bf1-b2a5-4523-bc13-f677039c1c57',
//       email: 'sompasaha@example.com',
//       status: 'ACTIVE',
//       role: 'DOCTOR',
//       needPasswordChange: true,
//       createdAt: '2024-05-14T17:07:54.459Z',
//       updatedAt: '2024-05-14T17:07:54.459Z',
//       name: 'Dr. Sompa Saha',
//       gender: 'MALE',
//       phone: '+1234567890',
//       profilePhoto:
//         'https://res.cloudinary.com/dghszztcc/image/upload/v1715706474/ffjpzowojg1nr6gafs3b.png',
//       address: '123 Main Street, City, Country',
//       registrationNumber: '12345',
//       experience: 10,
//       appointmentFee: 100,
//       qualifications: 'MBBS, MD',
//       currentWorkplace: 'City Hospital',
//       designation: 'Consultant Physician',
//       avgRating: 0,
//       isDeleted: false
//     },
