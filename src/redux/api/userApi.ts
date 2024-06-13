import { tagTypes } from '../tagTypes';
import { baseApi } from './baseApi';

const userApi = baseApi.injectEndpoints({
	endpoints: (builder) => ({
		getUserProfile: builder.query({
			query: () => ({
				url: '/users/me',
				method: 'GET'
			}),
			providesTags: [tagTypes.user]
		}),

		updateUserProfile: builder.mutation({
			query: (data: Record<string, any>) => ({
				url: '/users/me',
				method: 'PATCH',
				body: data,
				contentType: 'multipart/form-data'
			}),
			invalidatesTags: [tagTypes.user]
		})
	})
});

export const { useGetUserProfileQuery, useUpdateUserProfileMutation } = userApi;
