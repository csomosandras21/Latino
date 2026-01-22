import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState, createContext } from 'react'
import Home from './pages/Home'
import Accaunt from './pages/Accaunt'
import Diors from './pages/Diors'
import Navbar from './pages/Navbar';
import Footer from './components/Footer';
import Valentinos from './pages/Valentinos';
import Jpgs from './pages/Jpgs';
import Bosses from './pages/Bosses';
import Versacces from './pages/Versacces';
import Creeds from './pages/Creeds';
import Dgs from './pages/Dgs';
import Guccis from './pages/Guccis';
import Burberrys from './pages/Burberrys';
import Armani from './pages/Armanis';
import Lattafas from './pages/Lattafas';
import Register from './pages/Register';
import Ysls from './pages/Ysls';
import EgyediDior from './components/EgyediDior';
import Egyedi from './components/Egyedi'
import EgyediBoss from './components/EgyediBoss';
import EgyediArmani from './components/EgyediArmani';
import EgyediBurberry from './components/EgyediBurberry';
import EgyediCreed from './components/EgyediCreed';
import EgyediGucci from './components/EgyediGucci';
import EgyediDg from './components/EgyediDg';
import EgyediLattafa from './components/EgyediLattafa';
import EgyediJpg from './components/EgyediJpg';
import EgyediValentino from './components/EgyediValentino';
import EgyediVersacce from './components/EgyediVersacce';
import EgyediYsl from './components/EgyediYsl';
import Cart from './pages/Cart';
import Rolunk from './pages/Rolunk';
import Eredeti from './pages/Eredeti';
import Adatvedelem from './pages/adatvedelem';
import Altalanos from './pages/Altalanos';
import Szemelyes from './pages/Szemelyes';
import Penz from './pages/Penz';
import Szallitas from './pages/Szallitas';
import Success from './pages/Success';
import Cancel from './pages/Cancel';
import Kedvencek from './pages/Kedvencek';
import Vasarlas from './pages/Vasarlas';
import Kapcsolat from './pages/Kapcsolat';
import Gyik from './pages/Gyik';

export const FilteringContext = createContext();

function App() {
  const [count, setCount] = useState(0)
  const [filtering, setFiltering] = useState('')

  return (
    <FilteringContext.Provider value={{filtering, setFiltering}}>
          
        <BrowserRouter>
            <Navbar />
              <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/home' element={<Home />} />
                <Route path='/accaunt' element={<Accaunt />} />
                <Route path='/register' element={<Register />} />
                <Route path='/diors' element={<Diors />} />                  
                <Route path='/egyedidior/:id' element={<EgyediDior />} />                  
                <Route path='/valentinos' element={<Valentinos />} />
                <Route path='/egyedivalentino/:id' element={<EgyediValentino />} />                                       
                <Route path='/jpgs' element={<Jpgs />} />  
                <Route path='/egyedijpg/:id' element={<EgyediJpg />} />                                   
                <Route path='/bosses' element={<Bosses />} />
                <Route path='/egyediboss/:id' element={<EgyediBoss />} />                       
                <Route path='/versacces' element={<Versacces />} /> 
                <Route path='/egyediversacce/:id' element={<EgyediVersacce />} />                  
                <Route path='/ysls' element={<Ysls />} />      
                <Route path='/egyediysl/:id' element={<EgyediYsl />} />     
                <Route path='/egyedi/:id' element={<Egyedi />} />         
                <Route path='/creeds' element={<Creeds />} />
                <Route path='/egyedicreed/:id' element={<EgyediCreed />} />                      
                <Route path='/dgs' element={<Dgs  />} />
                <Route path='/egyedidg/:id' element={<EgyediDg />} />                
                <Route path='/guccis' element={<Guccis  />} />  
                <Route path='/egyedigucci/:id' element={<EgyediGucci />} />  
                <Route path='/burberrys' element={<Burberrys  />} />  
                <Route path='/egyediburberry/:id' element={<EgyediBurberry />} />                    
                <Route path='/armanis' element={<Armani />} />
                <Route path='/egyediarmani/:id' element={<EgyediArmani />} />                      
                <Route path='/lattafas' element={<Lattafas />} />    
                <Route path='/egyedilattafa/:id' element={<EgyediLattafa />} /> 
                <Route path='/cart' element={<Cart />} /> 
                <Route path='/rolunk' element={<Rolunk />} /> 
                <Route path='/eredeti' element={<Eredeti />} /> 
                <Route path='/adatvedelem' element={<Adatvedelem />} /> 
                <Route path='/altalanos' element={<Altalanos />} /> 
                <Route path='/szemelyes' element={<Szemelyes />} /> 
                <Route path='/penz' element={<Penz />} /> 
                <Route path='/szallitas' element={<Szallitas />} /> 
                <Route path='/success' element={<Success />} /> 
                <Route path='/cancel' element={<Cancel />} /> 
                <Route path='/kedvencek' element={<Kedvencek />}/> 
                <Route path='/vasarlas' element={<Vasarlas />}/>
                <Route path='/kapcsolat' element={<Kapcsolat />}/>
                <Route path='/gyik' element={<Gyik />}/>

              </Routes>
            <Footer />                               
        </BrowserRouter>
    </FilteringContext.Provider>

  )
}

export default App
