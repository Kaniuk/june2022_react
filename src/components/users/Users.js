import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import {userActions} from "../../redux";
import {User} from "../user/User";

const Users = () => {
    const dispatch = useDispatch();
    const {users, error, loading, userFromApi} = useSelector(state => state.userReducer);


    useEffect(() => {
        // usersService.getAll().then(({data}) => dispatch(userActions.getAll(data)));
        dispatch(userActions.getAll());
    }, []);
    return (
        <div>
            {loading && <h2>Loading...</h2>}
            {error && <h2>error</h2>}
            {users.map(user => <User key={user.id} user={user}/>)}
            <hr/>
            <>{userFromApi && userFromApi.email}</>
        </div>
    );
};

export {Users};