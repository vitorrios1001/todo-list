import React, { useState } from 'react';

import './styles.css'

const Form = ({ addTodo }) => {

    const [todo, setTodo] = useState('');

    const handleSubmit = e => {
        e.preventDefault();

        const item = { description: todo, checked: false };

        addTodo(item);
        setTodo('');
    }

    return (
        <form onSubmit={handleSubmit} >
            <input
                className="text-todo"
                type="text"
                onChange={e => setTodo(e.target.value)}
                value={todo}
            />
            <input
                className="button-submit"
                type="submit"
                value="Add task"
            />
        </form>
    )
}

export default Form;