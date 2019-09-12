import React from 'react';
import './styles.css'
import Header from './Header'
import Footer from './Footer'

const Theme = ({ children }) => {

    return (
        <div>
            <Header />
            <div className='container-content'>
                <div className='content'>
                    {children}
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Theme;