import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

const EgyediArmani = (id) => {
  const params = useParams();
  console.log(params.id);
  let [armaniItem, setArmaniItem] = useState([]);

  useEffect(() => {
          const szerverrolBetolt = async () => {
              const response = await fetch('http://localhost:3500/api/parfumes-frontend');
              const bejovoAdatok = await response.json();
              
              const adatok = bejovoAdatok.parfumes;
              const armanis = adatok.filter(elem => elem.marka === 'Armani')
              console.log(armanis);
  
              const itemA = armanis.filter(elem => elem._id === params.id);
  
              if (response.ok)
              {
                  console.log(itemA[0]);
                  // for (let i = 0; i < adatok.length; i++) {
                  //     tomb.push(<Dior key={i} dio={adatok[i]} />);
                  // }
          
                  setArmaniItem(itemA[0]);
                  
              } 
              else console.log(adatok.msg);
  
          }
  
          szerverrolBetolt();
          
      }, []);
  
  return (
    <div className="tartalom-kontener">
            <h1>{armaniItem.nev}</h1>
            <p>{armaniItem.fajta}</p>
            <p>{armaniItem.ar}FT</p>
            <img src={armaniItem.kep} alt="" />
        
        
    </div>
    
  )
}

export default EgyediArmani