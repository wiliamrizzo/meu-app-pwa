import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { motion } from 'framer-motion';
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
    <motion.div
      className="escalas-container"
      initial={{ x: '100%' }}
      animate={{ x: 0 }}
      exit={{ x: '-100%' }}
      transition={{ duration: 0.3 }}
    >
      <header className="escalas-header">
        <button
          onClick={() => navigate('/')}
          className="escalas-back-button"
          aria-label="Voltar para Home"
        >
          <ArrowLeft size={24} strokeWidth={1.5} />
        </button>
        <h2 className="escalas-title">Escalas</h2>
        <div className="placeholder" />
      </header>

      <div className="escalas-list">
        {categorias.map((categoria) => (
          <div
            key={categoria.attributes.id}
            className="escalas-item"
            onClick={() =>
              navigate('/escalas/subcategorias', {
                state: {
                  subcategorias: categoria.attributes.subcategories,
                  categoriaTitle: categoria.attributes.title,
                }
              })
            }
          >
            <h3>{categoria.attributes.title}</h3>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
