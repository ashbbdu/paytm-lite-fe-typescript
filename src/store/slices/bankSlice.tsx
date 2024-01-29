
import { createSlice , PayloadAction } from '@reduxjs/toolkit'
interface BankInterface {
    bankBalance : number | null
}

const initialState : BankInterface = {
    bankBalance : 0
};
const bankSlice = createSlice({
    name : "bankSlice",
    initialState : initialState,
    reducers : {
        setBalance(state , action : PayloadAction <number | null>){
            state.bankBalance = action.payload;
        }
    }
})

export const { setBalance } = bankSlice.actions;

export default bankSlice.reducer;