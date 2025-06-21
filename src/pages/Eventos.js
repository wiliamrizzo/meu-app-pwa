import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa'; // Ícone de voltar
import './Eventos.css';

export default function Eventos() {
  const navigate = useNavigate();

  return (
    <div className="eventos-container">
      <header className="eventos-header">
        <button
          onClick={() => navigate('/')}
          className="eventos-back-button"
          aria-label="Voltar para Home"
        >
          <FaArrowLeft />
        </button>
        <h2 className="eventos-title">Eventos</h2>
      </header>
    </div>
  );
}
