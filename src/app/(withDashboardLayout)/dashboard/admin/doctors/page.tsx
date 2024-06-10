'use client';
import ConfirmModal from '@/components/Shared/ConfirmModal/ConfirmModal';
import CreateDoctorModal from '@/components/dashboard/CreateDoctorModal/CreateDoctorModal';
import { useGetDoctorsQuery } from '@/redux/api/doctorApi';
import { useDeleteSpecialtyMutation } from '@/redux/api/specialtiesApi';
import DeleteIcon from '@mui/icons-material/Delete';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import { Box, Button, CircularProgress, IconButton, Stack, TextField, Typography } from '@mui/material';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import Image from 'next/image';
import { useState } from 'react';
import { toast } from 'sonner';

const Doctors = () => {
	const [idToDelete, setIdToDelete] = useState<string>('');
	const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
	const [isDeleteModalOpen, setIsDeleteModalOpen] = useState<boolean>(false);

	const { data, isLoading } = useGetDoctorsQuery(undefined);

	const [deleteSpecialty, { isLoading: isDeleting }] = useDeleteSpecialtyMutation();

	const handleOpenDeleteModal = (id: string) => {
		setIdToDelete(id);
		setIsDeleteModalOpen(true);
	};

	const handleDeleteDoctor = async () => {
		setIsDeleteModalOpen(false);
		try {
			const response = await deleteSpecialty(idToDelete).unwrap();
			if (response?.id) {
				toast.success('Specialty deleted successfully!');
			}
		} catch (error) {}
	};

	const columns: GridColDef[] = [
		{ field: 'name', headerName: 'Name', width: 150 },
		{ field: 'gender', headerName: 'Gender', width: 120 },
		{ field: 'email', headerName: 'Email', width: 200 },
		{ field: 'registrationNumber', headerName: 'Reg. No', width: 150 },
		{ field: 'appointmentFee', headerName: 'Fee', width: 80 },
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
				<Button onClick={() => setIsModalOpen(true)}>Create Doctor</Button>
				<CreateDoctorModal open={isModalOpen} setOpen={setIsModalOpen} />
				<TextField size='small' placeholder='Search' />
			</Stack>
			<Box mt={2}>
				<Typography variant='h6'>Specialties</Typography>
				{isLoading ? (
					<Typography>Loading...</Typography>
				) : (
					<DataGrid rows={data?.data?.length ? data.data : []} columns={columns} />
				)}
			</Box>
			<ConfirmModal
				open={isDeleteModalOpen}
				setOpen={setIsDeleteModalOpen}
				title='Delete Doctor'
				subTitle='Are you sure you want to delete this doctor?'
				handleAgree={handleDeleteDoctor}
			/>
		</Box>
	);
};

export default Doctors;
