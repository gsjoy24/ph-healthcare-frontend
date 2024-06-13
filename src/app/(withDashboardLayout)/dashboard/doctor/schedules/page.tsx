'use client';
import ConfirmModal from '@/components/Shared/ConfirmModal/ConfirmModal';
import DoctorScheduleModal from '@/components/dashboard/DoctorScheduleModal/DoctorScheduleModal';
import { useGetDoctorSchedulesQuery } from '@/redux/api/doctorScheduleApi';
import TDoctorSchedule from '@/types/doctorSchedule';
import formatDate from '@/utils/formatDate';
import DeleteIcon from '@mui/icons-material/Delete';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import { Box, Button, Container, IconButton, Stack, TextField, Typography } from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import dayjs from 'dayjs';
import { useEffect, useState } from 'react';

const ScheduleForDoc = () => {
	const [schedules, setSchedules] = useState<TDoctorSchedule[]>([]);
	const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
	const [isDeleting, setIsDeleting] = useState<boolean>(false);
	const [idToDelete, setIdToDelete] = useState<string>('');
	const [isDeleteModalOpen, setIsDeleteModalOpen] = useState<boolean>(false);
	const { data, isLoading } = useGetDoctorSchedulesQuery({});

	useEffect(() => {
		const schedules = data?.data?.data?.map((schedule: TDoctorSchedule) => ({
			id: schedule?.scheduleId,
			isBooked: schedule?.isBooked,
			startDate: formatDate(schedule?.schedule?.startDateTime),
			endDate: formatDate(schedule?.schedule?.endDateTime),
			startTime: dayjs(schedule?.schedule?.startDateTime).format('hh:mm A'),
			endTime: dayjs(schedule?.schedule?.endDateTime).format('hh:mm A')
		}));
		setSchedules(schedules);
	}, [data]);

	const handleOpenDeleteModal = (id: string) => {};
	const handleDelete = () => {
		console.log('delete');
	};

	const columns: GridColDef[] = [
		{ field: 'startDate', headerName: 'Start Date', flex: 1 },
		{ field: 'endDate', headerName: 'End Date', flex: 1 },
		{ field: 'startTime', headerName: 'Start Time', flex: 1 },
		{ field: 'endTime', headerName: 'End Time', flex: 1 },
		{
			field: 'isBooked',
			headerName: 'Status',
			flex: 1,
			renderCell: ({ row }) => (
				<Typography
					color={row.isBooked ? 'error' : 'success'}
					sx={{
						fontWeight: 600,
						fontSize: 14,
						height: '100%',
						display: 'flex',
						alignItems: 'center'
					}}
				>
					{row.isBooked ? 'Booked' : 'Available'}
				</Typography>
			)
		},

		{
			field: 'actions',
			headerName: 'Actions',
			flex: 1,
			renderCell: ({ row }) => (
				<Stack direction='row' spacing={1} alignItems='center' className='h-full'>
					<IconButton>
						<ModeEditIcon />
					</IconButton>
					<IconButton onClick={() => handleOpenDeleteModal(row.id)} disabled={isDeleting}>
						{isDeleting ? <CircularProgress size={20} /> : <DeleteIcon />}
					</IconButton>
				</Stack>
			)
		}
	];
	return (
		<Container>
			<Stack alignItems='center' justifyContent='space-between' direction='row'>
				<Button onClick={() => setIsModalOpen(true)}>Create Schedule</Button>
				<DoctorScheduleModal open={isModalOpen} setOpen={setIsModalOpen} />
				<TextField size='small' placeholder='Search' />
			</Stack>
			<Box mt={2}>
				<Typography variant='h6'>Schedules</Typography>
				{isLoading ? <Typography>Loading...</Typography> : <DataGrid rows={schedules || []} columns={columns} />}
			</Box>
			<ConfirmModal
				open={isDeleteModalOpen}
				setOpen={setIsDeleteModalOpen}
				title='Delete Specialty'
				subTitle='Are you sure you want to delete this specialty?'
				handleAgree={handleDelete}
			/>
		</Container>
	);
};

export default ScheduleForDoc;
