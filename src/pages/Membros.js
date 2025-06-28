import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import './Membros.css';

export default function Membros() {
  const navigate = useNavigate();

  return (
    <div className="membros-container">
      <header className="membros-header">
        <button
          onClick={() => navigate('/')}
          className="membros-back-button"
          aria-label="Voltar para Home"
        >
          <ArrowLeft size={24} strokeWidth={1.5} />
        </button>
        <h2 className="membros-title">Membros</h2>
        <div className="placeholder" /> {/* espaço para equilibrar */}
      </header>
    </div>
  );
}
