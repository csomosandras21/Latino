import { useEffect, useState } from 'react';

const Dolce = ({ dol }) => {

const atdob = (id) => {
        window.location.href = `/egyedidg/${id}`;
    }
    return (
    <div className="tartalom-kontener" key={dol._id} onClick={() => atdob(dol._id)}>
        <h1>{dol.nev}</h1>
        <p>{dol.fajta}</p>
        <p>{dol.ar}FT</p>
        <img src={dol.kep} alt="" />
    </div>
    );
};

export default Dolce;
