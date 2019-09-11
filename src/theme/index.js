import React from 'react';
import './styles.css'
import Header from './Header'

const Theme = ({ children }) => {

    return (
        <div>
            <Header />
            <div className='container-content'>
                <div className='content'>
                    {children}
                </div>
            </div>
        </div>
    )
}

export default Theme;