import PHModal from '@/components/Shared/PHModal/PHModal';
import { TextField } from '@mui/material';

type TProps = {
	open: boolean;
	setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const SpecialtiesModal = ({ open, setOpen }: TProps) => {
	return (
		<PHModal open={open} setOpen={setOpen} title='Create Specialty'>
			<TextField size='small' placeholder='Specialty Name' />
		</PHModal>
	);
};

export default SpecialtiesModal;
