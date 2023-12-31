import React from 'react';
import { FaSearch, FaHeart, FaShoppingCart } from 'react-icons/fa';
import './Header.css';
import TopHeader from './TopHeader';
import { Link } from 'react-router-dom';
import Login from './Login';

const Header = () => {
  return (
    <div>
      <TopHeader />
      <header className="header">
        <nav className="nav-menu">
          <ul className="nav-list">
            <li className="nav-logo"><Link to="/">RTech</Link></li>
            <li className="nav-item"><Link to="/">Home</Link></li>
            <li className="nav-item"><Link to="/sobre">Sobre</Link></li>
            <li className="nav-item">Contato</li>
            <li className="nav-item"><Link to="/login">Entrar</Link></li>
          </ul>
          <div className="search-container">
            <input type="text" placeholder="Pesquisar" className="search-input"></input>
            <FaSearch className="icon search-icon" />
          </div>
          <div className="search-and-icons">
            <FaHeart className="icon heart-icon" />
            <Link to="/cart"><FaShoppingCart className="icon cart-icon" /></Link>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Header;
