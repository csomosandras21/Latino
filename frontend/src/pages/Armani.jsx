import { useEffect, useState } from 'react';

const Armani = ({ armani }) => {

    let [ArmaniItems, setArmanisItems] = useState([]);
         let tomb =[]
            useEffect(()=>{
         for (let i = 0; i < armani.kep.length; i++) {
                    tomb.push(<img src = {armani.kep[i]}/>);

                }
                setArmanisItems(tomb);
                }, [])

    return (
    <div className="tartalom-kontener">
        <h1>{armani.cim}</h1>
        <p>{armani.tartalom}</p>
        <div className="parfum-kep-kontener"> {armaniItems}</div>
    </div>
    );
};

export default Armani;
