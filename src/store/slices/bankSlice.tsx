
import { createSlice , PayloadAction } from '@reduxjs/toolkit'
const initialState = {
    bankBalance : 0
};
const bankSlice = createSlice({
    name : "bankSlice",
    initialState : initialState,
    reducers : {
        setBalance(state , action : PayloadAction <number>){
            state.bankBalance = action.payload;
        }
    }
})

export const { setBalance } = bankSlice.actions;

export default bankSlice.reducer;