import React from 'react';
import {useSelector} from "react-redux";

import './Header.css';

const Header = () => {
    const {currentUser} = useSelector(state => state.userReducer);
    const {currentPost} = useSelector(state => state.postReducer);


    return (
        <div className={'header'}>
            {currentUser && currentUser.name}
            {currentPost && currentPost.title}
        </div>
    );
};

export {Header};