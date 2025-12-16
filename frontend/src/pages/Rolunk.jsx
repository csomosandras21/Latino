import './Rolunk.css'
import logok from '../../public/images/logok2121.png'
import React from 'react'

const Rolunk = () => {
  return (
    <div className='main-resz'>
        <div className='rol'>

      <h1>Rólunk</h1>
        </div>

        <div className='jegyzet'>

      <p>A Latinonál hiszünk abban, hogy a szépségnek mindenki számára elérhetőnek kell lennie, mert a szépség képes önbizalmat adni és megváltoztatni az embereket. Aki szépnek érzi magát, könnyebben éri el a céljait és viszonzásul szebbé teszi a világot maga körül.</p>
      <h2>20 éve Önnel</h2>
      <p>Utunk kezdete 2004-re vezethető vissza, ekkor alakultunk meg Csehországban azzal a céllal, hogy szebbé tegyük Európát. Mind a 1.5 millió elégedett ügyfelünk annak a bizonyítéka, hogy jó úton járunk. Ugyanakkor ez hatalmas felelősség is. Kitartó munkával igyekszünk folyamatosan jobbak lenni, kiválasztani Önnek a legjobb termékeket, a lehető leggyorsabban otthonába juttatni a kívánt árut, a nap minden pillanatában készen állni és vásárlását élménnyé varázsolni. Odaadással folytatjuk megkezdett utunkat és közös erővel szeretnénk elérhetővé tenni a szépséget. Minden alkalomra. Bárhol a világon.</p>

      <h2>Parfümök széles választéka mindig jó áron</h2>
      <p>Az elmúlt 20 évben Önnek köszönhetően lettünk Európa legnagyobb parfüm és kozmetikum webáruháza. Több mint 94 termékből választhat közel 12 márkától. Kínálatunkban nem csupán az összes világmárkát, de kisebb gyártók termékeit is megtalálja. Folyamatosan dolgozunk azon, hogy még ennél is több terméket tudjunk kínálni még jutányosabb áron. Csupán az elmúlt évben 1.2 millió terméket adtunk el.</p>

        </div>

        <div className="kepes">
            <img src={logok} alt="" />
        </div>

    </div>
  )
}

export default Rolunk