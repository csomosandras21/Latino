import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

const EgyediYsl = (id) => {
  const params = useParams();
  console.log(params.id);
  let [yslItem, setYslItem] = useState([]);

  useEffect(() => {
          const szerverrolBetolt = async () => {
              const response = await fetch('http://localhost:3500/api/parfumes-frontend');
              const bejovoAdatok = await response.json();
              
              const adatok = bejovoAdatok.parfumes;
              const ysls = adatok.filter(elem => elem.marka === 'YSL Saint Laurent')
              console.log(ysls);
  
              const itemD = ysls.filter(elem => elem._id === params.id);
  
              if (response.ok)
              {
                  console.log(itemD[0]);
                  // for (let i = 0; i < adatok.length; i++) {
                  //     tomb.push(<Dior key={i} dio={adatok[i]} />);
                  // }
          
                  setYslItem(itemD[0]);
                  
              } 
              else console.log(adatok.msg);
  
          }
  
          szerverrolBetolt();
          
      }, []);
  
  return (
    <div className="tartalom-kontener">
            <h1>{yslItem.nev}</h1>
            <p>{yslItem.fajta}</p>
            <p>{yslItem.ar}FT</p>
            <img src={yslItem.kep} alt="" />
        
        
    </div>
    
  )
}

export default EgyediYsl