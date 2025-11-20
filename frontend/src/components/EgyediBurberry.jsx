import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

const EgyediBurberry = (id) => {
  const params = useParams();
  console.log(params.id);
  let [burberryItem, setBurberryItem] = useState([]);

  useEffect(() => {
          const szerverrolBetolt = async () => {
              const response = await fetch('http://localhost:3500/api/parfumes-frontend');
              const bejovoAdatok = await response.json();
              
              const adatok = bejovoAdatok.parfumes;
              const burberrys = adatok.filter(elem => elem.marka === 'Burberry')
              console.log(burberrys);
  
              const itemD = burberrys.filter(elem => elem._id === params.id);
  
              if (response.ok)
              {
                  console.log(itemD[0]);
                  // for (let i = 0; i < adatok.length; i++) {
                  //     tomb.push(<Dior key={i} dio={adatok[i]} />);
                  // }
          
                  setBurberryItem(itemD[0]);
                  
              } 
              else console.log(adatok.msg);
  
          }
  
          szerverrolBetolt();
          
      }, []);
  
  return (
    <div className="tartalom-kontener">
            <h1>{burberryItem.nev}</h1>
            <p>{burberryItem.fajta}</p>
            <p>{burberryItem.ar}FT</p>
            <img src={burberryItem.kep} alt="" />
        
        
    </div>
    
  )
}

export default EgyediBurberry