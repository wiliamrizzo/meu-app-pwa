import React from 'react';
import { HashRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import { FaHome, FaUser, FaBullhorn, FaCalendarAlt } from 'react-icons/fa';
import './App.css';
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

      <nav className="bottom-nav">
        <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : '')}>
          <FaHome size={26} />
          <div>Home</div>
        </NavLink>

        <NavLink to="/escalas" className={({ isActive }) => (isActive ? 'active' : '')}>
          <FaCalendarAlt size={26} />
          <div>Escalas</div>
        </NavLink>

        <NavLink to="/avisos" className={({ isActive }) => (isActive ? 'active' : '')}>
          <FaBullhorn size={26} />
          <div>Avisos</div>
        </NavLink>

        <NavLink to="/membros" className={({ isActive }) => (isActive ? 'active' : '')}>
          <FaUser size={26} />
          <div>Membros</div>
        </NavLink>
      </nav>
    </Router>
  );
}
