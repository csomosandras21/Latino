import { useEffect, useState } from 'react';

const Burberry = ({ bur }) => {

    let [burberryItems, setBurberrysItems] = useState([]);
         let tomb =[]
            useEffect(()=>{
         for (let i = 0; i < bur.kep.length; i++) {
                    tomb.push(<img src = {bur.kep[i]}/>);

                }
                setBurberrysItems(tomb);
                }, [])

    return (
    <div className="tartalom-kontener">
        <h1>{bur.cim}</h1>
        <p>{bur.tartalom}</p>
        <div className="parfum-kep-kontener"> {burberryItems}</div>
    </div>
    );
};

export default Burberry;
