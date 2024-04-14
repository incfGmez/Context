import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import  {Favoritos} from './views/Favoritos';
import Home from './views/Home';
import { LikesProvider } from './components/LikesContext';
import './App.css'

const App = () => {
  return (
    <LikesProvider>
      <Router>
        <nav className='nav-bar'>
          <ul>
            <li>
              <Link to={"/"} className='link'>Home</Link>
            </li>
            <li>
              <Link to={"/favoritos"} className='link'>Favoritos</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favoritos" element={<Favoritos />} />
        </Routes>
      </Router>
    </LikesProvider>
  );
};

export default App;
