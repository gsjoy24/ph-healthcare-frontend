import HeroSection from '@/components/UI/HomePage/HeroSection/HeroSection';
import Specialist from '@/components/UI/HomePage/Specialist/Specialist';
import TopRatedDoctors from '@/components/UI/HomePage/TopRatedDoctors/TopRatedDoctors';
import WhyUs from '@/components/UI/HomePage/WhyUs/WhyUs';

const HomePage = () => {
	return (
		<div >
			<HeroSection />
			<Specialist />
			<TopRatedDoctors />
			<WhyUs />
		</div>
	);
};

export default HomePage;
