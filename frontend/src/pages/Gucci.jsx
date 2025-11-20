import { useEffect, useState } from 'react';

const Gucci = ({ gu }) => {


    const atdob = (id) => {
         window.location.href = `/egyedigucci/${id}`;
    }
    return (
    <div className="tartalom-kontener" key={gu._id} onClick={() => atdob(gu._id)}>
        <h1>{gu.nev}</h1>
        <p>{gu.fajta}</p>
        <p>{gu.ar}FT</p>
        <img src={gu.kep} alt="" />
    </div>
    );
};

export default Gucci;
