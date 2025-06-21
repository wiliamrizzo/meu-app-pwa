import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaUser, FaCalendarAlt, FaBullhorn } from 'react-icons/fa';
import { MdOutlineEventAvailable } from 'react-icons/md';
import './Home.css';

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <header className="home-header">
        <div className="home-logo">
          <img
            src="./church-icon.png"
            alt="Igreja"
            className="logo-image"
          />
        </div>
        <h2 className="home-title">Primeira Igreja Batista</h2>
        <p className="home-subtitle">Bela Vista do Paraíso</p>
      </header>

      <section className="home-banner">
        <img
          src="./culto-banner.jpg"
          alt="Cultos"
          className="banner-image"
        />
      </section>

      <section className="home-buttons">
        <div className="button-grid">
          <button className="grid-button" onClick={() => navigate('/membros')}>
            <FaUser size={28} />
            <span>Área de membros</span>
          </button>
          <button className="grid-button" onClick={() => navigate('/escalas')}>
            <FaCalendarAlt size={28} />
            <span>Escalas</span>
          </button>
          <button className="grid-button" onClick={() => navigate('/avisos')}>
            <FaBullhorn size={28} />
            <span>Avisos</span>
          </button>
          <button className="grid-button" onClick={() => navigate('/eventos')}>
            <MdOutlineEventAvailable size={28} />
            <span>Eventos</span>
          </button>
        </div>
      </section>
    </div>
  );
}
