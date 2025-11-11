import { useEffect, useState } from 'react';

const Dolce = ({ dol }) => {

    // let [diorItems, setDiorsItems] = useState([]);
    //      let tomb =[]
    //         useEffect(()=>{
    //      for (let i = 0; i < dio.kep.length; i++) {
    //                 tomb.push(<img src = {dio.kep[i]}/>);

    //             }
    //             setDiorsItems(tomb);
    //             }, [])

    return (
    <div className="tartalom-kontener">
        <h1>{dol.nev}</h1>
        <p>{dol.fajta}</p>
        <p>{dol.ar}FT</p>
        <img src={dol.kep} alt="" />
    </div>
    );
};

export default Dolce;
