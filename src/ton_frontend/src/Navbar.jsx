import React from 'react';
import './Navbar.css';

function Navbar() {
    return (
        <nav className="navbar">
            <div className="navbar-left">
                <h1 className="navbar-logo">
                    <span className="logo-tont">Tont</span><span className="logo-chain">Chain</span>
                </h1>
            </div>
            <div className="navbar-center">
                <ul className="navbar-links">
                    <li><a href="#accueil">Accueil</a></li>
                    <li><a href="#services">Services</a></li>
                    <li><a href="#apropos">À propos</a></li>
                    <li><a href="#contacts">Contacts</a></li>
                    <li><a href="#blog">Blog</a></li>
                </ul>
            </div>
            <div className="navbar-right">
                <button className="btn btn-signup">S'inscrire</button>
                <button className="btn btn-login">Se connecter</button>
            </div>
        </nav>
    );
}

export default Navbar;
