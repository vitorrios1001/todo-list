import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import firebase from 'firebase'

import { googleAuthProvider } from '../../services/firebase'

import './styles.css'

const Login = () => {
  const history = useHistory()
  const [form, setForm] = useState({
    username: '',
    password: ''
  })

  const handleChangeField = e => {
    setForm({
        ...form,
        [e.target.name]: e.target.value,
    })
  }

  const handleLogin = async () => {
    const result = await firebase.auth().signInWithPopup(googleAuthProvider);

    var token = result.credential.accessToken;
    var user = result.user;

    const userLogin = {
        id: user.uid,
        fullName: user.displayName,
        firtName: user.displayName.split(' ')[0],
        email: user.email,
        avatar: user.photoURL,
    }

    localStorage.setItem('user', JSON.stringify(userLogin))
    localStorage.setItem('token', token);

    history.push('/')
  }

  const handleSubmit = e => {
    e.preventDefault();
    console.log(form)
    alert('Login by email in production')
  }

  return (
    <div className='container-login'>
      <div className='form-login'>
        <span className='title-product'>Todo List</span>
        <span className='title-login'>Login</span>
        <div className="buttons-login">
          <button
              className='btn-login'
              onClick={handleLogin}
          >
            <i className='fa fa-google' />
            <span>Login Google</span>
          </button>
        </div>
        <form onSubmit={handleSubmit} className="form-login-email">
          <input
            className="user-name"
            type="text"
            value={form.username}
            onChange={handleChangeField}
            name="username"
            placeholder="Insert here your username"
          />
          <input
            className="password"
            type="password"
            onChange={handleChangeField}
            value={form.password}
            name="password"
            placeholder="********"
          />
          <div className="container-button-login">
            <button
              className="login"
              type='submit'
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login;