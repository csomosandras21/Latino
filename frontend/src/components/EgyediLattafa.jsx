import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

const EgyediLattafa = (id) => {
  const params = useParams();
  console.log(params.id);
  let [lattafaItem, setLattafaItem] = useState([]);

  useEffect(() => {
          const szerverrolBetolt = async () => {
              const response = await fetch('http://localhost:3500/api/parfumes-frontend');
              const bejovoAdatok = await response.json();
              
              const adatok = bejovoAdatok.parfumes;
              const lattafas = adatok.filter(elem => elem.marka === 'Lattafa')
              console.log(lattafas);
  
              const itemD = lattafas.filter(elem => elem._id === params.id);
  
              if (response.ok)
              {
                  console.log(itemD[0]);
                  // for (let i = 0; i < adatok.length; i++) {
                  //     tomb.push(<Dior key={i} dio={adatok[i]} />);
                  // }
          
                  setLattafaItem(itemD[0]);
                  
              } 
              else console.log(adatok.msg);
  
          }
  
          szerverrolBetolt();
          
      }, []);
  
  return (
    <div className="tartalom-kontener">
            <h1>{lattafaItem.nev}</h1>
            <p>{lattafaItem.fajta}</p>
            <p>{lattafaItem.ar}FT</p>
            <img src={lattafaItem.kep} alt="" />
        
        
    </div>
    
  )
}

export default EgyediLattafa