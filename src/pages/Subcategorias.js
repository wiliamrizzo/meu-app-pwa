import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { motion } from 'framer-motion';
import './Escalas.css';

export default function Subcategorias() {
  const navigate = useNavigate();
  const location = useLocation();
  const { subcategorias = [], categoriaTitle = '' } = location.state || {};

  const handleSubcategoriaClick = (subcategoria) => {
    navigate('/artigos', {
      state: {
        artigos: subcategoria.articles,
        subcategoriaTitle: subcategoria.title,
      },
    });
  };

  return (
    <motion.div
      className="escalas-container"
      initial={{ x: '100%' }}
      animate={{ x: 0 }}
      exit={{ x: '-100%' }}
      transition={{ duration: 0.3 }}
    >
      <header className="escalas-header">
        <button onClick={() => navigate(-1)} className="escalas-back-button">
          <ArrowLeft size={24} strokeWidth={1.5} />
        </button>
        <h2 className="escalas-title">{categoriaTitle}</h2>
        <div className="placeholder" />
      </header>

      <div className="escalas-list">
        {subcategorias.map((subcategoria) => (
          <div
            key={subcategoria.id}
            className="escalas-item"
            onClick={() => handleSubcategoriaClick(subcategoria)}
          >
            <h3>{subcategoria.title}</h3>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
