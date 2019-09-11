import React, { useState, useEffect } from 'react';
//import GoogleLogin from 'react-google-login';

import { addTodo, getTodos } from '../../services/todo'

const TodoList = () => {

    const [todoItem, setTodoItem] = useState('')
    const [todoList, setTodoList] = useState([])

    useEffect(() => {
        async function getData() {
            //console.log(process.env)

            //const todos = await getTodos();

            //setTodoList(todos)
        }

        getData();
    }, [])

    const handleSubmit = e => {
        e.preventDefault();

        const item = { checked: false, description: todoItem };

        const itemResult = addTodo(item);

        setTodoList([...todoList, itemResult]);
        setTodoItem('');
    }

    return (
        <div>
            <div>
                <form onSubmit={handleSubmit} >
                    <input
                        type='text'
                        value={todoItem}
                        onChange={e => setTodoItem(e.target.value)}
                    />
                    <input
                        type='submit'
                        value='Add'
                    />
                </form>
            </div>


            <div className='todo-list'>
                {
                    todoList.map((item, index) => (
                        <p key={index} >
                            <input
                                type='checkbox'
                                value={item.checked}
                                checked={e => console.log(e)}
                            /> {item.description}
                        </p>
                    ))
                }
            </div>

            {/* <GoogleLogin
                clientId="153942173117-hlu4anobso9dcfc6lkcegge7t5i5uuhb.apps.googleusercontent.com" //CLIENTID NOT CREATED YET
                buttonText="LOGIN WITH GOOGLE"
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
                theme='dark'

            /> */}

        </div>
    )
}

export default TodoList;