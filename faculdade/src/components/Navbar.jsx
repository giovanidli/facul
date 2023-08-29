import React from 'react';
import { FiArrowRight } from 'react-icons/fi';
import './Navbar.css';

import produto1 from '../img/Screenshot_1.png'

const Navbar = () => {
  const categories = [
    'Computador',
    'Consoles',
    'Cadeiras',
    'Teclados',
    'Smartphones',
    'Mouses',
    'Gabinetes',
    'Controles',
    'Monitores',
  ];

  return (
    <div className="navbar">
      <div className="categories">
        <ul>
          {categories.map((category, index) => (
            <li key={index}>
              {category}
              {(index === 0 || index === 1) && <FiArrowRight className="category-arrow" />}
            </li>
          ))}
        </ul>
      </div>
      <div className="carousel-section">
        <h1>Promoções</h1>
        <div className="carousel">
          <img src={produto1} alt="Image 1" />
          <img src={produto1} alt="Image 2" />
          <img src={produto1} alt="Image 3" />
          <img src={produto1} alt="Image 4" />
          <img src={produto1} alt="Image 5" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
