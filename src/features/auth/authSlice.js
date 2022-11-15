import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    token: null,
    expire: null,
};

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setCredentials: (state, {payload: {expiry, token}}) => {
            state.token = token;
            state.expire = expiry;
        },
        logout: (state) => {
            return initialState;
        },
    }
});

export const {setCredentials, logout} = authSlice.actions;

export default authSlice.reducer;

export const selectAuth = state => state.auth;