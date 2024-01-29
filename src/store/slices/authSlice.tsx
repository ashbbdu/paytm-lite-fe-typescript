import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface UserDetails {
  firstName: string,
  lastName: string,
  password: string,
  userName: string
}

interface authSliceInterface {
    loginUserDetails : UserDetails ,
    loading : boolean,
    user : UserDetails[],
    token : string
}

const initialState : authSliceInterface = {
  loginUserDetails: JSON.parse(localStorage.getItem("userDetails")),
  loading: false,
  user: [],
  token: localStorage.getItem("token") || "",
};

const authSlice = createSlice({
  name: "authSlice",
  initialState: initialState,
  reducers: {
    setLoginUserDeatils(state, action: PayloadAction<UserDetails>) {
      state.loginUserDetails = action.payload;
    },
    setLoading(state , action : PayloadAction <boolean>) {
        state.loading = action.payload;
    },
    setUser (state , action : PayloadAction <UserDetails []> ) {
        state.user =  action.payload;
    },
    setToken (state ,action : PayloadAction <string>) {
        state.token = action.payload;
    }
  },
});


export const { setLoginUserDeatils , setLoading , setUser , setToken} = authSlice.actions;

export default authSlice.reducer;