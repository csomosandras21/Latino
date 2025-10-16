import { useEffect, useState } from 'react';

const Creed = ({ creed }) => {

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
        <h1>{creed.nev}</h1>
        <p>{creed.fajta}</p>
        <p>{creed.ar}FT</p>
        <img src={creed.kepek} alt="" />
    </div>
    );
};

export default Creed;
