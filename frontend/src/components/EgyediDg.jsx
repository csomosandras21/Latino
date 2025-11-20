import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

const EgyediDg = (id) => {
  const params = useParams();
  console.log(params.id);
  let [dgItem, setDgItem] = useState([]);

  useEffect(() => {
          const szerverrolBetolt = async () => {
              const response = await fetch('http://localhost:3500/api/parfumes-frontend');
              const bejovoAdatok = await response.json();
              
              const adatok = bejovoAdatok.parfumes;
              const dgs = adatok.filter(elem => elem.marka === 'Dolce & Gabbana')
              console.log(dgs);
  
              const itemD = dgs.filter(elem => elem._id === params.id);
  
              if (response.ok)
              {
                  console.log(itemD[0]);
                  // for (let i = 0; i < adatok.length; i++) {
                  //     tomb.push(<Dior key={i} dio={adatok[i]} />);
                  // }
          
                  setDgItem(itemD[0]);
                  
              } 
              else console.log(adatok.msg);
  
          }
  
          szerverrolBetolt();
          
      }, []);
  
  return (
    <div className="tartalom-kontener">
            <h1>{dgItem.nev}</h1>
            <p>{dgItem.fajta}</p>
            <p>{dgItem.ar}FT</p>
            <img src={dgItem.kep} alt="" />
        
        
    </div>
    
  )
}

export default EgyediDg