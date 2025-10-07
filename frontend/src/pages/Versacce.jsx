import { useEffect, useState } from 'react';

const Versacce = ({ ver }) => {

    let [versacceItems, setVersaccesItems] = useState([]);
         let tomb =[]
            useEffect(()=>{
         for (let i = 0; i < ver.kep.length; i++) {
                    tomb.push(<img src = {ver.kep[i]}/>);

                }
                setVersaccesItems(tomb);
                }, [])

    return (
    <div className="tartalom-kontener">
        <h1>{ver.cim}</h1>
        <p>{ver.tartalom}</p>
        <div className="parfum-kep-kontener"> {versacceItems}</div>
    </div>
    );
};

export default Versacce;
