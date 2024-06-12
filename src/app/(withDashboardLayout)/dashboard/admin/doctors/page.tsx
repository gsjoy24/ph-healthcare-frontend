'use client';
import ConfirmModal from '@/components/Shared/ConfirmModal/ConfirmModal';
import CreateDoctorModal from '@/components/dashboard/CreateDoctorModal/CreateDoctorModal';
import { useDeleteDoctorMutation, useGetDoctorsQuery } from '@/redux/api/doctorApi';
import { useDebounce } from '@/redux/hooks';
import DeleteIcon from '@mui/icons-material/Delete';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import { Box, Button, CircularProgress, IconButton, Stack, TextField, Typography } from '@mui/material';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import Link from 'next/link';
import { useState } from 'react';
import { toast } from 'sonner';

const Doctors = () => {
	const [searchTerm, setSearchTerm] = useState<string>('');
	const [idToDelete, setIdToDelete] = useState<string>('');
	const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
	const [isDeleteModalOpen, setIsDeleteModalOpen] = useState<boolean>(false);
	const [deleteDoctor, { isLoading: isDeleting }] = useDeleteDoctorMutation();

	const query: Record<string, any> = {};

	const debounce = useDebounce({ searchQuery: searchTerm });
	if (!!debounce) {
		query.searchTerm = searchTerm;
	}

	const { data, isLoading } = useGetDoctorsQuery(query);

	// This function is used to open the delete modal
	const handleOpenDeleteModal = (id: string) => {
		setIdToDelete(id);
		setIsDeleteModalOpen(true);
	};

	// This function is used to delete a doctor
	const handleDeleteDoctor = async () => {
		setIsDeleteModalOpen(false);
		try {
			const response = await deleteDoctor(idToDelete).unwrap();
			if (response?.success) {
				toast.success('Doctor deleted successfully!');
			} else {
				toast.error('Failed to delete the doctor!');
			}
		} catch (error) {}
	};

	const columns: GridColDef[] = [
		{ field: 'name', headerName: 'Name', width: 150 },
		{ field: 'gender', headerName: 'Gender', width: 120 },
		{ field: 'email', headerName: 'Email', width: 200 },
		{ field: 'registrationNumber', headerName: 'Reg. No', width: 120 },
		{ field: 'appointmentFee', headerName: 'Fee', width: 80 },
		{ field: 'experience', headerName: 'Experience', width: 100 },
		{ field: 'avgRating', headerName: 'Avg. Rating', width: 100 },
		{
			field: 'actions',
			headerName: 'Actions',
			flex: 1,
			renderCell: ({ row }) => (
				<Stack direction='row' spacing={1} alignItems='center' className='h-full'>
					<IconButton LinkComponent={Link} href={`/dashboard/admin/doctors/edit/${row.id}`}>
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
				<TextField size='small' placeholder='Search' onChange={(e) => setSearchTerm(e.target.value)} />
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
