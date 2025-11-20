import { useEffect, useState } from 'react';

const Burberry = ({ bur }) => {

    const atdob = (id) => {
        window.location.href = `/egyediburberry/${id}`;
    }

    return (
    <div className="tartalom-kontener" key={bur._id} onClick={() => atdob(bur._id)}>
        <h1>{bur.nev}</h1>
        <p>{bur.fajta}</p>
        <p>{bur.ar}FT</p>
        <img src={bur.kep} alt="" />
    </div>
    );
};

export default Burberry;
