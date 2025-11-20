import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

const EgyediGucci = (id) => {
  const params = useParams();
  console.log(params.id);
  let [gucciItem, setGucciItem] = useState([]);

  useEffect(() => {
          const szerverrolBetolt = async () => {
              const response = await fetch('http://localhost:3500/api/parfumes-frontend');
              const bejovoAdatok = await response.json();
              
              const adatok = bejovoAdatok.parfumes;
              const guccis = adatok.filter(elem => elem.marka === 'Gucci')
              console.log(guccis);
  
              const itemD = guccis.filter(elem => elem._id === params.id);
  
              if (response.ok)
              {
                  console.log(itemD[0]);
                  // for (let i = 0; i < adatok.length; i++) {
                  //     tomb.push(<Dior key={i} dio={adatok[i]} />);
                  // }
          
                  setGucciItem(itemD[0]);
                  
              } 
              else console.log(adatok.msg);
  
          }
  
          szerverrolBetolt();
          
      }, []);
  
  return (
    <div className="tartalom-kontener">
            <h1>{gucciItem.nev}</h1>
            <p>{gucciItem.fajta}</p>
            <p>{gucciItem.ar}FT</p>
            <img src={gucciItem.kep} alt="" />
        
        
    </div>
    
  )
}

export default EgyediGucci