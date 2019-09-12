import React from 'react';

import './styles.css';

const Footer = () => {

    return (
        <footer className="container-footer">
            <div className="networks">
                <a href={`https://github.com/vitorrios1001`} target="_blank" >
                    <i className="fa fa-github" />
                </a>
                <a href={`https://www.instagram.com/vitorluizrios/`} target="_blank" >
                    <i className="fa fa-instagram" />
                </a>
                <a href={`https://www.facebook.com/vitorluizrios`} target="_blank" >
                    <i className="fa fa-facebook" />
                </a>
                <a href={`https://www.linkedin.com/in/vitorluizrios/`} target="_blank" >
                    <i className="fa fa-linkedin" />
                </a>
            </div>
        </footer>
    )
}

export default Footer;