import './navbar.css';
import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar">
             <div className="logo">
                <img src="./images/logo.png" alt="Logo" /> 
            </div>
        <ul>
            
          <li><Link to="/">Home</Link></li>
          <li><Link to="/cadastroFilme">Cadastro de Filme</Link></li>
          <li><Link to="/cadastroUsuario">Cadastro de Usuário</Link></li>
          <li><Link to="/login">Login</Link></li>
        </ul>
      </nav>
    );
}

export default Navbar;