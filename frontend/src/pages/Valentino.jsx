import { useEffect, useState } from 'react';

const Valentino = ({ val }) => {

    const atdob = (id) => {
        window.location.href = `/egyedivalentino/${id}`;
    }

    return (
    <div className="tartalom-kontener" key={val._id} onClick={() => atdob(val._id)}>
        <h1>{val.nev}</h1>
        <p>{val.fajta}</p>
        <p>{val.ar}FT</p>
        <img src={val.kep} alt="" />
    </div>
    );
};

export default Valentino;
