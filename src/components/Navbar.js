import React from 'react';
import logo from "../logo.png";
import "./Navbar.css";
import {NavLink} from "react-router-dom";

const Navbar = ({mobileState, onClick}) => (
    <div className={`menus`}>
        <nav id="menu" className="navbar navbar-expand-md">
            <a href="#home" className="navbar-brand" data-menuanchor="home">
                <img src={logo} alt="icon" className="brand__logo"/>
                <span className="brand__name">Jeunesse Constructive</span>
            </a>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul id="menu" className="navbar-nav">
                    <li data-menuanchor="home" className="nav-item active">
                        <a className="nav-link" href="#home">Accueil</a>
                    </li>
                    <li data-menuanchor="about" className="nav-item">
                        <a className="nav-link" href="#about">Présentation</a>
                    </li>
                    <li data-menuanchor="actus" className="nav-item">
                        <a className="nav-link" href="#actus">Services</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href={"#mooc241"}>Formation241</a>
                    </li>
                    <li data-menuanchor="contact" className="nav-item">
                        <a className="nav-link" href="#contact">Contact</a>
                    </li>
                </ul>
            </div>
        </nav>
        <button onClick={onClick} className="toggle-btn">
            <span className="hamburger hamburger-1"/>
            <span className="hamburger hamburger-2"/>
            <span className="hamburger hamburger-3"/>
        </button>
    </div>
);

export default Navbar;