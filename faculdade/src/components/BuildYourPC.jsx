import React from 'react';
import './BuildYourPC.css';

import produto1 from '../img/Screenshot_1.png'

const BuildYourPC = () => {
  return (
    <div className="build-your-pc">
      <h1 className="title">Monte o Seu Computador</h1>
      <button className="build-btn">Monte Já</button>
      <img className="pc-image" src={produto1} alt="Computer" />
    </div>
  );
};

export default BuildYourPC;
