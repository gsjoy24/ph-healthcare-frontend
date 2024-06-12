import { baseApi } from './baseApi';

const userApi = baseApi.injectEndpoints({
	endpoints: (builder) => ({
		getUserProfile: builder.query({
			query: () => ({
				url: '/users/me',
				method: 'GET'
			})
		})
	})
});

export const { useGetUserProfileQuery } = userApi;
