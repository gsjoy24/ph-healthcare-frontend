'use client';
import ConfirmModal from '@/components/Shared/ConfirmModal/ConfirmModal';
import SpecialtiesModal from '@/components/dashboard/SpecialtiesModal/SpecialtiesModal';
import { useDeleteSpecialtyMutation, useGetSpecialtiesQuery } from '@/redux/api/specialtiesApi';
import DeleteIcon from '@mui/icons-material/Delete';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import { Box, Button, CircularProgress, IconButton, Stack, TextField, Typography } from '@mui/material';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import Image from 'next/image';
import { useState } from 'react';
import { toast } from 'sonner';

const Specialties = () => {
	const [idToDelete, setIdToDelete] = useState<string>('');
	const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
	const [isDeleteModalOpen, setIsDeleteModalOpen] = useState<boolean>(false);

	const { data, isLoading } = useGetSpecialtiesQuery(undefined);
	const [deleteSpecialty, { isLoading: isDeleting }] = useDeleteSpecialtyMutation();

	const handleOpenDeleteModal = (id: string) => {
		setIdToDelete(id);
		setIsDeleteModalOpen(true);
	};

	const handleDeleteSpecialty = async () => {
		if (!idToDelete) {
			toast.error('No specialty to delete');
			return;
		}
		setIsDeleteModalOpen(false);

		try {
			const response = await deleteSpecialty(idToDelete);
			toast.success('Specialty deleted successfully!');
		} catch (error) {}
	};

	const columns: GridColDef[] = [
		{
			field: 'icon',
			headerName: 'Icon',
			flex: 1,
			renderCell: (params) => (
				<div className='h-full w-[60px]'>
					<Image src={params.value} alt='icon' height={60} width={60} className='p-1 w-full h-full' />
				</div>
			)
		},
		{ field: 'title', headerName: 'Title', flex: 1 },
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
				<Button onClick={() => setIsModalOpen(true)}>Create Specialty</Button>
				<SpecialtiesModal open={isModalOpen} setOpen={setIsModalOpen} />
				<TextField size='small' placeholder='Search Specialties' />
			</Stack>
			<Box>
				<Typography variant='h6'>Specialties</Typography>
				{isLoading ? <Typography>Loading...</Typography> : <DataGrid rows={data} columns={columns} />}
			</Box>
			<ConfirmModal
				open={isDeleteModalOpen}
				setOpen={setIsDeleteModalOpen}
				title='Delete Specialty'
				subTitle='Are you sure you want to delete this specialty?'
				handleAgree={handleDeleteSpecialty}
			/>
		</Box>
	);
};

export default Specialties;
