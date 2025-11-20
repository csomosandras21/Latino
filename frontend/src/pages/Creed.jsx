import { useEffect, useState } from 'react';

const Creed = ({ creed }) => {

   
const atdob = (id) => {
        window.location.href = `/egyedicreed/${id}`;
    }
    return (
    <div className="tartalom-kontener" key={creed._id} onClick={() => atdob(creed._id)}>
        <h1>{creed.nev}</h1>
        <p>{creed.fajta}</p>
        <p>{creed.ar}FT</p>
        <img src={creed.kep} alt="" />
    </div>
    );
};

export default Creed;
