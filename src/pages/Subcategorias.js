import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { ArrowLeft, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
import './Escalas.css';

export default function Subcategorias() {
  const navigate = useNavigate();
  const location = useLocation();
  const { subcategorias = [], categoriaTitle = '' } = location.state || {};

  const handleSubcategoriaClick = (subcategoria) => {
    navigate('/escalas/artigos', {
      state: {
        artigos: subcategoria.articles,
        subcategoriaTitle: subcategoria.title,
      },
    });
  };

  return (
    <motion.div
      className="escalas-novo-container"
      initial={{ x: '100%' }}
      animate={{ x: 0 }}
      exit={{ x: '-100%' }}
      transition={{ duration: 0.3 }}
    >
      <header className="escalas-novo-header">
        <button onClick={() => navigate(-1)} className="escalas-back-button" aria-label="Voltar">
          <ArrowLeft size={24} strokeWidth={1.5} />
        </button>
        <h2 className="escalas-novo-page-title">{categoriaTitle}</h2>
        <div className="placeholder" />
      </header>
      <ul className="escalas-novo-list">
        {subcategorias.map((subcategoria) => (
          <li
            className="escalas-novo-item"
            key={subcategoria.id}
            onClick={() => handleSubcategoriaClick(subcategoria)}
          >
            <span className="escalas-novo-title">{subcategoria.title}</span>
            <ChevronRight size={22} strokeWidth={2} />
          </li>
        ))}
      </ul>
    </motion.div>
  );
}
