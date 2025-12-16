import { useEffect, useState } from 'react';
import "./Versacce.css"

const Versacce = ({ vers }) => {

const atdob = (id) => {
        window.location.href = `/egyediversacce/${id}`;
    }

    return (
    <div className="versacce-tartalom-kontener" key={vers._id} onClick={() => atdob(vers._id)}>
        <h1>{vers.nev}</h1>
        <p>{vers.fajta}</p>
        <p>{vers.ar}FT</p>
        <img src={vers.kep} alt="" />
    </div>
    );
};

export default Versacce;

