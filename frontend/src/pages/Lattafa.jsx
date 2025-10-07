import { useEffect, useState } from 'react';

const Lattafa = ({ lat }) => {

    let [lattafaItems, setLattafasItems] = useState([]);
         let tomb =[]
            useEffect(()=>{
         for (let i = 0; i < lat.kep.length; i++) {
                    tomb.push(<img src = {lat.kep[i]}/>);

                }
                setLattafasItems(tomb);
                }, [])

    return (
    <div className="tartalom-kontener">
        <h1>{lat.cim}</h1>
        <p>{lat.tartalom}</p>
        <div className="parfum-kep-kontener"> {lattafaItems}</div>
    </div>
    );
};

export default Lattafa;
