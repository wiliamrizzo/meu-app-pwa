import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa'; // Ícone de voltar
import './Escalas.css';

export default function Escalas() {
  const navigate = useNavigate();

  return (
    <div className="escalas-container">
      <header className="escalas-header">
        <button
          onClick={() => navigate('/')}
          className="escalas-back-button"
          aria-label="Voltar para Home"
        >
          <FaArrowLeft />
        </button>
        <h2 className="escalas-title">Escalas</h2>
      </header>
    </div>
  );
}
