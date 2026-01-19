import React from 'react';
import './Cancel.css';

const Cancel = () => {
  return (
    <div className="cancel-container">
      <div className="cancel-card">
        <div className="icon-circle-red">
          <span className="x-icon">✕</span>
        </div>
        
        <h2>Sikertelen fizetés</h2>
        
        <p>
          Sajnos nem sikerült feldolgozni a tranzakciót. 
          Kérjük, próbálja meg újra, vagy lépjen kapcsolatba az ügyfélszolgálattal.
        </p>
        
        <button className="back-button" onClick={() => window.location.href = '/'}>
          Vissza a főoldalra
        </button>
      </div>
    </div>
  );
};

export default Cancel;