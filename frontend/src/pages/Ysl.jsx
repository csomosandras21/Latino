import { useEffect, useState } from 'react';
import './Parfumok.css'

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
    <div className=".grid-container">   
       <div className="tartalom-kontener">
            <h1>{ysl.nev}</h1>
              <p>{ysl.fajta}</p>
              <p>{ysl.ar}FT</p>
               <img src={ysl.kep} alt="" />
       </div>
    </div>
    );
};

export default Ysl;