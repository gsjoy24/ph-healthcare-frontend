'use client';
import DoctorScheduleModal from '@/components/dashboard/DoctorScheduleModal/DoctorScheduleModal';
import { Button, Container, Stack, TextField } from '@mui/material';
import { useState } from 'react';

const ScheduleForDoc = () => {
	const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
	return (
		<Container>
			<Stack alignItems='center' justifyContent='space-between' direction='row'>
				<Button onClick={() => setIsModalOpen(true)}>Create Schedule</Button>
				<DoctorScheduleModal open={isModalOpen} setOpen={setIsModalOpen} />
				<TextField size='small' placeholder='Search' />
			</Stack>
		</Container>
	);
};

export default ScheduleForDoc;
