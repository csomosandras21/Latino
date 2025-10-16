import { useEffect, useState } from 'react';

const Lattafa = ({ lat }) => {

    // let [lattafaItems, setLattafasItems] = useState([]);
    //      let tomb =[]
    //         useEffect(()=>{
    //      for (let i = 0; i < lat.kep.length; i++) {
    //                 tomb.push(<img src = {lat.kep[i]}/>);

    //             }
    //             setLattafasItems(tomb);
    //             }, [])

    return (
    <div className="tartalom-kontener">
        <h1>{lat.nev}</h1>
        <p>{lat.fajta}</p>
        <p>{lat.ar}FT</p>
        <img src={lat.kepek} alt="" />
    </div>
    );
};

export default Lattafa;
