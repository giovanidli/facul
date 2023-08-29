import React from 'react';
import Header from './Header';
import Footer from './Footer';
import './Account.css';

const Login = () => {
  return (
    <div>
      <Header />
      <div className="account-container">
        <img src="path/to/your/image.jpg" alt="Login" />
        <div className="account-form">
          <h1>Login</h1>
          <input type="text" placeholder="Email ou Telefone" />
          <input type="password" placeholder="Senha" />
          <button className="btn btn-primary">Log In</button>
          <a href="/forgot-password">Esqueceu a senha?</a>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Login;
