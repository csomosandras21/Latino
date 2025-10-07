import { useEffect, useState } from 'react';

const Boss = ({ boss }) => {

    let [BossItems, setBossesItems] = useState([]);
         let tomb =[]
            useEffect(()=>{
         for (let i = 0; i < boss.kep.length; i++) {
                    tomb.push(<img src = {boss.kep[i]}/>);

                }
                setBossesItems(tomb);
                }, [])

    return (
    <div className="tartalom-kontener">
        <h1>{boss.cim}</h1>
        <p>{boss.tartalom}</p>
        <div className="parfum-kep-kontener"> {bossItems}</div>
    </div>
    );
};

export default Boss;
