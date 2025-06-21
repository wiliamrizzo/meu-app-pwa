import React from 'react';
import { HashRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import { FaHome, FaUser, FaBullhorn, FaCalendarAlt } from 'react-icons/fa';
import Home from './pages/Home';
import Escalas from './pages/Escalas';
import Avisos from './pages/Avisos';
import Membros from './pages/Membros';
import Eventos from './pages/Eventos';

export default function App() {
  return (
    <Router>
      <div style={{ paddingBottom: '70px' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/escalas" element={<Escalas />} />
          <Route path="/avisos" element={<Avisos />} />
          <Route path="/membros" element={<Membros />} />
          <Route path="/eventos" element={<Eventos />} />
        </Routes>
      </div>

      <nav style={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        height: '60px',
        backgroundColor: '#f8f9fa',
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        borderTop: '1px solid #ccc',
        boxShadow: '0 -2px 5px rgba(0,0,0,0.1)'
      }}>
        <NavLink
          to="/"
          style={({ isActive }) => ({ color: isActive ? '#000' : '#ccc' })}
        >
          <FaHome size={26} />
        </NavLink>

        <NavLink
          to="/escalas"
          style={({ isActive }) => ({ color: isActive ? '#000' : '#ccc' })}
        >
          <FaCalendarAlt size={26} />
        </NavLink>

        <NavLink
          to="/avisos"
          style={({ isActive }) => ({ color: isActive ? '#000' : '#ccc' })}
        >
          <FaBullhorn size={26} />
        </NavLink>

        <NavLink
          to="/membros"
          style={({ isActive }) => ({ color: isActive ? '#000' : '#ccc' })}
        >
          <FaUser size={26} />
        </NavLink>
      </nav>
    </Router>
  );
}
