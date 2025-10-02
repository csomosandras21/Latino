import { useEffect, useState } from 'react';

const Valentino = ({ val }) => {

    let [valentinoItems, setValentinosItems] = useState([]);
         let tomb =[]
            useEffect(()=>{
         for (let i = 0; i < val.kep.length; i++) {
                    tomb.push(<img src = {val.kep[i]}/>);

                }
                setValentinosItems(tomb);
                }, [])

    return (
    <div className="tartalom-kontener">
        <h1>{val.cim}</h1>
        <p>{val.tartalom}</p>
        <div className="parfum-kep-kontener"> {valentinoItems}</div>
    </div>
    );
};

export default Valentino;
