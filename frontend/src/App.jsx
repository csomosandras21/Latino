import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react'
import Home from './pages/Home'
import Diors from './pages/Diors'
import Navbar from './pages/Navbar';
import Valentinos from './pages/Valentinos';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
          
        <BrowserRouter>
            <Navbar />
              <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/diors' element={<Diors />} />                  
                <Route path='/valentinos' element={<Valentinos />} />                  
              </Routes>
        </BrowserRouter>
    </>

  )
}

export default App
