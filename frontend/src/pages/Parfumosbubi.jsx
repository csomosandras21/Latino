import './Parfumokbubi.css'
import dior from '../../public/images/dior_01.jpg'
import valentino from '../../public/images/val_01.jpg'
import jpg from '../../public/images/jpg_01.jpg'
import boss from '../../public/images/boss_01.jpg'
import ver from '../../public/images/ver_01.jpg'
import yves from '../../public/images/yves_02.jpg'
import creed from '../../public/images/creed_01.jpg'
import dg from '../../public/images/dg_01.jpg'
import gucci from '../../public/images/gg_04.jpg'
import bur from '../../public/images/bur_01.jpg'
import armani from '../../public/images/armani_01.jpg'
import lattafa from '../../public/images/lat_01.jpg'
import { Link } from 'react-router-dom';
import EgyediDior from '../components/EgyediDior'


const Parfumosbubi = () => {
  return (
    <div className='parfumbubi-kontener'>
        {/* <h1>Parfüm márkák</h1> */}
        <div className="parfum-egyedikontener">
            <Link to='/diors'>
            <h2>DIOR</h2>
            <img src={dior}/>
            </Link>
        </div>
        <div className="parfum-egyedikontener">
            <Link to='/valentinos'>
            <h2>VALENTINO</h2>
            <img src={valentino}/>
            </Link>
        </div>
        <div className="parfum-egyedikontener">
            <Link to='/jpgs'>
            <h2>JEAN PAUL</h2>
            <img src={jpg}/>
            </Link>
        </div>
        <div className="parfum-egyedikontener">
            <Link to='/bosses'>
            <h2>BOSS</h2>
            <img src={boss}/>
            </Link>
        </div>
        <div className="parfum-egyedikontener">
            <Link to='/versacces'>
            <h2>VERSACE</h2>
            <img src={ver}/>
            </Link>
        </div>
        <div className="parfum-egyedikontener">
            <Link to='/ysls'>
            <h2>YVES SAINT LAURENT</h2>
            <img src={yves}/>
            </Link>
        </div>
        <div className="parfum-egyedikontener">
            <Link to='/creeds'>
            <h2>CREED</h2>
            <img src={creed}/>
            </Link>
        </div>
        <div className="parfum-egyedikontener">
            <Link to='/dgs'>
            <h2>DOLCE & GABBANA </h2>
            <img src={dg}/>
            </Link>
        </div>
        <div className="parfum-egyedikontener">
            <Link to='/guccis'>
            <h2>GUCCI</h2>
            <img src={gucci}/>
            </Link>
        </div>
        <div className="parfum-egyedikontener">
            <Link to='/burberrys'>
            <h2>BURBERRY</h2>
            <img src={bur}/>
            </Link>
        </div>
        <div className="parfum-egyedikontener">
            <Link to='/armanis'>
            <h2>ARMANI</h2>
            <img src={armani}/>
            </Link>
        </div>
        <div className="parfum-egyedikontener">
            <Link to='/lattafas'>
            <h2>LATTAFA</h2>
            <img src={lattafa}/>
            </Link>
        </div>
    </div>
  )
}

export default Parfumosbubi