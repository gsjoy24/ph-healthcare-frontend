import { baseApi } from './baseApi';

const scheduleApi = baseApi.injectEndpoints({
	endpoints: (builder) => ({
		getSchedule: builder.query({
			query: (args: Record<string, any>) => ({
				url: '/schedules',
				method: 'GET',
				params: args
			})
		}),

		createSchedule: builder.mutation({
			query: (data: any) => ({
				url: '/schedules',
				method: 'POST',
				data
			})
		}),

		updateSchedule: builder.mutation({
			query: (data: any) => ({
				url: '/schedules',
				method: 'PUT',
				data
			})
		}),

		deleteSchedule: builder.mutation({
			query: (id: string) => ({
				url: `/schedules/${id}`,
				method: 'DELETE'
			})
		})
	})
});

export const { useGetScheduleQuery, useCreateScheduleMutation, useUpdateScheduleMutation, useDeleteScheduleMutation } =
	scheduleApi;
