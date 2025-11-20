import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Dior = ({ dio }) => {
    
    const atdob = (id) => {
        window.location.href = `/egyedidior/${id}`;
    }

    return (
    <div className="tartalom-kontener" key={dio._id} onClick={() => atdob(dio._id)}>
            <h1>{dio.nev}</h1>
            <p>{dio.fajta}</p>
            <p>{dio.ar}FT</p>
            <img src={dio.kep} alt="" />
        
        
    </div>
    );
};

export default Dior;
