import React from 'react';
import {NavLink } from 'react-router-dom';
import './Navbar.css'; 


function Navbar() {
    return (
		<nav className="navbar navbar-expand-lg bg-dark bg-opacity-30" id="Navbar">
            <div className="container">
                <NavLink exact to="/" className="navbar-brand text-uppercase">
                  <span className="text-white">John Doe</span></NavLink>
                <button className="navbar-toggler text-uppercase font-weight-bold bg-primary text-white rounded" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    <i className="fas fa-bars"></i>
                </button>
                <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item mx-0 mx-lg-1"><NavLink exact to="/accueil" className="nav-link py-3 px-0 px-lg-3 rounded" >
                           <span className="text-uppercase">Accueil</span></NavLink></li>
                           <li className="nav-item mx-0 mx-lg-1"><NavLink exact to="/service" className="nav-link py-3 px-0 px-lg-3 rounded" >
                           <span className="text-uppercase">Service</span></NavLink></li>
                           <li className="nav-item mx-0 mx-lg-1"><NavLink exact to="/realisation" className="nav-link py-3 px-0 px-lg-3 rounded" >
                           <span className="text-uppercase">Realisation</span></NavLink></li>
                           <li className="nav-item mx-0 mx-lg-1"><NavLink exact to="/blog" className="nav-link py-3 px-0 px-lg-3 rounded" >
                           <span className="text-uppercase">Blog</span></NavLink></li>
                           <li className="nav-item mx-0 mx-lg-1"><NavLink exact to="/contact" className="nav-link py-3 px-0 px-lg-3 rounded" >
                           <span className="text-uppercase">Me contacter</span></NavLink></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;