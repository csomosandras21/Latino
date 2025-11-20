import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

const EgyediBoss = (id) => {
  const params = useParams();
  console.log(params.id);
  let [bossItem, setBossItem] = useState([]);

  useEffect(() => {
          const szerverrolBetolt = async () => {
              const response = await fetch('http://localhost:3500/api/parfumes-frontend');
              const bejovoAdatok = await response.json();
              
              const adatok = bejovoAdatok.parfumes;
              const bosses = adatok.filter(elem => elem.marka === 'Boss')
              console.log(bosses);
  
              const itemD = bosses.filter(elem => elem._id === params.id);
  
              if (response.ok)
              {
                  console.log(itemD[0]);
                  // for (let i = 0; i < adatok.length; i++) {
                  //     tomb.push(<Dior key={i} dio={adatok[i]} />);
                  // }
          
                  setBossItem(itemD[0]);
                  
              } 
              else console.log(adatok.msg);
  
          }
  
          szerverrolBetolt();
          
      }, []);
  
  return (
    <div className="tartalom-kontener">
            <h1>{bossItem.nev}</h1>
            <p>{bossItem.fajta}</p>
            <p>{bossItem.ar}FT</p>
            <img src={bossItem.kep} alt="" />
        
        
    </div>
    
  )
}

export default EgyediBoss