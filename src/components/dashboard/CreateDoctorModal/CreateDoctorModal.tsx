import PHFullScreenModal from '@/components/Shared/PHModal/PHFullScreenModal';

type TProps = {
	open: boolean;
	setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};
const CreateDoctorModal = ({ open, setOpen }: TProps) => {
	return (
		<PHFullScreenModal open={open} setOpen={setOpen}>
			<div>
				<h1>Doctor Form</h1>
			</div>
		</PHFullScreenModal>
	);
};

export default CreateDoctorModal;
