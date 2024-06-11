import { tagTypes } from '../tagTypes';
import { baseApi } from './baseApi';

const scheduleApi = baseApi.injectEndpoints({
	endpoints: (builder) => ({
		getSchedules: builder.query({
			query: (args: Record<string, any>) => ({
				url: '/schedules',
				method: 'GET',
				params: args
			}),
			providesTags: [tagTypes.schedule]
		}),

		getSchedule: builder.query({
			query: (id: string) => ({
				url: `/schedules/${id}`,
				method: 'GET'
			})
		}),

		createSchedule: builder.mutation({
			query: (data: any) => ({
				url: '/schedules',
				method: 'POST',
				data
			}),
			invalidatesTags: [tagTypes.schedule]
		}),

		deleteSchedule: builder.mutation({
			query: (id: string) => ({
				url: `/schedules/${id}`,
				method: 'DELETE'
			}),
			invalidatesTags: [tagTypes.schedule]
		})
	})
});

export const { useGetScheduleQuery, useGetSchedulesQuery, useCreateScheduleMutation, useDeleteScheduleMutation } =
	scheduleApi;
