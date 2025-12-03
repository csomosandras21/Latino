import { useEffect, useState } from 'react';
import "./Jpg.css"

const JeanPaul = ({ jean }) => {

const atdob = (id) => {
        window.location.href = `/egyedijpg/${id}`;
    }

    return (
   <div className="jpg-tartalom-kontener" key={jean._id} onClick={() => atdob(jean._id)}>
        <h1>{jean.nev}</h1>
        <p>{jean.fajta}</p>
        <p>{jean.ar}FT</p>
        <img src={jean.kep} alt="" />
    </div>
    );
};

export default JeanPaul;
