import { configureStore } from '@reduxjs/toolkit';
import userReducer from './features/user/userSlice';
import {api} from "./services/apiservice";

export const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    user: userReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
})