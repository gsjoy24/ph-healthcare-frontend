export enum tagTypes {
	specialties = 'specialties',
	admin = 'admin',
	patient = 'patient',
	doctor = 'doctor',
	schedule = 'schedule',
	appointment = 'appointment',
	doctorSchedule = 'doctorSchedule',
	user = 'user',
	prescription = 'prescription',
	review = 'review'
}

export const tagTypesList = Object.values(tagTypes);
