import React from 'react';
import firebase from 'firebase'

import { googleAuthProvider } from '../../services/firebase'

import './styles.css'

const Login = () => {

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

        window.location.assign('/')
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

            </div>
        </div>
    )
}

export default Login;