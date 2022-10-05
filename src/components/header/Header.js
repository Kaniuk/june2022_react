import React from 'react';
import {useNavigate} from "react-router-dom";

import './Header.css';

const Header = () => {
    const navigate = useNavigate();
    return (
        <div>
            <div className={'header'}>
                <button onClick={() => navigate('/users')}>Users</button>
                <button onClick={() => navigate('/posts')}>Posts</button>
                <button onClick={() => navigate('/comments')}>Comments</button>
            </div>
        </div>
    );
};

export {Header};