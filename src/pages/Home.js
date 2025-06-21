import React from 'react';
import { FaUser, FaCalendarAlt, FaBullhorn } from 'react-icons/fa';
import { MdOutlineEventAvailable } from 'react-icons/md';
import './Home.css';

export default function Home() {
  return (
    <div className="home-container">
      <header className="home-header">
        <div className="home-logo">
          <img
            src="/church-icon.png"
            alt="Igreja"
            className="logo-image"
          />
        </div>
        <h2 className="home-title">Primeira Igreja Batista</h2>
        <p className="home-subtitle">Bela Vista do Paraíso</p>
      </header>

      <section className="home-banner">
        <img
          src="/culto-banner.jpg"
          alt="Cultos"
          className="banner-image"
        />
      </section>

      <section className="home-buttons">
        <div className="button-grid">
          <div className="grid-button">
            <FaUser size={28} />
            <span>Área de membros</span>
          </div>
          <div className="grid-button">
            <FaCalendarAlt size={28} />
            <span>Escalas</span>
          </div>
          <div className="grid-button">
            <FaBullhorn size={28} />
            <span>Avisos</span>
          </div>
          <div className="grid-button">
            <MdOutlineEventAvailable size={28} />
            <span>Eventos</span>
          </div>
        </div>
      </section>
    </div>
  );
}
