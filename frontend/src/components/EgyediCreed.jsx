import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

const EgyediCreed = (id) => {
  const params = useParams();
  console.log(params.id);
  let [creedItem, setCreedItem] = useState([]);

  useEffect(() => {
          const szerverrolBetolt = async () => {
              const response = await fetch('http://localhost:3500/api/parfumes-frontend');
              const bejovoAdatok = await response.json();
              
              const adatok = bejovoAdatok.parfumes;
              const creeds = adatok.filter(elem => elem.marka === 'Creed')
              console.log(creeds);
  
              const itemD = creeds.filter(elem => elem._id === params.id);
  
              if (response.ok)
              {
                  console.log(itemD[0]);
                  // for (let i = 0; i < adatok.length; i++) {
                  //     tomb.push(<Dior key={i} dio={adatok[i]} />);
                  // }
          
                  setCreedItem(itemD[0]);
                  
              } 
              else console.log(adatok.msg);
  
          }
  
          szerverrolBetolt();
          
      }, []);
  
  return (
    <div className="tartalom-kontener">
            <h1>{creedItem.nev}</h1>
            <p>{creedItem.fajta}</p>
            <p>{creedItem.ar}FT</p>
            <img src={creedItem.kep} alt="" />
        
        
    </div>
    
  )
}

export default EgyediCreed
