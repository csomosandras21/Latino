import { useEffect, useState } from 'react';

const Dior = ({ dio }) => {

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
        <h1>{dio.nev}</h1>
        <p>{dio.fajta}</p>
        <img src={dio.kepek} alt="" />
    </div>
    );
};

export default Dior;
