import React from 'react';
import firebase from 'firebase'
import './styles.css'

const Header = () => {
    const user = JSON.parse(localStorage.getItem('user'))

    const handleLogOut = () => {
        localStorage.removeItem('user')

        firebase.app(firebase.app().name).auth().signOut().then(() => {
            console.log('Sign-out with success')
        }).catch(error => {
            console.log(error)
        });

        window.location.assign('/')
    }

    return (
        <div className="container">
            <div className="avatar">
                <img src={user.avatar} alt='avatar' />
                <span className="title">Todo List</span>
            </div>
            <div className="logout">
                <button
                    title="Log-out"
                    onClick={handleLogOut}
                >
                    <i className="fa fa-sign-out" />
                </button>
            </div>
        </div>
    )
}

export default Header;