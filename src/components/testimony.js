import React from "react";
import '../styles/Testimony.css';

function Testimony(){
  return (
    <div className='testimony-container'>
      <img 
        className='testimony-image'
        src={require('../images/emma-testimony.png')}
        alt="Emma's Photo"
      />
      <div className="testimony-text-container">
        <p className="testimony-name">Emma Bostian en Suecia</p>
        <p className="testimony-position">Ingeniera de Sofware en Spotify</p>
        <p className="testimony-text">"Siempre he tenido problemas para aprender JavaScript. He tomado muchos cursos, pero el curso de freeCodeCamp fue el que se quedó. Estudiar JavaScript, así como estructuras de datos y algoritmos en freeCodeCamp me dio las habilidades y la confianza que necesitaba para conseguir el trabajo de mis sueños como ingeniero de software en Spotify."</p>
      </div>
    </div>
  );
}

export default Testimony;