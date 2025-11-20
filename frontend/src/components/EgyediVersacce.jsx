import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

const EgyediVersacce = (id) => {
  const params = useParams();
  console.log(params.id);
  let [versItem, setVersItem] = useState([]);

  useEffect(() => {
          const szerverrolBetolt = async () => {
              const response = await fetch('http://localhost:3500/api/parfumes-frontend');
              const bejovoAdatok = await response.json();
              
              const adatok = bejovoAdatok.parfumes;
              const versacces = adatok.filter(elem => elem.marka === 'Versace')
              console.log(versacces);
  
              const itemD = versacces.filter(elem => elem._id === params.id);
  
              if (response.ok)
              {
                  console.log(itemD[0]);
                  // for (let i = 0; i < adatok.length; i++) {
                  //     tomb.push(<Dior key={i} dio={adatok[i]} />);
                  // }
          
                  setVersItem(itemD[0]);
                  
              } 
              else console.log(adatok.msg);
  
          }
  
          szerverrolBetolt();
          
      }, []);
  
  return (
    <div className="tartalom-kontener">
            <h1>{versItem.nev}</h1>
            <p>{versItem.fajta}</p>
            <p>{versItem.ar}FT</p>
            <img src={versItem.kep} alt="" />
        
        
    </div>
    
  )
}

export default EgyediVersacce