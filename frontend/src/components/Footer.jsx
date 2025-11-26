import { Link } from 'react-router-dom';
import './Footer.css'

const Footer = () => {
    return (
    <footer className="lab-hatter">


    <div className='labjegyzet'>
        <h1>Latino Információk</h1>
        <div className='kerdesek'>
            <h2>Rólunk</h2>
            <Link to='/'>Miért a Latino-t válasszam?</Link>
        </div>
    </div>

    </footer>);
}

export default Footer