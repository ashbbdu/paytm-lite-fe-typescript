import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./slices/authSlice";
import bankSlice from "./slices/bankSlice";


const store = configureStore({
    reducer : {
        auth : authSlice,
        bank : bankSlice
    }

})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store
