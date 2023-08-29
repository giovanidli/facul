import React from 'react';
import Header from './Header';
import Footer from './Footer';
import './Account.css';

const CrieSuaConta = () => {
  return (
    <div>
      <Header />
      <div className="account-container">
        <img src="path/to/your/image.jpg" alt="Crie sua conta" />
        <div className="account-form">
          <h1>Crie Sua Conta</h1>
          <input type="text" placeholder="Nome" />
          <input type="text" placeholder="Email ou Telefone" />
          <input type="password" placeholder="Senha" />
          <button className="btn btn-primary">Criar Conta</button>
          <button className="btn btn-secondary">Logar com o Google</button>
          <p>Já possui uma conta? <a href="/login">Ir para a página de Login</a></p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CrieSuaConta;
