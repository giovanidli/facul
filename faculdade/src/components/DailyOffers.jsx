import React from 'react';
import './DailyOffers.css';

import produto1 from '../img/Screenshot_1.png'

const DailyOffers = () => {
  const products = [
    { id: 1, name: 'Produto 1', price: '$10', image: produto1 },
    { id: 2, name: 'Produto 2', price: '$20', image: produto1 },
    { id: 3, name: 'Produto 3', price: '$30', image: produto1 },
    { id: 4, name: 'Produto 4', price: '$40', image: produto1 },
  ];

  return (
    <div className="daily-offers">
      <h1 className="title">Ofertas do Dia</h1>
      <div className="products">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} />
            <h2>{product.name}</h2>
            <p>{product.price}</p>
          </div>
        ))}
      </div>
      <button className="view-all-button">Ver Todos os Produtos</button>
    </div>
  );
};

export default DailyOffers;
