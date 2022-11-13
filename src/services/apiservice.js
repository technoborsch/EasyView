import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

export const api = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://easyview.myk8s.ru/api/v1/',
    }),
    endpoints: (builder) => ({
        getProjectList: builder.query({
            query: () => 'projects/',
        }),
        getObjectByURL: builder.query({
            query: (url) => `${url}`,
        }),
    }),
});

export const {useGetProjectListQuery, useGetObjectByURLQuery} = api;