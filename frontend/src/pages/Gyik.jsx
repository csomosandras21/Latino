import './Gyik.css'; // A már meglévő stíluslapod
import React from 'react';

const Gyik = () => {
  return (
    <div className='main-resz10'>
      <h1>Gyakran Ismételt Kérdések</h1>

      <p>
        Összegyűjtöttük a leggyakrabban felmerülő kérdéseket, hogy azonnali választ kaphass 
        a kételyeidre. Ha mégsem találod, amit keresel, ügyfélszolgálatunk örömmel segít.
      </p>

      <h1>Mennyi idő a kiszállítás?</h1>
      <p>
        A megrendelt parfümöket általában 1-3 munkanapon belül kézbesítjük. Amint a csomagodat 
        átadjuk a futárszolgálatnak, e-mailben küldünk egy kódot, amivel követheted a csomag útját.
      </p>

      <h1>Mi történik, ha nem tetszik az illat?</h1>
      <p>
        Törvényi kötelezettségünknek megfelelően 14 napos elállási jogot biztosítunk. 
        Fontos azonban, hogy higiéniai okokból csak bontatlan, sértetlen celofáncsomagolású 
        terméket áll módunkban visszavenni.
      </p>

      <h1>Van lehetőség személyes átvételre?</h1>
      <p>
        Jelenleg kizárólag online áruházként üzemelünk, így személyes átvételi ponttal nem 
        rendelkezünk. Viszont számos csomagautomata és futáros kézbesítés közül választhatsz 
        a kényelmed érdekében.
      </p>

      <h1>Hogyan tároljam a parfümömet?</h1>
      <p>
        Ahhoz, hogy az illat sokáig megőrizze minőségét, tárold hűvös, fénytől védett helyen. 
        A közvetlen napsugárzás és a pára (például a fürdőszobában) károsíthatja az illatjegyeket.
      </p>

      <h1>Nem kaptam meg a visszaigazoló e-mailt. Mi a teendő?</h1>
      <p>
        Kérjük, ellenőrizd a „Promóciók” vagy a „Spam” mappádat is. Ha ott sem találod, 
        vedd fel velünk a kapcsolatot az ügyfélszolgálati elérhetőségeinken, és ellenőrizzük 
        a rendelésed állapotát.
      </p>
    </div>
  );
};

export default Gyik ;