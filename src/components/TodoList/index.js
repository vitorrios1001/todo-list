import React, { useState, useEffect } from 'react';
//import GoogleLogin from 'react-google-login';

import { addTodo, getTodos } from '../../services/todo'

import Form from './Form'

const TodoList = () => {

    const [todoList, setTodoList] = useState([])
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        async function getData() {
            setLoading(true)
            const todos = await getTodos();

            setTodoList(todos)
            setLoading(false)
        }

        getData();
    }, [])

    const addTodoItem = async item => {
        setLoading(true)
        const itemResult = await addTodo(item);

        setTodoList([itemResult, ...todoList]);
        setLoading(false)
    }

    return (
        <div>
            <div>

                <Form addTodo={addTodoItem} />

            </div>
            {
                loading && <div><span>Loading...</span></div>
            }
            <div className='todo-list'>
                {
                    todoList.map((item, index) => (
                        <p key={index} >
                            <input
                                type='checkbox'
                                value={item.checked}
                                checked={item.checked}
                                onChange={e => console.log(e.target.checked)}
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