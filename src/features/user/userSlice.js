import {createSlice} from "@reduxjs/toolkit";

const initialState = null;

const exampleUser = {
    name: 'Ivan',
    lastname: 'Ivanov'
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        login: (state) => {
            return exampleUser;
        }
        ,
        logout: (state) => {
            return null;
        }
    }
})

export const {login, logout} = userSlice.actions;

export default userSlice.reducer;