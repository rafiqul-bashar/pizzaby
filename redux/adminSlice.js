import { createSlice } from "@reduxjs/toolkit";

const adminSlice = createSlice({
    name: "user",
    initialState: {
        user: {},
        admin: false,
    },
    reducers: {
        login: (state, action) => {
            state.user = action.payload
            state.admin = true
        },
        logOut: (state) => {
            state.user = {}
            state.admin = false
        },
    },
});

export const { login, logOut } = adminSlice.actions;
export default adminSlice.reducer;