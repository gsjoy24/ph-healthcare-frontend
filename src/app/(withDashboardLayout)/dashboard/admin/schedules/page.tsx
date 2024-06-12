'use client';
import ConfirmModal from '@/components/Shared/ConfirmModal/ConfirmModal';
import CreateScheduleModal from '@/components/dashboard/CreateScheduleModal/CreateScheduleModal';
import { useDeleteScheduleMutation, useGetSchedulesQuery } from '@/redux/api/scheduleApi';
import formatDate from '@/utils/formatDate';
import DeleteIcon from '@mui/icons-material/Delete';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import { Box, Button, CircularProgress, IconButton, Stack, TextField, Typography } from '@mui/material';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import dayjs from 'dayjs';
import { useEffect, useState } from 'react';
import { toast } from 'sonner';

const Schedules = () => {
	const [schedules, setSchedules] = useState<any[]>([]);
	const [idToDelete, setIdToDelete] = useState<string>('');
	const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
	const [isDeleteModalOpen, setIsDeleteModalOpen] = useState<boolean>(false);

	const { data, isLoading } = useGetSchedulesQuery({});

	useEffect(() => {
		const schedules = data?.data?.data?.map((schedule: any) => ({
			id: schedule.id,
			startDate: formatDate(schedule.startDateTime),
			endDate: formatDate(schedule.endDateTime),
			startTime: dayjs(schedule.startDateTime).format('hh:mm A'),
			endTime: dayjs(schedule.endDateTime).format('hh:mm A')
		}));
		setSchedules(schedules);
	}, [data]);

	const [deleteSchedule, { isLoading: isDeleting }] = useDeleteScheduleMutation();

	const handleOpenDeleteModal = (id: string) => {
		setIdToDelete(id);
		setIsDeleteModalOpen(true);
	};

	const handleDelete = async () => {
		setIsDeleteModalOpen(false);

		try {
			const response = await deleteSchedule(idToDelete).unwrap();
			if (response?.success) {
				toast.success('Schedule deleted successfully!');
			}
		} catch (error) {}
	};

	const columns: GridColDef[] = [
		{ field: 'startDate', headerName: 'Start Date', flex: 1 },
		{ field: 'endDate', headerName: 'End Date', flex: 1 },
		{ field: 'startTime', headerName: 'Start Time', flex: 1 },
		{ field: 'endTime', headerName: 'End Time', flex: 1 },
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
		<Box>
			<Stack alignItems='center' justifyContent='space-between' direction='row'>
				<Button onClick={() => setIsModalOpen(true)}>Create Schedule</Button>
				<CreateScheduleModal open={isModalOpen} setOpen={setIsModalOpen} />
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
		</Box>
	);
};

export default Schedules;
