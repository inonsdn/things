import { createSlice } from "@reduxjs/toolkit";

export const appSlice = createSlice({
    name: 'App',

    // state when initialize slice object
    initialState: {
        userId: null
    },

    // action to update state
    reducers: {
        setUserId: (state, userId) => {
            state.userId = userId
        }
    }
})

// Action creators are generated for each case reducer function
export const { setUserId } = appSlice.actions

export default appSlice.reducer
