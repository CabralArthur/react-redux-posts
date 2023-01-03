import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addPost } from './postsSlice';
import { selectAllUsers } from '../users/usersSlice';

export const PostsForm = () => {
    const dispatch = useDispatch();
	const [title, setTitle] = useState('');
	const [content, setContent] = useState('');
	const [userId, setUserId] = useState('');

    const users = useSelector(selectAllUsers);

    const onTitleChange = event => setTitle(event.target.value);
    const onContentChange = event => setContent(event.target.value);
    const onAuthorChange = event => setUserId(event.target.value);

    const userOptions = users.map(user => {
        return (
            <option key={user.id} value={user.id}>
                {user.name}
            </option>
        )
    });
	
    const insertPost = () => {
        if (!title || !content || !userId) {
            alert('Insert title, content and user!');
            return;
        }

        dispatch(addPost(title, content, userId));

        setTitle('');
        setContent('');
    };

	return (
		<section style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <h2>Add a new post</h2>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
                <label htmlFor="post-title">Title</label>
                <input type="text" id="post-title" value={title} onChange={onTitleChange}/>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column' }}>
                <label htmlFor="post-author">Title</label>
                <select id="post-author" value={userId} onChange={onAuthorChange}>
                    <option value="">Selecione o autor</option>
                    {userOptions}
                </select>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column' }}>
                <label htmlFor="post-content">Content</label>
                <input type="text" id="post-content" value={content} onChange={onContentChange}/>
            </div>

            <button onClick={insertPost} disabled={!title || !content || !userId}>Insert new post!</button>
        </section>
	)
}
