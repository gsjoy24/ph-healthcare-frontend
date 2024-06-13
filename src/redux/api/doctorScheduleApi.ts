import { baseApi } from './baseApi';

const doctorScheduleApi = baseApi.injectEndpoints({
	endpoints: (builder) => ({
		getDoctorSchedules: builder.query({
			query: (args: Record<string, any>) => ({
				url: '/doctor-schedules/me',
				method: 'GET',
				params: args
			})
		}),

		getDoctorSchedule: builder.query({
			query: (id: string) => ({
				url: `/doctor-schedules/${id}`,
				method: 'GET'
			})
		}),

		createDoctorSchedule: builder.mutation({
			query: (data: any) => ({
				url: '/doctor-schedules',
				method: 'POST',
				data
			})
		}),

		deleteDoctorSchedule: builder.mutation({
			query: (id: string) => ({
				url: `/doctor-schedules/${id}`,
				method: 'DELETE'
			})
		})
	})
});

export const {
	useGetDoctorSchedulesQuery,
	useGetDoctorScheduleQuery,
	useCreateDoctorScheduleMutation,
	useDeleteDoctorScheduleMutation
} = doctorScheduleApi;
