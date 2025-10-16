import bag from '../../public/images/shopping_bag_24dp_FFF_FILL0_wght400_GRAD0_opsz24.png'
import account from '../../public/images/account_circle_24dp_FFF_FILL0_wght400_GRAD0_opsz24.png'
import favorite from '../../public/images/favorite_24dp_FFF_FILL0_wght400_GRAD0_opsz24.png'
import menu from '../../public/images/menu_24dp_FFF_FILL0_wght400_GRAD0_opsz24.png'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <header>
    <Link to='/'> <div className="logo">LATINO</div></Link>
    <div className="search-bar">
      <input type="text" placeholder="Keresés..." />
    </div>
    <div className="icons" style={{backgroundColor: 'black'}}>
      <a href=""> <img src={bag} alt="" /> </a>
      <Link to='/accaunt'> <img src={account} alt="" /> </Link>
      <a href=""> <img src={favorite} alt="" /> </a>
      <a href=""> <img src={menu} alt=""   /> </a>
    </div>
  </header>

  <nav className="navbar">
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