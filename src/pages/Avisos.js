import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import './Avisos.css';

export default function Avisos() {
  const navigate = useNavigate();

  const avisos = [
    { id: 1, titulo: 'Culto especial no domingo às 19h' },
    { id: 2, titulo: 'Reunião de oração quarta-feira às 20h' },
    { id: 3, titulo: 'Ensaios do louvor sábado às 17h' },
  ];

  return (
    <div className="avisos-container">
      <header className="avisos-header">
        <button
          onClick={() => navigate('/')}
          className="avisos-back-button"
          aria-label="Voltar para Home"
        >
          <ArrowLeft size={24} strokeWidth={1.5} />
        </button>
        <h2 className="avisos-title">Avisos</h2>
        <div className="placeholder" /> {/* espaço à direita, se não tiver nada */}
      </header>

      <main className="avisos-list">
        {avisos.map(aviso => (
          <div key={aviso.id} className="avisos-item">
            <h3>{aviso.titulo}</h3>
          </div>
        ))}
      </main>
    </div>
  );
}
