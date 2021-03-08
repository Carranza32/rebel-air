import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Index from './pages/Index.jsx';
import NavBar from './components/Navbar.jsx'

ReactDOM.render(
  <React.StrictMode>
      <NavBar />
      <Index />
  </React.StrictMode>,
  document.getElementById('root')
);