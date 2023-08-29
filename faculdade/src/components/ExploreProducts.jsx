import React from 'react';
import './ExploreProducts.css';

import produto1 from '../img/Screenshot_1.png'

const ExploreProducts = () => {
  const products = [
    { id: 1, title: 'Produto 1', imgSrc: produto1 },
    { id: 2, title: 'Produto 2', imgSrc: produto1 },
    { id: 3, title: 'Produto 3', imgSrc: produto1 },
    { id: 4, title: 'Produto 4', imgSrc: produto1 },
    { id: 5, title: 'Produto 5', imgSrc: produto1 },
    { id: 6, title: 'Produto 6', imgSrc: produto1 },
    { id: 7, title: 'Produto 7', imgSrc: produto1 },
    { id: 8, title: 'Produto 8', imgSrc: produto1 },
  ];

  return (
    <div className="explore-products">
      <h1 className="title">Explore Nossos Produtos</h1>
      <div className="product-row">
        {products.slice(0, 4).map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.imgSrc} alt={product.title} />
            <p>{product.title}</p>
          </div>
        ))}
      </div>
      <div className="product-row">
        {products.slice(4, 8).map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.imgSrc} alt={product.title} />
            <p>{product.title}</p>
          </div>
        ))}
      </div>
      <button className="view-more">Ver Mais Produtos</button>
    </div>
  );
};

export default ExploreProducts;
