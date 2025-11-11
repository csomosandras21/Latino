import { useEffect, useState } from 'react';

const Versacce = ({ vers }) => {

    // let [valentinoItems, setValentinosItems] = useState([]);
    //      let tomb =[]
    //         useEffect(()=>{
    //      for (let i = 0; i < val.kep.length; i++) {
    //                 tomb.push(<img src = {val.kep[i]}/>);

    //             }
    //             setValentinosItems(tomb);
    //             }, [])

    return (
    <div className="tartalom-kontener">
        <h1>{vers.nev}</h1>
        <p>{vers.fajta}</p>
        <p>{vers.ar}FT</p>
        <img src={vers.kep} alt="" />
    </div>
    );
};

export default Versacce;

