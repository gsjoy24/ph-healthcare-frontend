import { Box, Container, Stack, Typography } from '@mui/material';

const Navbar = () => {
	return (
		<Container>
			<Stack py={2} direction='row' justifyContent='space-between'>
				<Typography variant='h5' component='h5' fontWeight={500}>
					P
					<Box component='span' color='primary.main'>
						H
					</Box>
					Health Care
				</Typography>
			</Stack>
		</Container>
	);
};

export default Navbar;
