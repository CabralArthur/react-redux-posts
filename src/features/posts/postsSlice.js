import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = [{
    id: 1,
    title: 'Title 1',
    content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the.'
}];

const posts = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        addPost: {
            prepare: (title, content) => {
                return {
                    payload: {
                        id: nanoid(),
                        title,
                        content
                    }
                }
            },
            reducer: (state, action) => {
                state.push(action.payload)
            },
        }
    }
});

export const selectAllPosts = state => state.posts;

export const { addPost } = posts.actions;

export default posts.reducer;