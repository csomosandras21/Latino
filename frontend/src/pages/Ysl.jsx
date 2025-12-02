import { useEffect, useState } from 'react';
import './Parfumok.css'


const Ysl = ({ ysl }) => {

    const atdob = (id) => {
        window.location.href = `/egyediysl/${id}`;
    }

    return (
       <div className="tartalom-kontener" key={ysl._id} onClick={() => atdob(ysl._id)}>
            <h1>{ysl.nev}</h1>
              <p>{ysl.fajta}</p>
              <p>{ysl.ar}FT</p>
               <img src={ysl.kep} alt="" />
       </div>
    );
};

export default Ysl;