/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import './Header.css';

export default ({black}) => {
    return (
        <header className={black ? 'black' : ''}>
            <div className="header--logo">
                <a href="/">
                    <img src="https://www.reviews.org/app/uploads/2019/07/580b57fcd9996e24bc43c529.png" alt="Netflix" />
                </a>
            </div>
            <div className="header--user">
                <a href="/">
                    <img src="https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png" alt="Perfil Usuário" />
                </a>
            </div>
        </header>
    )
}