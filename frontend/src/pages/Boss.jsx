import { useEffect, useState } from 'react';

const Boss = ({ boss }) => {

    // let [ylsItems, setYslsItems] = useState([]);
    //      let tomb =[]
    //         useEffect(()=>{
    //      for (let i = 0; i < ysl.kep.length; i++) {
    //                 tomb.push(<img src = {ysl.kep[i]}/>);

    //             }
    //             setVersaccesItems(tomb);
    //             }, [])

    return (
    <div className="tartalom-kontener">
        <h1>{boss.nev}</h1>
        <p>{boss.fajta}</p>
       <p>{boss.ar}FT</p>
       <img src={boss.kepek} alt="" />

    </div>
    );
};

export default Boss;