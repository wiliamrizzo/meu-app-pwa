import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, ChevronRight } from 'lucide-react';
import './Escalas.css';

export default function Escalas() {
  const navigate = useNavigate();
  const [categorias, setCategorias] = useState([]);

  useEffect(() => {
    fetch('./db/faq.json')
      .then((res) => res.json())
      .then((json) => {
        if (json?.data) {
          setCategorias(json.data);
        }
      });
  }, []);

  return (
    <div className="escalas-novo-container">
      <header className="escalas-novo-header">
        {/* Botão voltar: se NÃO quiser, pode remover esse bloco */}
        <button onClick={() => navigate('/')} className="escalas-back-button" aria-label="Voltar">
          <ArrowLeft size={24} strokeWidth={1.5} />
        </button>
        <h2 className="escalas-novo-page-title escalas-center-title">Escalas</h2>
        <div className="placeholder" />
      </header>
      <ul className="escalas-novo-list">
        {categorias.map((categoria) => (
          <li
            className="escalas-novo-item"
            key={categoria.attributes.id}
            onClick={() =>
              navigate('/escalas/subcategorias', {
                state: {
                  subcategorias: categoria.attributes.subcategories,
                  categoriaTitle: categoria.attributes.title,
                }
              })
            }
          >
            <span className="escalas-novo-title">{categoria.attributes.title}</span>
            <ChevronRight size={22} strokeWidth={2} />
          </li>
        ))}
      </ul>
    </div>
  );
}
