import { useEffect, useState } from 'react';
import "./Armani.css"



const Armani = ({ armani }) => {

const atdob = (id) => {
        window.location.href = `/egyediarmani/${id}`;
        
    }
    return (
    <div className="armani-tartalom-kontener"onClick={() => atdob(armani._id)} >
    
        <h1>{armani.nev}</h1>
        <p>{armani.fajta}</p>
       <p>{armani.ar}FT</p>
       <img src={armani.kep} alt="" />

    </div>
    );
};

export default Armani;