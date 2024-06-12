import { tagTypes } from '../tagTypes';
import { baseApi } from './baseApi';

const doctorApi = baseApi.injectEndpoints({
	endpoints: (builder) => ({
		getDoctors: builder.query({
			query: (args: Record<string, any>) => ({
				url: '/doctors',
				method: 'GET',
				params: args
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
		}),

		editDoctor: builder.mutation({
			query: ({ id, data }: { id: string; data: Record<string, any> }) => ({
				url: `/doctors/${id}`,
				method: 'PATCH',
				data
			}),
			invalidatesTags: [tagTypes.doctor]
		}),

		deleteDoctor: builder.mutation({
			query: (id: string) => ({
				url: `/doctors/soft-delete/${id}`,
				method: 'DELETE'
			}),
			invalidatesTags: [tagTypes.doctor]
		})
	})
});

export const {
	useGetDoctorsQuery,
	useGetDoctorQuery,
	useCreateDoctorMutation,
	useDeleteDoctorMutation,
	useEditDoctorMutation
} = doctorApi;
