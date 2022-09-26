import React, {useEffect, useState} from 'react';

import {todosService} from "../../services";
import Todo from "../todo/Todo";
import './Todos.css'

const Todos = () => {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        todosService.getAll().then(({data}) => setTodos(data));
    }, []);
    return (
        <div className={'todos'}>
            {todos.map(todo => <Todo key={todo.id} todo={todo}/>)}
        </div>
    );
};

export default Todos;