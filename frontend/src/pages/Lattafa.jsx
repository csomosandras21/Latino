import { useEffect, useState } from 'react';

const Lattafa = ({ lat }) => {

    const atdob = (id) => {
        window.location.href = `/egyedilattafa/${id}`;
    }

    return (
    <div className="tartalom-kontener" key={lat._id} onClick={() => atdob(lat._id)}>
        <h1>{lat.nev}</h1>
        <p>{lat.fajta}</p>
        <p>{lat.ar}FT</p>
        <img src={lat.kep} alt="" />
    </div>
    );
};

export default Lattafa;
