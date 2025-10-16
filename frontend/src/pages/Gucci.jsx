import { useEffect, useState } from 'react';

const Gucci = ({ gu }) => {

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
        <h1>{gu.nev}</h1>
        <p>{gu.fajta}</p>
        <p>{gu.ar}FT</p>
        <img src={gu.kepek} alt="" />
    </div>
    );
};

export default Gucci;
