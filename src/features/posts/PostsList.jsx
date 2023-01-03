import React from 'react';

import { useSelector } from 'react-redux';
import { PostAuthor } from './PostAuthor';
import { PostsForm } from './PostsForm';
import { selectAllPosts } from './postsSlice';
import { TimeAgo } from './TimeAgo';

const PostsList = () => {
    const posts = useSelector(selectAllPosts);

    const renderedPosts = posts.map(post => (
        <article key={post.id} style={{ padding: '1.5rem', border: '4px solid', borderRadius: '24px', textAlign: 'left', margin: '.5rem' }}>
            <h3>{ post.title }</h3>
            <p style={{ width: '350px' }}>{ post.content.substring(0, 100) }</p>
            <PostAuthor userId={post.userId}/> <TimeAgo timestamp={post.date}/>
        </article>
    ));

    return (
        <div>
            <PostsForm/>
            <h1>Posts</h1>
            { renderedPosts }
        </div>
    );
};

export default PostsList
