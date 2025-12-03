import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import "./Dior.css"

const Dior = ({ dio }) => {
    
    const atdob = (id) => {
        window.location.href = `/egyedidior/${id}`;
    }

    return (
    <div className="dior-tartalom-kontener" key={dio._id} onClick={() => atdob(dio._id)}>
            <h1>{dio.nev}</h1>
            <p>{dio.fajta}</p>
            <p>{dio.ar}FT</p>
            <img src={dio.kep} alt="" />
        
        
    </div>
    );
};

export default Dior;
