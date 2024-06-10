import { tagTypes } from '../tagTypes';
import { baseApi } from './baseApi';

const doctorApi = baseApi.injectEndpoints({
	endpoints: (builder) => ({
		getDoctors: builder.query({
			query: () => ({
				url: '/doctors',
				method: 'GET'
			}),
			providesTags: [tagTypes.doctor]
		}),

		getDoctor: builder.query({
			query: (id: string) => ({
				url: `/doctors/${id}`,
				method: 'GET'
			})
		}),

		createDoctor: builder.mutation({
			query: (data: any) => ({
				url: '/users/create-doctor',
				method: 'POST',
				contentType: 'multipart/form-data',
				data
			}),
			invalidatesTags: [tagTypes.doctor]
		})
	})
});

export const { useGetDoctorsQuery, useGetDoctorQuery, useCreateDoctorMutation } = doctorApi;
