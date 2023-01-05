import React from 'react';
import { useSelector } from 'react-redux';
import { selectAllUsers } from '../users/usersSlice';

export const PostAuthor = ({ userId }) => {
    const users = useSelector(selectAllUsers);

    const author = users.find(user => user.id === Number(userId));

    return (
        <div>
            {author?.name || 'Unknown Author'}
        </div>
    );
}
