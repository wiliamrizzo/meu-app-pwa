import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
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
          <ArrowLeft size={24} strokeWidth={1.5} />
        </button>
        <h2 className="escalas-title">Escalas</h2>
      </header>
    </div>
  );
}
