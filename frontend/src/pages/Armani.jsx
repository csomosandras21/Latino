import { useEffect, useState } from 'react';

const Armani = ({ armani }) => {

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
        <h1>{armani.nev}</h1>
        <p>{armani.fajta}</p>
       <p>{armani.ar}FT</p>
       <img src={armani.kepek} alt="" />

    </div>
    );
};

export default Armani;