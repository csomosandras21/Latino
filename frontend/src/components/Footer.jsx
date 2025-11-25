import { Link } from 'react-router-dom';

const Footer = () => {
    return (
    <footer className="w-full bg-black text-gray-300 border-t border-white/10 mt-10">


    <div className="max-w-6xl mx-auto px-6 py-10 grid grid-cols-1 sm:grid-cols-3 gap-10">


    {/* 1. OSZLOP */}
    <div>
    <h3 className="text-white text-base mb-3">Miért minket válassz?</h3>
    <ul className="flex flex-col gap-2 text-sm">
    <li><Link className="hover:text-white" to="#">Kedvezmény kódok</Link></li>
    <li><Link className="hover:text-white" to="#">Telefonos rendelés</Link></li>
    <li><Link className="hover:text-white" to="#">Adatvédelem</Link></li>
    <li><Link className="hover:text-white" to="#">Eredeti termékek</Link></li>
    </ul>
    </div>


    {/* 2. OSZLOP */}
    <div>
    <h3 className="text-white text-base mb-3">Szolgáltatások</h3>
    <ul className="flex flex-col gap-2 text-sm">
    <li><Link className="hover:text-white" to="#">Személyes átvétel</Link></li>
    <li><Link className="hover:text-white" to="#">ÁSZF</Link></li>
    <li><Link className="hover:text-white" to="#">Club tagság</Link></li>
    <li><Link className="hover:text-white" to="#">Visszaküldés</Link></li>
    </ul>
    </div>


    {/* 3. OSZLOP */}
    <div>
    <h3 className="text-white text-base mb-3">Rólunk</h3>
    <ul className="flex flex-col gap-2 text-sm">
    <li><Link className="hover:text-white" to="#">Rólunk</Link></li>
    <li><Link className="hover:text-white" to="#">Black Friday</Link></li>
    <li><Link className="hover:text-white" to="#">Adatvédelmi központ</Link></li>
    <li><Link className="hover:text-white" to="#">Kapcsolat</Link></li>
    </ul>
    </div>
    </div>


    {/* ALSÓ SÁV */}
    <div className="border-t border-white/10">
    <div className="max-w-6xl mx-auto px-6 py-4 text-center text-xs text-gray-500">
    © {new Date().getFullYear()} LATINO. Minden jog fenntartva.
    </div>
    </div>
    </footer>);
}

export default Footer