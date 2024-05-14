import AttachMoneyOutlinedIcon from '@mui/icons-material/AttachMoneyOutlined';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { Box, Stack } from '@mui/material';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Image from 'next/image';

const DoctorCard = ({ doctor }: any) => {
	return (
		<Card>
			<Box>
				<Image
					className='max-h-[260px] object-cover object-top'
					src={doctor.profilePhoto}
					alt={doctor.name}
					width={500}
					height={100}
				/>
			</Box>
			<CardContent>
				<Typography gutterBottom variant='h5' component='div'>
					{doctor.name}
				</Typography>
				<Typography variant='body2' color='text.secondary'>
					{doctor.qualifications}, {doctor.designation}
				</Typography>
				<Stack direction='row' spacing={1} alignItems='center'>
					<Typography py={1} variant='body2' color='text.secondary'>
						<LocationOnIcon />
						{doctor.currentWorkplace}
					</Typography>
					<Typography py={1} variant='body2' color='text.secondary'>
						<AttachMoneyOutlinedIcon />
						{doctor.appointmentFee}
					</Typography>
				</Stack>
			</CardContent>
			<CardActions
				sx={{
					display: 'flex',
					justifyContent: 'space-between',
					alignItems: 'center',
					px: 2,
					paddingBottom: 2,
					'& button': {
						width: '100%'
					}
				}}
			>
				<Button>Book Now</Button>
				<Button variant='outlined'>View Profile</Button>
			</CardActions>
		</Card>
	);
};

export default DoctorCard;
