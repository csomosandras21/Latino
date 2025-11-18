import { useEffect, useState } from 'react';

const Dior = ({ dio }) => {


    return (
    <div className="tartalom-kontener">
            <h1>{dio.nev}</h1>
            <p>{dio.fajta}</p>
            <p>{dio.ar}FT</p>
            <img src={dio.kep} alt="" />
        
    </div>
    );
};

export default Dior;
