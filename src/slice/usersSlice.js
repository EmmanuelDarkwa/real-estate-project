import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    user: [],
}

const usersSlice = createSlice({
    name: 'user',
    initialState: initialState,
    reducers: {
        creatingNewUser: (state, action) => {
            state.user = [...state.user, action.payload]
        },

    }
})

export const { creatingNewUser } = usersSlice.actions;
export default usersSlice.reducer;