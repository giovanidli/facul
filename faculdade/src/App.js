import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import CrieSuaConta from './components/CrieSuaConta';
import Login from './components/Login';
function App() {
  return (
    
    <Router>
        <Routes>
        <Route path="/" element={<Home/>}/>
          <Route path="/register" element={<CrieSuaConta/>}/>
          <Route path="/login" element={<Login/>}/>
          {/* <Route path="/sobre" element={<Sobre/>}/> */}
        </Routes>
    </Router>
  );
}

export default App;
