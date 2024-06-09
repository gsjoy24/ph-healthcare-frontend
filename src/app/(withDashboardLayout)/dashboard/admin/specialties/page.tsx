'use client';
import SpecialtiesModal from '@/components/dashboard/SpecialtiesModal/SpecialtiesModal';
import { useGetSpecialtiesQuery } from '@/redux/api/specialtiesApi';
import { Box, Button, Stack, TextField, Typography } from '@mui/material';
import { useState } from 'react';

const Specialties = () => {
	const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

	const { data, isLoading } = useGetSpecialtiesQuery(null);

	return (
		<Box>
			<Stack alignItems='center' justifyContent='space-between' direction='row'>
				<Button onClick={() => setIsModalOpen(true)}>Create Specialty</Button>
				<SpecialtiesModal open={isModalOpen} setOpen={setIsModalOpen} />
				<TextField size='small' placeholder='Search Specialties' />
			</Stack>

			<Box>
				<Typography variant='h6'>Specialties</Typography>
			</Box>
		</Box>
	);
};

export default Specialties;
