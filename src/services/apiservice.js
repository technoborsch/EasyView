import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {isAuthValid, makeUrlHttps} from "../utils/Utils";

export const api = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://easyview.myk8s.ru/api/v1/',
        prepareHeaders: (headers, {getState}) => {
            const auth = getState().auth
            if (isAuthValid(auth)) {
                headers.set('Authorization', 'Token ' + auth.token);
            }
            return headers;
        }
    }),
    endpoints: (builder) => ({
        login: builder.mutation({
            query: (credentials) => ({
                url: 'auth/login/',
                method: 'POST',
                headers: {
                    'Authorization': 'Basic ' + btoa(`${credentials.loginInput}:${credentials.passwordInput}`),
                }
            }),
        }),
        getProjectList: builder.query({
            query: () => 'projects/',
        }),
        getObjectByURL: builder.query({
            query: (url) => `${makeUrlHttps(url)}`,
        }),
    }),
});

export const {useLoginMutation, useGetProjectListQuery, useGetObjectByURLQuery} = api;