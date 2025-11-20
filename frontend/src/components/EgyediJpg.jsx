import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

const EgyediJpg = (id) => {
  const params = useParams();
  console.log(params.id);
  let [jpgItem, setJpgItem] = useState([]);

  useEffect(() => {
          const szerverrolBetolt = async () => {
              const response = await fetch('http://localhost:3500/api/parfumes-frontend');
              const bejovoAdatok = await response.json();
              
              const adatok = bejovoAdatok.parfumes;
              const jpgs = adatok.filter(elem => elem.marka === 'Jean Paul')
              console.log(jpgs);
  
              const itemD = jpgs.filter(elem => elem._id === params.id);
  
              if (response.ok)
              {
                  console.log(itemD[0]);
                  // for (let i = 0; i < adatok.length; i++) {
                  //     tomb.push(<Dior key={i} dio={adatok[i]} />);
                  // }
          
                  setJpgItem(itemD[0]);
                  
              } 
              else console.log(adatok.msg);
  
          }
  
          szerverrolBetolt();
          
      }, []);
  
  return (
    <div className="tartalom-kontener">
            <h1>{jpgItem.nev}</h1>
            <p>{jpgItem.fajta}</p>
            <p>{jpgItem.ar}FT</p>
            <img src={jpgItem.kep} alt="" />
        
        
    </div>
    
  )
}

export default EgyediJpg