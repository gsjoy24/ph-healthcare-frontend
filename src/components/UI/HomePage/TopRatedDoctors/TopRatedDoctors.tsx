import { Box, Typography } from '@mui/material';

const TopRatedDoctors = () => {
	return (
		<Box>
			<Box>
				<Typography variant='h4' fontWeight={500}>
					Our Top Rated Doctors
				</Typography>
				<Typography component='p' fontSize={18}>
					Access to expert physicians, surgeons, advanced technology, and top-quality surgery facilities here.
				</Typography>
			</Box>
		</Box>
	);
};

export default TopRatedDoctors;
