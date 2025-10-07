import { useEffect, useState } from 'react';

const Gucci = ({ gu }) => {

    let [gucciItems, setGuccisItems] = useState([]);
         let tomb =[]
            useEffect(()=>{
         for (let i = 0; i < gu.kep.length; i++) {
                    tomb.push(<img src = {gu.kep[i]}/>);

                }
                setGuccisItems(tomb);
                }, [])

    return (
    <div className="tartalom-kontener">
        <h1>{gu.cim}</h1>
        <p>{gu.tartalom}</p>
        <div className="parfum-kep-kontener"> {gucciItems}</div>
    </div>
    );
};

export default Gucci;
