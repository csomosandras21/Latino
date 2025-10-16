import { useEffect, useState } from 'react';

const JeanPaul = ({ jean }) => {

    // let [jeanItems, setJpgsItems] = useState([]);
    //      let tomb =[]
    //         useEffect(()=>{
    //      for (let i = 0; i < jean.kep.length; i++) {
    //                 tomb.push(<img src = {jean.kep[i]}/>);

    //             }
    //             setJpgsItems(tomb);
    //             }, [])


    return (
    <div className="tartalom-kontener">
        <h1>{jean.nev}</h1>
        <p>{jean.fajta}</p>
        <p>{jean.ar}FT</p>
        <img src={jean.kepek} alt="" />
    </div>
    );
};

export default JeanPaul;
