import { createSlice } from "@reduxjs/toolkit";

const initialState = [{
    id: 1,
    name: 'Arthur Cabral',
}, {
    id: 2,
    name: 'Anderson Hermínio',
}];

const users = createSlice({
    name: 'users',
    initialState,
    reducers: { }
});

export const selectAllUsers = state => state.users;

export const { addPost } = users.actions;

export default users.reducer;