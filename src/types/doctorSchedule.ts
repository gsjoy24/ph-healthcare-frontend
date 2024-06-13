import TSchedule from './schedule';

type TDoctorSchedule = {
	doctorId: string;
	scheduleId: string;
	isBooked: boolean;
	appointmentId: any;
	schedule: TSchedule;
};

export default TDoctorSchedule;
