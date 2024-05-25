import React from "react";
import { Link } from "react-router-dom";
import logo from "../../images/logo.png";
import './navbar.css';

function MenuBar() {
    return (
        <nav className="navbar">
            <div className="logo-container">
                <img src={logo} alt="Logo" className="logo" />
            </div>
            <ul className="nav-links">
                <li>
                    <Link to="/home" className="nav-link">
                        Home
                    </Link>
                </li>
                <li>
                    <Link to="/cadastro" className="nav-link">
                        Cadastro
                    </Link>
                </li>
                <li>
                    <Link to="/login" className="nav-link">
                        Login
                    </Link>
                </li>
            </ul>
        </nav>
    );
}

export default MenuBar;
