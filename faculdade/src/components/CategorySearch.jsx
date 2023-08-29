import React from 'react';
import { FaMobileAlt, FaLaptop, FaClock, FaCamera, FaGamepad } from 'react-icons/fa';
import './CategorySearch.css';

const CategorySearch = () => {
  const categories = [
    { id: 1, name: 'Telefones', icon: <FaMobileAlt /> },
    { id: 2, name: 'Computadores', icon: <FaLaptop /> },
    { id: 3, name: 'Smartwatches', icon: <FaClock /> },
    { id: 4, name: 'Câmeras', icon: <FaCamera /> },
    { id: 5, name: 'Gaming', icon: <FaGamepad /> },
  ];

  return (
    <div className="category-search">
      <h1 className="title">Buscar por Categoria</h1>
      <div className="category-cards">
        {categories.map((category) => (
          <div key={category.id} className="category-card">
            {category.icon}
            <p>{category.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategorySearch;

