import React, { useState, useEffect } from 'react';
//import GoogleLogin from 'react-google-login';

import { addTodo, getTodos, removeTodo, changeStatusTodo } from '../../services/todo'

import Form from './Form'
import TodoItem from './TodoItem';

import './style.scss'

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

  const toggleRemove = async id => {
    const result = await removeTodo(id)

    if (result) {
      setTodoList(todoList.filter(item => item.id !== id))
    } else {
      alert('Error on delete task')
    }
  }

  const toggleCheck = async (id, checked) => {
    const result = await changeStatusTodo(id, checked)

    if (result) {
      setTodoList(todoList.map(item => ({
        ...item,
        checked: item.id === id ? checked : item.checked,
      })))
    } else {
      alert('Error on delete task')
    }
  } 

  const renderItems = () => (
    todoList.map(todo => (
      <TodoItem
        key={todo.id}
        toggleCheck={toggleCheck}
        toggleRemove={toggleRemove}
        {...todo}
      />
    ))
  )

  return (
    <div className="container-page-todo">
      <div>
        <Form addTodo={addTodoItem} />
      </div>
      {loading && <div><span>Loading...</span></div>}
      <div className='todo-list'>
        {renderItems()}
      </div>
    </div>
  )
}

export default TodoList;