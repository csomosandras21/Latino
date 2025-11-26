import bag from '../../public/images/shopping_bag_24dp_FFF_FILL0_wght400_GRAD0_opsz24.png'
import account from '../../public/images/account_circle_24dp_FFF_FILL0_wght400_GRAD0_opsz24.png'
import favorite from '../../public/images/favorite_24dp_FFF_FILL0_wght400_GRAD0_opsz24.png'
import logout from '../../public/images/logout.png'
import server from '../../public/images/server.png'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const leker = localStorage.getItem('isLoggedIn');
    const user = JSON.parse(localStorage.getItem('user'));
    setIsLoggedIn(leker === '1');
    if (user) setIsAdmin(user.admin);
        else setIsAdmin(false);
    
  }, []);

  function kilep() {
    setIsLoggedIn(false);
    localStorage.setItem('isLoggedIn', 0);
    localStorage.removeItem('user');
    window.location.href = '/home';
  }

  return (
    <div>
        <header>
    <Link to='/'> <div className="logo">LATINO</div></Link>
    <div className="search-bar">
      <input type="text" placeholder="Keresés..." />
    </div>
    {isLoggedIn ?  <>
    <div className="icons" style={{backgroundColor: 'black'}}>
      <a href=""> <img src={bag} alt="" /> </a>
      <Link to='/accaunt'> <img src={account} alt="" /> </Link>
      <a href=""> <img src={favorite} alt="" /> </a>
      <Link to='/logout'> <img src={logout} alt="" onClick={kilep}/> </Link>
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
    <Link to='/burberrys' >BURBBERY</Link>
    <Link to='/armanis' >ARMANI</Link>
    <Link to='/lattafas' >LATTAFA</Link>
  </nav>
  </div>
  )
}

export default Navbar