import { useEffect, useState } from 'react';

const Ysl = ({ ysl }) => {

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
        <h1>{ysl.nev}</h1>
        <p>{ysl.fajta}</p>
       <img src={ysl.kepek} alt="" />
    </div>
    );
};

export default Ysl;