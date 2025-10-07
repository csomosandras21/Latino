import { useEffect, useState } from 'react';

const Dolce = ({ dol }) => {

    let [dolceItems, setDolcesItems] = useState([]);
         let tomb =[]
            useEffect(()=>{
         for (let i = 0; i < dol.kep.length; i++) {
                    tomb.push(<img src = {dol.kep[i]}/>);

                }
                setDolcesItems(tomb);
                }, [])

    return (
    <div className="tartalom-kontener">
        <h1>{dol.cim}</h1>
        <p>{dol.tartalom}</p>
        <div className="parfum-kep-kontener"> {dolceItems}</div>
    </div>
    );
};

export default Dolce;
