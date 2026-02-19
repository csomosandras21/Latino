import { Link, useLocation } from 'react-router-dom';
import './Footer.css'

const Footer = () => {
    const location = useLocation();

    if (location.pathname === '/cart') {
        return null;
    } else if (location.pathname === '/Kedvencek') {
        return null;
     } else if (location.pathname === '/accaunt') {
        return null;
     }else if (location.pathname === '/register') {
        return null;
     }else if (location.pathname === '/success') {
        return null;
     }else if (location.pathname === '/cancel') {
        return null;
     }

    return (
    <footer className="lab-hatter">


    <div className='labjegyzet'>
        <h1>Latino Információk</h1>
        <div className='kerdesek'>
            <h2>Rólunk</h2>
            <hr />
            <h3>Miért a Latino-t válasszam?</h3> 
            <div className='linkek'>
                <Link to={'/rolunk'}>Rólunk</Link>
                <Link to={'/eredeti'}>Csak eredeti termékek</Link>
                <Link to={'/adatvedelem'}>Adatvédelmi központ</Link>
                <Link to={'/altalanos'}>Általános Szerződési Feltételek</Link>
                <Link to={'/szemelyes'}>Személyes adatok védelme</Link> 
            </div>
   
            <hr />
        </div>
        <div className='fontos'>
            <h3>Fontos tudni valók</h3>
            <div className='linkek'>
                <Link to={'/penz'}>Pénzvisszafizetési garancia</Link>
                <Link to={'/szallitas'}>Szállítás és fizetés</Link>
                <Link to={'/vasarlas'}>Hogyan vásároljunk?</Link>
                <Link to={'/kapcsolat'}>Kapcsolat</Link>
                <Link to={'/gyik'}>GYIK</Link>
            </div>
            </div>
    </div>

    </footer>);
}

export default Footer