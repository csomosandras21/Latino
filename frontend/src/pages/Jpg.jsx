import { useEffect, useState } from 'react';

const JeanPaul = ({ jean }) => {

const atdob = (id) => {
        window.location.href = `/egyedijpg/${id}`;
    }

    return (
   <div className="tartalom-kontener" key={jean._id} onClick={() => atdob(jean._id)}>
        <h1>{jean.nev}</h1>
        <p>{jean.fajta}</p>
        <p>{jean.ar}FT</p>
        <img src={jean.kep} alt="" />
    </div>
    );
};

export default JeanPaul;
