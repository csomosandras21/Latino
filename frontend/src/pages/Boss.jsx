import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Boss = ({ boss }) => {

    const atdob = (id) => {
        window.location.href = `/egyediboss/${id}`;
    }

    return (
    <div className="tartalom-kontener" key={boss._id} onClick={() => atdob(boss._id)}>
        <h1>{boss.nev}</h1>
        <p>{boss.fajta}</p>
       <p>{boss.ar}FT</p>
       <img src={boss.kep} alt="" />


    </div>
    );
};

export default Boss;
