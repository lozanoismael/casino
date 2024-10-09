import React, { useState } from 'react';
import axios from 'axios';
import '../App.css';

// Asegúrate de ajustar las rutas a las imágenes según tu estructura de carpetas
import CaritaFeliz from '../images/carita-feliz.png';
import CaritaNeutral from '../images/carita-neutral.png';
import CaritaEnojada from '../images/carita-enojada.png';

const RatingSystem = () => {
  const [mood, setMood] = useState('');
  const [category, setCategory] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleMoodSelect = (selectedMood) => {
    setMood(selectedMood);
  };

  const handleCategorySelect = (selectedCategory) => {
    setCategory(selectedCategory);
  };

  const handleSubmit = async () => {
    if (mood && category) {
      try {
        await axios.post('http://localhost:3000/api/ratings', {
          mood,
          category
        });
        setSubmitted(true);
      } catch (error) {
        console.error('Error al enviar los datos', error);
      }
    }
  };

  return (
    <div className="App">
      {submitted ? (
        <h2>¡Muchas gracias por su votación!</h2>
      ) : (
        <>
          <h1>Seleccione su estado de ánimo:</h1>
          <div className="button-container">
            <button onClick={() => handleMoodSelect('feliz')}>
              <img src={CaritaFeliz} alt="Carita Feliz" />
            </button>
            <button onClick={() => handleMoodSelect('neutral')}>
              <img src={CaritaNeutral} alt="Carita Neutral" />
            </button>
            <button onClick={() => handleMoodSelect('enojado')}>
              <img src={CaritaEnojada} alt="Carita Enojada" />
            </button>
          </div>

          {mood && (
            <>
              <h2>¿Sobre qué es su valoración?</h2>
              <div className="button-container">
                <button onClick={() => handleCategorySelect('Restaurante')}>Restaurante</button>
                <button onClick={() => handleCategorySelect('Tragamonedas')}>Tragamonedas</button>
                <button onClick={() => handleCategorySelect('RRHH')}>Servicios RRHH</button>
              </div>
            </>
          )}

          {category && (
            <button className="submit-button" onClick={handleSubmit}>Enviar</button>
          )}
        </>
      )}
    </div>
  );
};

export default RatingSystem;
