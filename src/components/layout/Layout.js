import React from 'react';
import {Link, Route, Routes} from "react-router-dom";

import Todos from "../todos/Todos";
import Albums from "../albums/Albums";
import Comments from "../comments/Comments";
import './Leyout.css';
import {Post} from "../posts/Post";

const Layout = () => {

    return (
        <div>
            <>
                <ul>
                    <li><Link to={'/todos'}>Todos</Link></li>
                    <li><Link to={'/albums'}>Albums</Link></li>
                    <li><Link to={'/comments'}>Comments</Link></li>
                </ul>
            </>
            <>
                <Routes>
                    <Route path={'todos'} element={<Todos/>}/>
                    <Route path={'albums'} element={<Albums/>}/>
                    <Route path={'comments'} element={<Comments/>}>
                        <Route path={':postId/posts'} element={<Comments/>}/>
                    </Route>
                    <Route path={'posts/:id'} element={<Post/>}/>

                </Routes>
            </>
        </div>
    );
};

export default Layout;