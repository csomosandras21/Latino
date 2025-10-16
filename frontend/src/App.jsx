import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react'
import Home from './pages/Home'
import Accaunt from './pages/Accaunt'
import Diors from './pages/Diors'
import Navbar from './pages/Navbar';
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

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
          
        <BrowserRouter>
            <Navbar />
              <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/accaunt' element={<Accaunt />} />
                <Route path='/register' element={<Register />} />
                <Route path='/diors' element={<Diors />} />                  
                <Route path='/valentinos' element={<Valentinos />} />                                   
                <Route path='/jpgs' element={<Jpgs />} />                                   
                <Route path='/bosses' element={<Bosses />} />                  
                <Route path='/versacces' element={<Versacces />} />                  
                <Route path='/ysls' element={<Ysls />} />                  
                <Route path='/creeds' element={<Creeds />} />                  
                <Route path='/dgs' element={<Dgs  />} />                  
                <Route path='/guccis' element={<Guccis  />} />                  
                <Route path='/burberrys' element={<Burberrys  />} />                  
                <Route path='/armanis' element={<Armani />} />                  
                <Route path='/lattafas' element={<Lattafas />} />                  
              </Routes>
        </BrowserRouter>
    </>

  )
}

export default App
