import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: 'auth',
    initialState: { isLogedIn: false, name: 'Sherif Anwar' },
    reducers: {
        logInOut: (state) => {
            state.isLogedIn = !state.isLogedIn
        }
    }
})

export const { logInOut } = authSlice.actions
export default authSlice.reducer