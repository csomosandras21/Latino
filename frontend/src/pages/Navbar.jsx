import bag from '../../public/images/shopping_bag_24dp_FFF_FILL0_wght400_GRAD0_opsz24.png'
import account from '../../public/images/account_circle_24dp_FFF_FILL0_wght400_GRAD0_opsz24.png'
import favorite from '../../public/images/favorite_24dp_FFF_FILL0_wght400_GRAD0_opsz24.png'
import menu from '../../public/images/menu_24dp_FFF_FILL0_wght400_GRAD0_opsz24.png'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <header>
    <div className="logo">LATINO</div>
    <div className="search-bar">
      <input type="text" placeholder="Keresés..." />
    </div>
    <div className="icons" style={{backgroundColor: 'black'}}>
      <a href=""> <img src={bag} alt="" /> </a>
      <a href="http://localhost:3500/acaunts"> <img src={account} alt="" /> </a>
      <a href=""> <img src={favorite} alt="" /> </a>
      <a href=""> <img src={menu} alt=""   /> </a>
    </div>
  </header>

  <nav className="navbar">
    <Link to='/diors'>DIOR</Link> 
    <Link to='/valentinos' >VALENTINO</Link>
    <Link to='/' >JEAN PAUL</Link>
    <Link to='/diors' >BOSS</Link>
    <Link to='/diors' >VERSACCE</Link>
    <Link to='/diors' >YSL SAINt LAURENT</Link>
    <Link to='/diors' >CREED</Link>
    <Link to='/diors' >DOLCE & GABBANE</Link>
    <Link to='/diors' >GUCCI</Link>
    <Link to='/diors' >BURBBERY</Link>
    <Link to='/diors' >ARMANI</Link>
    <Link to='/diors' >LATTAFA</Link>
  </nav>
  </div>
  )
}

export default Navbar