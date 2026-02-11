import bag from '../../public/images/shopping_bag_24dp_FFF_FILL0_wght400_GRAD0_opsz24.png'
import account from '../../public/images/account_circle_24dp_FFF_FILL0_wght400_GRAD0_opsz24.png'
import favorite from '../../public/images/favorite_24dp_FFF_FILL0_wght400_GRAD0_opsz24.png'
import logout from '../../public/images/logout.png'
import server from '../../public/images/server.png'
import { Link } from 'react-router-dom'
import { useEffect, useState, useContext } from 'react'
import { FilteringContext } from '../App'
import { CartContext } from '../context/CartContext'

const Navbar = () => {
  const { setFiltering } = useContext(FilteringContext)
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [filter, setFilter] = useState('');
  
  // Kedvencek számláló állapota
  const [kedvencekSzamlalo, setKedvencekSzamlalo] = useState(0);
 
  const { kosar, kosarSzamlalo, setKosar, setKosarSzamlalo, kedvencSzamlalo } = useContext(CartContext);

  useEffect(() => {
    setFiltering(filter);
    const leker = localStorage.getItem('isLoggedIn');
    const user = JSON.parse(localStorage.getItem('user'));
    setIsLoggedIn(leker === '1');
    
    if (user) setIsAdmin(user.admin);
    else setIsAdmin(false);

    // KEDVENCEK SZÁMÁNAK FRISSÍTÉSE
    // Megszámoljuk a localStorage-ban lévő elemeket
    const mentettKedvencek = JSON.parse(localStorage.getItem('kedvencek')) || [];
    setKedvencekSzamlalo(mentettKedvencek.length);

  }, [filter]); // Itt figyelheted a globális változásokat is, ha szükséges

  function kilep() {
    setIsLoggedIn(false);
    localStorage.setItem('isLoggedIn', 0);
    localStorage.removeItem('user');
    localStorage.removeItem('kedvencek');
    window.location.href = '/home';
  }

  return (
    <div>
      <header>
        <div className="logo"><Link to='/'> LATINO</Link></div>
        <div className="search-bar">
          <input type="text" placeholder="Keresés..." onChange={e => setFilter(e.target.value)} />
        </div>
        
        {isLoggedIn ? <>
          <div className="icons" style={{ backgroundColor: 'black' }}>
            <div className='kosarErtek-tarto'>
              <Link to="/cart"> <img src={bag} alt="" /></Link>
              <span className='kosarErtek'>{kosarSzamlalo}</span>
            </div>
            
            <Link to='/accaunt'> <img src={account} alt="" /> </Link>
            
            {/* KEDVENCEK IKON ÉS SZÁMLÁLÓ */}
            <div className='kosarErtek-tarto'>
              <Link to='/Kedvencek'> <img src={favorite} alt="" /> </Link>
              <span className='kosarErtek'>{kedvencSzamlalo}</span>
            </div>

            <Link to='/logout'> <img src={logout} alt="" onClick={kilep} /> </Link>
          </div>
        </> : <>
          <Link to='/accaunt'> <img src={account} alt="" /> </Link>
        </>}

        {isAdmin ?
          <div className="backend-nav">
            <Link to="http://localhost:3500/api"> <img src={server} alt="" /> </Link>
          </div>
          :
          <div className="backend-nav"></div>
        }
      </header>

      <nav className='navbar'>
        <Link to='/diors'>DIOR</Link>
        <Link to='/valentinos' >VALENTINO</Link>
        <Link to='/jpgs' >JEAN PAUL</Link>
        <Link to='/bosses' >BOSS</Link>
        <Link to='/versacces' >VERSACE</Link>
        <Link to='/ysls' >YSL SAINT LAURENT</Link>
        <Link to='/creeds' >CREED</Link>
        <Link to='/dgs' >DOLCE & GABBANA</Link>
        <Link to='/guccis' >GUCCI</Link>
        <Link to='/burberrys' >BURBERRY</Link>
        <Link to='/armanis' >ARMANI</Link>
        <Link to='/lattafas' >LATTAFA</Link>
      </nav>
    </div>
  )
}

export default Navbar