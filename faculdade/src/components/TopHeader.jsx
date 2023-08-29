import React, { useState } from 'react';
import './TopHeader.css';
import { BsChevronDown } from 'react-icons/bs';

const TopHeader = () => {
  const [language, setLanguage] = useState('Português');

  const toggleLanguage = () => {
    if (language === 'Português') {
      setLanguage('English');
    } else {
      setLanguage('Português');
    }
  };

  return (
    <div className="topheader">
      <div className="language-section" onClick={toggleLanguage}>
        <p className="language-text">
          {language}
          <BsChevronDown className="language-icon" />
        </p>
      </div>
    </div>
  );
};

export default TopHeader;
