import React from 'react';
import { HashRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import { FaHome, FaUser, FaInfoCircle, FaCog } from 'react-icons/fa';
import Home from './pages/Home';
import Profile from './pages/Profile';
import About from './pages/About';
import Settings from './pages/Settings';

export default function App() {
  return (
    <Router>
      <div style={{ paddingBottom: '70px' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/about" element={<About />} />
          <Route path="/settings" element={<Settings />} />
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
          <FaHome size={24} />
        </NavLink>

        <NavLink
          to="/profile"
          style={({ isActive }) => ({ color: isActive ? '#000' : '#ccc' })}
        >
          <FaUser size={24} />
        </NavLink>

        <NavLink
          to="/about"
          style={({ isActive }) => ({ color: isActive ? '#000' : '#ccc' })}
        >
          <FaInfoCircle size={24} />
        </NavLink>

        <NavLink
          to="/settings"
          style={({ isActive }) => ({ color: isActive ? '#000' : '#ccc' })}
        >
          <FaCog size={24} />
        </NavLink>
      </nav>
    </Router>
  );
}
