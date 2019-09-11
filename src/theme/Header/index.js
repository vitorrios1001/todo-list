import React from 'react';
import './styles.css'

const Header = () => {
    const user = JSON.parse(localStorage.getItem('user'))

    return (
        <div className="container">
            <div className="avatar">
                <img src={user.avatar} alt='avatar' />
            </div>
            <div className="logout">
                <button>Logout</button>
            </div>
        </div>
    )
}

export default Header;