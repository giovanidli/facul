import React from 'react';
import './BestSellers.css';

import produto1 from '../img/Screenshot_1.png'

const BestSellers = () => {
  const products = [
    { id: 1, name: 'Produto 1', price: 'R$ 100', imgSrc: produto1 },
    { id: 2, name: 'Produto 2', price: 'R$ 200', imgSrc: produto1 },
    { id: 3, name: 'Produto 3', price: 'R$ 300', imgSrc: produto1 },
    { id: 4, name: 'Produto 4', price: 'R$ 400', imgSrc: produto1 },
  ];

  return (
    <div className="best-sellers">
      <h1 className="title">Produtos Mais Vendidos</h1>
      <div className="products">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.imgSrc} alt={product.name} />
            <p className="product-name">{product.name}</p>
            <p className="product-price">{product.price}</p>
          </div>
        ))}
      </div>
      <button className="view-more">Ver Mais</button>
    </div>
  );
};

export default BestSellers;
