import { useEffect, useState } from 'react';

const Burberry = ({ bur }) => {

    // let [burberryItems, setBurberrysItems] = useState([]);
    //      let tomb =[]
    //         useEffect(()=>{
    //      for (let i = 0; i < bur.kep.length; i++) {
    //                 tomb.push(<img src = {bur.kep[i]}/>);

    //             }
    //             setBurberrysItems(tomb);
    //             }, [])

    return (
    <div className="tartalom-kontener">
        <h1>{bur.nev}</h1>
        <p>{bur.fajta}</p>
        <p>{bur.ar}FT</p>
        <img src={bur.kepek} alt="" />
    </div>
    );
};

export default Burberry;
