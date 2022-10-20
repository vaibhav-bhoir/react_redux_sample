import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
    name : 'user', //store name
    initialState: {
        name: 'john',
        email: 'johnDoe@gmail.com',
    },
    reducers: {
        update: (state, action) => { //action: update
            state.name = action.payload.name;
            state.email = action.payload.email;
        },
    }
})

export const {update} = userSlice.actions;
export default userSlice.reducer;