import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import './Footer.css';

import qr from '../img/qr.png'
const Footer = () => {
  return (
    <div className="footer">
      <div className="section">
        <h2>Nome da Empresa</h2>
      </div>
      <div className="section">
        <h2>Suporte</h2>
        <p>Rua: Exemplo, 123</p>
        <p>Email: exemplo@email.com</p>
        <p>Telefone: +1 (123) 456-7890</p>
      </div>
      <div className="section">
        <h2>Conta</h2>
        <p>Minha Conta</p>
        <p>Login/Register</p>
      </div>
      <div className="section">
        <h2>Termos</h2>
        <p>Termos de Uso</p>
        <p>Contato</p>
      </div>
      <div className="section">
        <h2>Download App</h2>
        <img src={qr} alt="QR Code" className="qr-code" />
        <div className="social-icons">
          <FaFacebookF className="social-icon" />
          <FaTwitter className="social-icon" />
          <FaInstagram className="social-icon" />
          <FaLinkedinIn className="social-icon" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
