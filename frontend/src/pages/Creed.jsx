import { useEffect, useState } from 'react';

const Creed = ({ cre }) => {

    let [creedItems, setCreedsItems] = useState([]);
         let tomb =[]
            useEffect(()=>{
         for (let i = 0; i < cre.kep.length; i++) {
                    tomb.push(<img src = {cre.kep[i]}/>);

                }
                setCreedsItems(tomb);
                }, [])

    return (
    <div className="tartalom-kontener">
        <h1>{cre.cim}</h1>
        <p>{cre.tartalom}</p>
        <div className="parfum-kep-kontener"> {creedItems}</div>
    </div>
    );
};

export default Creed;
