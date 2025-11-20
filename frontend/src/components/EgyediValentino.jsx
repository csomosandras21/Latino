import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

const EgyediValentino = (id) => {
  const params = useParams();
  console.log(params.id);
  let [valentinoItem, setValentinoItem] = useState([]);

  useEffect(() => {
          const szerverrolBetolt = async () => {
              const response = await fetch('http://localhost:3500/api/parfumes-frontend');
              const bejovoAdatok = await response.json();
              
              const adatok = bejovoAdatok.parfumes;
              const valentinos = adatok.filter(elem => elem.marka === 'Valentino')
              console.log(valentinos);
  
              const itemD = valentinos.filter(elem => elem._id === params.id);
  
              if (response.ok)
              {
                  console.log(itemD[0]);
                  // for (let i = 0; i < adatok.length; i++) {
                  //     tomb.push(<Dior key={i} dio={adatok[i]} />);
                  // }
          
                  setValentinoItem(itemD[0]);
                  
              } 
              else console.log(adatok.msg);
  
          }
  
          szerverrolBetolt();
          
      }, []);
  
  return (
    <div className="tartalom-kontener">
            <h1>{valentinoItem.nev}</h1>
            <p>{valentinoItem.fajta}</p>
            <p>{valentinoItem.ar}FT</p>
            <img src={valentinoItem.kep} alt="" />
        
        
    </div>
    
  )
}

export default EgyediValentino