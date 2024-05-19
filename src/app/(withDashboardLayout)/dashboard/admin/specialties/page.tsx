'use client';
import SpecialtiesModal from '@/components/dashboard/SpecialtiesModal/SpecialtiesModal';
import { Box, Button, Stack, TextField } from '@mui/material';
import { useState } from 'react';

const Specialties = () => {
	const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

	return (
		<Box>
			<Stack alignItems='center' justifyContent='space-between' direction='row'>
				<Button onClick={() => setIsModalOpen(true)}>Create Specialty</Button>
				<SpecialtiesModal open={isModalOpen} setOpen={setIsModalOpen} />
				<TextField size='small' placeholder='Search Specialties' />
			</Stack>
		</Box>
	);
};

export default Specialties;
