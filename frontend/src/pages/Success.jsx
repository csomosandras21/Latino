import React from 'react'
import './Success.css'

const Success = () => {
            localStorage.removeItem('kosar');
            localStorage.removeItem('darabszam');
            localStorage.removeItem('kosarszamlalo');
    return (
    <div>
 
   <div className="status-container">
      <div className="status-card">
        <div className="icon-wrapper">
          <span className="check-mark">✓</span>
        </div>
        
        <h1 className="status-title">Köszönjük a rendelést!</h1>
        
        <p className="status-message">
          A fizetés sikeresen megtörtént. Az eladó hamarosan felveszi Önnel a kapcsolatot.
        </p>
        
        <button className="status-button success-bg" onClick={() => window.location.href = '/'}>
          Vissza a főoldalra
        </button>
      </div>
    </div>

    </div>
  )
}

export default Success
