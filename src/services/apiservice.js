import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

export const api = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://easyview.myk8s.ru/api/v1/',
        prepareHeaders: (headers, { getState }) => {
      // By default, if we have a token in the store, let's use that for authenticated requests
      const token = getState().auth.token
      if (token) {
        headers.set('authorization', `Bearer ${token}`)
      }
      return headers
    },
    }),
    endpoints: (builder) => ({
        login: builder.mutation({
            query: (credentials) => ({
                url: 'https://easyview.myk8s.ru/api-auth/login/',
                method: 'POST',
                body: credentials,
            }),
        }),
        getProjectList: builder.query({
            query: () => 'projects/',
        }),
        getObjectByURL: builder.query({
            query: (url) => `${url}`,
        }),
    }),
});

export const {useLoginMutation, useGetProjectListQuery, useGetObjectByURLQuery} = api;