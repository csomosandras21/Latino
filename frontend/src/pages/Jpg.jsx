import { useEffect, useState } from 'react';

const JeanPaul = ({ jean }) => {

    let [jeanItems, setJpgsItems] = useState([]);
         let tomb =[]
            useEffect(()=>{
         for (let i = 0; i < jean.kep.length; i++) {
                    tomb.push(<img src = {jean.kep[i]}/>);

                }
                setJpgsItems(tomb);
                }, [])

    return (
    <div className="tartalom-kontener">
        <h1>{jean.cim}</h1>
        <p>{jean.tartalom}</p>
        <div className="parfum-kep-kontener"> {jeanItems}</div>
    </div>
    );
};

export default JeanPaul;
