import React from 'react';
import './LatestReleases.css';

import produto1 from '../img/Screenshot_1.png'

const LatestReleases = () => {
  return (
    <div className="latest-releases">
      <h1 className="title">Lançamentos</h1>
      <div className="news-images">
        <img className="large-image" src={produto1} alt="Latest Release" />
        <div className="small-images">
          <img src={produto1} alt="Release 1" />
          <img src={produto1} alt="Release 2" />
        </div>
      </div>
    </div>
  );
};

export default LatestReleases;
