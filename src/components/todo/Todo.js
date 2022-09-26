import React from 'react';

import './todo.css';

const Todo = ({todo}) => (
    <div className={'todo'}>
        <div>userId - {todo.userId} id-{todo.id}</div>
        <h3 className={todo.completed ? 'completed' : ''}>Title - {todo.title}</h3>
    </div>
);


export default Todo;