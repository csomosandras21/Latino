import { useEffect, useState } from 'react';

const Valentino = ({ val }) => {

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
        <h1>{val.nev}</h1>
        <p>{val.fajta}</p>
        <p>{val.ar}FT</p>
        <img src={val.kepek} alt="" />
    </div>
    );
};

export default Valentino;
