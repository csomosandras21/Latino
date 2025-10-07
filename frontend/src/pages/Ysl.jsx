import { useEffect, useState } from 'react';

const Ysl = ({ ysl }) => {

    let [ylsItems, setYslsItems] = useState([]);
         let tomb =[]
            useEffect(()=>{
         for (let i = 0; i < ysl.kep.length; i++) {
                    tomb.push(<img src = {ysl.kep[i]}/>);

                }
                setVersaccesItems(tomb);
                }, [])

    return (
    <div className="tartalom-kontener">
        <h1>{ysl.cim}</h1>
        <p>{ysl.tartalom}</p>
        <div className="parfum-kep-kontener"> {yslItems}</div>
    </div>
    );
};

export default Ysl;