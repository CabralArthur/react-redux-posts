import { nanoid } from '@reduxjs/toolkit';
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addPost } from './postsSlice';

export const PostsForm = () => {
    const dispatch = useDispatch();
	const [title, setTitle] = useState('');
	const [content, setContent] = useState('');
	
    const insertPost = () => {
        if (!title || !content) {
            alert('Insert title and content!');
            return;
        }

        dispatch(addPost(title, content));

        setTitle('');
        setContent('');
    };

	return (
		<section style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <h2>Add a new post</h2>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
                <label htmlFor="post-title">Title</label>
                <input type="text" id="post-title" value={title} onChange={event => setTitle(event.target.value)}/>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column' }}>
                <label htmlFor="post-content">Content</label>
                <input type="text" id="post-content" value={content} onChange={event => setContent(event.target.value)}/>
            </div>

            <button onClick={insertPost}>Insert new post!</button>
        </section>
	)
}
