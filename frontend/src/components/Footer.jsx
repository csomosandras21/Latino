import { Link } from 'react-router-dom';
import './Footer.css'

const Footer = () => {
    return (
    <footer className="lab-hatter">


    <div className='labjegyzet'>
        <h1>Latino Információk</h1>
        <div className='kerdesek'>
            <h2>Rólunk</h2>
            <hr />
            <h3>Miért a Latino-t válasszam?</h3> 
            <div className='linkek'>
                <Link to={'/'}>Rólunk</Link>
                <Link to={'/'}>Csak eredeti termékek</Link>
                <Link to={'/'}>Adatvédelmi központ</Link>
                <Link to={'/'}>Általános Szerződési Feltételek</Link>
                <Link to={'/'}>Személyes adatok védelme</Link> 
            </div>
   
            <hr />
        </div>
        <div className='fontos'>
            <h3>Fontos tudni valók</h3>
            <div className='linkek'>
                <Link to={'/'}>Pénzvisszafizetési garancia</Link>
                <Link to={'/'}>Szállítás és fizetés</Link>
                <Link to={'/'}>Hogyan vásároljunk?</Link>
                <Link to={'/'}>Kapcsolat</Link>
                <Link to={'/'}>GYIK</Link>
                <Link to={'/'}>Termékértékelés</Link> 
            </div>
            </div>
    </div>

    </footer>);
}

export default Footer