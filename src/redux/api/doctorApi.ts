import { baseApi } from './baseApi';

const doctorApi = baseApi.injectEndpoints({
	endpoints: (builder) => ({
		getDoctors: builder.query({
			query: () => ({
				url: '/doctors',
				method: 'GET'
			})
		}),

		getDoctor: builder.query({
			query: (id: string) => ({
				url: `/users/doctors/${id}`,
				method: 'GET'
			})
		}),

		createDoctor: builder.mutation({
			query: (data: any) => ({
				url: '/doctors',
				method: 'POST',
				body: data,
				contentType: 'multipart/form-data'
			})
		})
	})
});

export const { useGetDoctorsQuery, useGetDoctorQuery, useCreateDoctorMutation } = doctorApi;
