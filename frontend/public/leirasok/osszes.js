let osszesAdatok = [
    {
        nev:'Armani Emporio Stronger With You Intensely',
        fajta:'Eau de Parfum',
        fej:'rózsabors, boróka',
        sziv:'levendula, fahéj, zsálya',
        alap:'vanília, tonkabab, gesztenyés máz',
        fajtaja:'orientális, fűszeres',
        leiras:'A Giorgio Armani Emporio Stronger With You Intensely Eau de Parfum illatát annak a modern, fiatal férfinak a mély szerelmi története ihlette, aki minden nap feszegeti szerelmének határait, és harcol érte.'
    },
    {
        nev:'Armani Emporio Stronger With You Absolutely',
        fej:'rum',
        fajta:'Eau de Parfum',
        sziv:'levendula',
        alap:'cédrusfa, vanília',
        fajtaja:'orientális, fougere',
        leiras:'Korábban soha nem tapasztalt szenvedély. Élje át Ön is. Az Armani Emporio Stronger With You Absolutely férfiparfüm rendkívül érzéki formában tárja fel az abszolút szerelem élményét. Ez a parfüm a csábító és erősen addiktív illatkompozíciójával garantáltan meghódítja.'
    },
    {
        nev:'Armani Emporio Stronger With You Sandalwood',
        fajta:'Eau de Parfum',
        fej:'kardamon, rózsabors, ibolya levelek, menta',
        sziv:'zsálya, dinnye, ananász',
        alap:'vanília, gesztenye, cédrus, borostyán',
        fajtaja:'aromás',
        leiras:'Egy pillanatra se engedje meg a környezetének, hogy az ön eredetiségében vagy kiszámíthatatlanságában kételkedjen. A Giorgio Armani Emporio Stronger With You férfi Eau de Toilette a modern férfi energikus illata. Az őt viselő férfi a jelenben él és öntudatosan elegáns.'
    },
    {
        nev:'Armani Emporio Stronger With You Amber',
        fajta:'Eau de Parfum',
        fej:'levendulaesszencia',
        sziv:'benzoin, kardamon, fahéj, ámbrás jegy',
        alap:'absolut vanília, kandírozott gesztenyés jegy',
        fajtaja:'fougere',
        leiras:'Mindenki számára. Különbség nélkül. Az unisex Armani Emporio Stronger With You Amber Eau de Parfum tökéletesen megfelel nőknek és férfiaknak egyaránt, teljesen hagyja megnyilvánulni az Ön személyiségét.'
    },
    {
        nev:'Armani Acqua di Giò',
        fajta:'Eau de Toilette',
        fej:'narancs, jázmin, citrom, bergamott, limett, keserűnarancs, mandarin virága',
        sziv:'tengeri tónusok, jázmin, őszibarack, rozmaring, frézia, jácint, ciklámen, ibolya, koriander, szerecsendió, rózsa, rezeda',
        alap:'fehér pézsma, cédrus, tölgymoha, pacsuli, borostyán',
        fajtaja:'vizes, fás',
        leiras:'Önt is lenyűgözi a Földközi-tenger? A zord fehér sziklák és végtelen tenger? Az Armani Acqua di Giò Eau de Toilette férfiillat minden cseppjével elrepíti Önt erre az álomhelyre, hogy tökéletes harmóniába kerüljön a környező természettel. Fedezze fel az Acqua di Giò érzékeny és lázadó oldalát - ez az illat finom, de ugyanakkor fékezhetetlen is, mint bármelyikünk.'
    },
    {
        nev:'Armani Acqua di Giò Parfum',
        fajta:'Parfüm',
        fej:'tengeri tónusok, zöld mandarin',
        sziv:'mimóza',
        alap:'pacsuli, labdanum',
        fajtaja:'vizes, fougere',
        leiras:'Csábítja az ismeretlen? Az Armani Acqua di Giò Profondo Parfum megragadja a mélytenger intenzív vonzerejét. Minden egyes frissítő cseppje olyan érzést kelt, mintha hűvös vízbe merülne, amely feltárja ön előtt az óceán titkait. '
    },
    {
        nev:'Armani Acqua di Giò Profondo',
        fajta:'Eau de Parfum',
        fej:'tengeri tónusok, bergamott, zöld mandarin',
        sziv:'rozmaring, levendula, ciprus, masztika',
        alap:'ásványok, pézsma, pacsuli, borostyán',
        fajtaja:'vizes',
        leiras:'Mintha a tenger mélyén született volna ‒ a férfi Armani Acqua di Giò Profondo Eau de Parfum-öt áthatja a víz frissessége, illata pedig a tenger végtelen mélységét tükrözi. Mindig időtlen lesz és senki figyelmét sem kerülheti el.'
    },
    {
        nev:'Armani Acqua di Giò',
        fajta:'Eau de Parfum',
        fej:'zöld mandarin, tengeri tónusok',
        sziv:'muskotályzsálya, levendula, gólyaorr',
        alap:'ásványok, vetiverfű, pacsuli',
        fajtaja:'citrusos, aromás, vizes',
        leiras:'Az Armani Acqua di Giò parfüm tökéletes választás azoknak a férfiaknak, akik az frissesség és az elegancia harmóniáját keresik. Az aromás citrusos és tengeri tónusok kombinációja olyan érzést ad, mintha mély kapcsolatban lennél a természettel. Tökéletes mindenkinek, aki kedveli a könnyedséget és a nyugodt légkört.'
    },
    {
        nev:'Armani Acqua di Gió Pour Homme',
        fajta:'Eau de Parfum',
        fej:'narancs, jázmin, citrom, bergamott, limett, keserűnarancs, mandarin virága',
        sziv:'fehér pézsma, cédrus, tölgymoha, pacsuli, borostyán',
        alap:'fehér pézsma, cédrus, tölgymoha, pacsuli, borostyán',
        fajtaja:'vizes, fás',
        leiras:'Önt is lenyűgözi a Földközi-tenger? A zord fehér sziklák és végtelen tenger? Az Armani Acqua di Giò Eau de Toilette férfiillat minden cseppjével elrepíti Önt erre az álomhelyre, hogy tökéletes harmóniába kerüljön a környező természettel. Fedezze fel az Acqua di Giò érzékeny és lázadó oldalát - ez az illat finom, de ugyanakkor fékezhetetlen is, mint bármelyikünk.'
    },
    {
        nev:'BOSS The Scent Elixir for him Parfum',
        fajta:'Parfüm',
        fej:'Pimento csilipaprika',
        sziv:'lavandin',
        alap:'szantálfa',
        fajtaja:'bőrös, fűszeres, fás',
        leiras:'Éltesse a vágy lángjait. A BOSS The Scent Elixir for Him Parfum tüzes intenzitással ragadja meg a vonzerő égető esszenciáját. Az ámbrás-bőr-fás illatkompozícióban kontrasztos elemek alkotnak veszélyesen csábító egészet. Ön képes ellenállni a mágnesként ható vonzerejének?tüzes intenzitású ámbrás-bőr-fás illamerész, erősen koncentrált férfiillat, energikus párost alkot a BOSS The Scent Elixir for Her Parfum illattal'
    },
    {
        nev:'BOSS The Scent',
        fajta:'Parfüm',
        fej:'gyömbér',
        sziv:'maninka',
        alap:'bőr',
        fajtaja:'fűszeres',
        leiras:'A borotválkozás egy rituálé, amely a lezárásához megérdemel egy emlékezetes illatot. A Hugo Boss BOSS The Scent aftershave a fűszeres és melengető illatok lenyűgöző kombinációja, amely minden férfinak magabiztos és felismerhető illatot kölcsönöz. A mindennapi ápolás elegáns kiegészítője, amely nemcsak illatot, hanem az egyediség érzetét is a bőrén hagyja.'
    },
    {
        nev:'BOSS Hugo Boss',
        fajta:'Parfüm',
        fej:'bőr',
        sziv:'pacsuli',
        alap:'cédrusfa',
        fajtaja:'bőrös, fűszeres',
        leiras:'Leplezze le a BOSS Bottled történetének újabb fejezetét intenzívebb, mint valaha! A Hugo Boss BOSS Bottled Absolu Intense Eau de Parfum a férfias erő és elegancia eszenciáját testesíti meg. Összetéveszthetetlen aurával veszi Önt körül, így remek választás azoknak az uraknak, akik mély benyomást kívánnak kelteni a környezetükben.28%-os koncentrációjú illat, tele bőrös és füstös jegyekkelaz illatkompozíciót Annick Menardo és Suzy Le Helley parfümőrök alkottákaz illat 2024-ben jelent meg'
    },
    {
        nev:'BOSS Bottled Beyond',
        fajta:'Eau de Parfum',
        fej:'gyömbér',
        sziv:'bőr',
        alap:'fás,tónusok',
        fajtaja:'bőrös,fás',
        leiras: 'A Hugo Boss BOSS Bottled Beyond Eau de Parfum a gyömbér energizáló frissességét és a bőr erotikus, kifinomult hangulatát ötvözi. A merész és magabiztos illatkompozíció az ambíciót és a testvériséget ünnepli, arra ösztökélve minden férfit, hogy lépjen túl a határain. Bradley Cooper, Vinicius Junior és Maluma ezt a szellemet testesítik meg, bizonyítva, hogy a valódi siker mindig többeket dicsér. -fás illat kifinomult bőr akkorddal -Daphné Bugey, Frank Voelkl és Bruno Jovanovic parfümmesterek munkája. Az 50 ml, 100 ml és 150 ml kiszerelésű üvegcséi újratölthetőek a 200 ml-es BOSS Bottled Beyond Eau de Parfum utántöltővel'
    },
    {
        nev:'BOSS Bold Citrus',
         fajta:'Eau de Parfum',
        fej:'citrom, bergamott',
        sziv:'elemi, geranium Bourbon',
        alap:'pacsuli, vetiverfű',
        fajtaja:'fás tónusok',
        leiras:'Szikrázó, merész, erőt adó – üdvözölje a nyarat egy olyan illattal, amely energiával és kifinomultsággal tölt fel. A frissesség merész kifejezésének megtestesítője, a BOSS Bottled Bold Citrus Eau de Parfum a magabiztosság és kifinomult stílus jellemezte BOSS férfi lényét ragadja meg.'
    },
    {
        nev:'BOSS Bottled Absolut',
        fajta:'Eau de Parfum',
        fej:'citrom, bergamott',
        sziv:'elemi, geranium Bourbon',
        alap:'pacsuli, vetiverfű',
        fajtaja:'fás tónusok',
        leiras:'Szikrázó, merész, erőt adó – üdvözölje a nyarat egy olyan illattal, amely energiával és kifinomultsággal tölt fel. A frissesség merész kifejezésének megtestesítője, a BOSS Bottled Bold Citrus Eau de Parfum a magabiztosság és kifinomult stílus jellemezte BOSS férfi lényét ragadja meg.'
    },
    {
        nev:'BOSS Bottled Parfume',
        fajta:'Eau de Parfum',
        fej:'mandarinolaj, rózsabors, tömjén',
        sziv:'orrisz gyökér, fügefa, bőr',
        alap:'cédrusolaj, pacsuli, ambrocenid',
        fajtaja:'zöld, bőrös, fás',
        leiras:'Érje el a kitűzött életcélját, és legyen önmaga a Boss-szal. A férfiak számára készült Hugo Boss BOSS Bottled Parfum ezekre a kihívásokra koncentrál. Karizmatikus és öntudatos illata mindig emlékeztetni fogja arra, hogy a saját sikere egyedül Önön múlik.'
    },
    {
        nev:'BOSS Bottled Tonic',
         fajta:'Eau de Toilette',
        fej:'citrom, grapefruit, alma, keserű narancs',
        sziv:'szegfűszeg, fahéj, gyömbér, gólyaorr',
        alap:'vetiverfű, fás tónusok',
        fajtaja:'fűszeres, fás',
        leiras:'A Hugo Boss márka Boss Bottled Tonic férfi Eau de Toilette tökéletes társ egy olyan férfi számára, aki minden nap a sikerre törekszik. Élvezze ön is a legendás Boss Bottled illat frissítő és elegáns értelmezését, mellyel minden célját elérheti.'
    },
    {
        nev:'Burberry Hero Parfum Intense',
        fajta:'Parfüm',
        fej:'fekete bors',
        sziv:'cédrus',
        alap:'bőr',
        fajtaja:'fás',
        leiras:'Nézze végig az erő és az érzékiség találkozását mélység és intenzitás vad kavalkádja közepette. A Burberry Hero Parfum Intense erőt és önbizalmat testesít meg. A Burberry Hero Parfum merész újraértelmezése az eredeti illatkompozíciót a mély bőraroma gazdagságával erősíti.'
    },
    {
        nev:'Burberry Hero',
        fajta:'Parfüm',
        fej:'bergamott, citrom, kardamon',
        sziv:'levendula, fekete bors, boróka, szerecsendió',
        alap:'cédrusfa',
        fajtaja:'citrusos, fűszeres, fás',
        leiras: 'Váljon igazi hőssé. A Burberry Hero férfi Eau de Toilette felébreszti és erősíti a vágyat, hogy átlépje saját korlátait, teljesen szabad és felszabadult legyen. Segít megtalálni a bátorságot, hogy azzá váljon, aki valóban lenni szeretne. Mert csak az ösztöneit követve válhat igazi hőssé.'
    },
    {
        nev:'Burberry Hero Eau de Parfum',
        fajta:'Eau de Parfum',
        fej:'fenyő, tüske',
        sziv:'benzoin, tömjén, fekete bors, boróka',
        alap:'cédrusfa',
        fajtaja:'aromás, zöld, fás',
        leiras:'Fedezze fel a hősiesség új oldalát, amelyet a Burberry Hero férfi Eau de Parfum testesít meg. Ez az illat kifejezi azt az erőt, amellyel újra kapcsolatba léphet saját egyediségével, természetes ösztöneivel.'
    },
    {
        nev:'Creed Aventus',
        fajta:'Eau de Parfum',
        fej:'bergamott, feketeribizli, alma, citrom, rózsabors',
        sziv:'jázmin, pacsuli, ananász',
        alap:'pézsma, ambroxan, nyír, cédrusfa, tölgymoha',
        fajtaja:'fás',
        leiras:'A Creed Aventus Eau de Parfum egy páratlan sokszínűségről tanúskodó klasszikus parfüm. Mesterien ötvözi a kézzel szüretelt citrusfélék tónusait és az ananász vonzerejét dekadens fák füstös jellegével. A dinamikus debütálástól a megszáradásig elragadó illatot ígér, amely merész kifinomultságával és időtlen eleganciájával kelt mély benyomást.'
    },
    {
        nev:'Creed Original Vetiver',
        fajta:'Eau de Parfum',
        fej:'gyömbér, zöld tónusok, olasz citrom',
        sziv:'virágos tónusok, haiti vetiver, ciprus',
        alap:'fehér pézsma, cédrusfa',
        fajtaja:'aromás, fás',
        leiras:'Mindenki, aki magán hordja, a frissesség illatát hagyja maga után. Miről van szó? A vetiver újra felfedezett, hagyományos aromájáról, amelyet a Creed Original Vetiver Eau de Parfum rejt magában. Az illat minden elemét tartalmazza ennek a trópusi fűnek, így a nyári illatokra emlékeztető kompozíció jön létre. Frissítő és temperamentumos, akárcsak Ön.'
    },
    {
        nev:'Creed Absolu Aventus',
        fajta:'Eau de Parfum',
        fej:'grapefruit, bergamott, gyömbér, citrom, feketeribizli',
        sziv:'kardamon, fahéj, pacsuli, ananász, rózsabors',
        alap:'tejszínes akkord, ambroxan, kaszmerán, haiti vetiver, labdanum, pézsma, tölgymoha',
        fajtaja:'fás',
        leiras:'A Creed Absolu Aventus Eau de Parfum a klasszikus Aventus merész újragondolása. Az eredeti illatot tiszteletben tartva fedez fel új mélységeket és textúrákat – friss citrusos tónusokkal indul, amelyek fokozatosan fűszeres és kifinomultan füstös tónusokká keverednek. Az eredmény egy olyan illat, amely kirobbanó szabadságérzést kelt – az erő és az elegancia találkozása a belső egyensúllyal.'
    },
    {
        nev:'Creed Bois Du Portugal',
        fajta:'Eau de Parfum',
        fej:'bergamott, citrom, limett, mandarin, bazsalikom',
        sziv:'levendula, szegfűbors, szegfűszeg, szerecsendió, koriander',
        alap:'szantálfa, tölgymoha, pacsuli, bőr',
        fajtaja:'aromás, chypre, fás',
        leiras:'Barangoljon az erdős portugál dombok között. A Creed Bois Du Portugal Eau de parfum férfiaknak egy olyan klasszikus termék kifinomult megtestesítője, amellyel sosem tévedhet. A fa gazdag illatát a levendula titokzatos aromája gazdagítja, amely egy csipetnyi pezsgést ad az illatnak és pontosan azt a plusz cseppet adja hozzá, amely biztosítja a rendkívüli élményt minden alkalommal, amikor a bőrhöz ér.'
    },
    {
        nev:'Creed Original Santal',
        fajta:'Eau de Parfum',
        fej:'koriander, bergamott, gyömbér, borókabogyó, rozmaring, mandarin',
        sziv:'egyiptomi geránium, levendula, narancsfa virág, szantálfa',
        alap:'tonkabab, cédrusfa, pézsma, tölgymoha, pacsuli',
        fajtaja:'aromás, fougere',
        leiras:'Érzéki, különleges, magával ragadó a Creed Original Santal Eau de Parfum unisex illata. Az illatkompozíció mesterien kombinálja az indiai szantálfa eszenciáját a nemesen gyönyörű illatukról, szellemi eröjükről és nyugtató hatásukról ismert más tiszta elemekkel.'
    },
    {
        nev:'Creed Oud Zarian',
        fajta:'Eau de Parfum',
        fej:'bergamott, tömjén, gyömbér, fűszer',
        sziv:'rózsa',
        alap:'édesgyökér, mirha, oud, pacsuli, szantálfa, tonkabab',
        fajtaja:'orientális, fűszeres, fás',
        leiras:'A mesterien megmunkált Creed Oud Zarian Eau de Parfum hódolat a természet legcsodásabb ajándékai előtt, és azoknak szól, akik valami rendkívülire vágynak. A lelkét a páratlan 80 éves Oud Choron oud tölti be, amely a távoli Sylhet erdőkben található Aquilaria fából (sasfa) származik. Ez a kincs felülmúlhatatlan fás mélységgel és aromás intenzitással tölti meg az illatkompozíciót.'
    },
    {
        nev:'Creed Silver Mountain Water',
        fajta:'Eau de Parfum',
        fej:'bergamott, feketeribizli, galbanum, narancs',
        sziv:'levegő tónusai, tea',
        alap:'pézsma, szantálfa',
        fajtaja:'citrusos, fás',
        leiras:'Hófödte hegycsúcsok, befagyott hegyi patakok és féktelen táj. A Creed Silver Mountain Water férfi Eau de Parfum olyan, mintha kifejezetten a hegyek, a síelés és a természet szerelmeseinek teremtették volna. Aromás kompozíciójának köszönhetően minden egyes napon energiával tölti fel, függetlenül attól, hogy fontos találkozó, hosszú munkanap vagy hegyi túra vár-e önre.'
    },
    {
        nev:'Creed Silver Royal Oud',
        fajta:'Eau de Parfum',
        fej:'rózsabors, bergamott, limett, galbanum',
        sziv:'angelikafű, kardamon, cédrusfa, szegfűszeg',
        alap:'pézsma, ambroxan, tömjén, guajakfa, oud',
        fajtaja:'fűszeres, fás',
        leiras:'Méltóztasson belépni a monumentális királyi palotába, ahol az arany, márvány és értékes fák hihetetlen szépsége tárul a szeme elé. A Creed Royal Oud uniszex Eau de Parfum ihletéséül pont a királyi székhely atmoszférája szolgált, így illatkompozíciója mindenkit megnyer magának, aki a minőséget, a luxust és az egyedülállóságot értékelni tudja.'
    },
    {
        nev:'Creed Virgin Island Water',
        fajta:'Eau de Parfum',
        fej:'bergamott, limett, trópusi gyümölcs',
        sziv:'jázmin, kókusztej, fehér virágok',
        alap:'tonkabab, fehér pézsma, pacsuli',
        fajtaja:'citrusos, virágos',
        leiras:'Frissítő citrusos illatot rejt flakonjában a Creed Virgin Island Water Eau de Parfum unisex illat. A trópusi akkordok elragadó koktélja azonnal a Karib-térségbe repíti, ahol nyugodt az élet, és illatokat hordoz a tengeri szellő - maga az üvegcsébe zárt karibi nyár.'
    },
     {
        nev: 'Dolce&Gabbana Light Blue Capri In Love Pour Homme',
        fajta: 'Eau de Parfum',
        fej: 'fekete bors',
        sziv: 'füge',
        alap: 'pacsuli',
        fajtaja: 'fűszeres, fás',
        leiras: 'Képzelje el a tengeri szellőt, Capri szigetének aranyló fényét és a helyi természet erejét egy palackban. Ezeket az érzéseket közvetíti a Dolce&Gabbana Light Blue Capri In Love Pour Homme Eau de Parfum. Egyesíti a fűszeres frissességet, a gyümölcsös lédússágot és a mély eleganciát. Ugyanolyan erősen elvarázsolja Önt és környezetét, mint a Földközi-tenger partvidéke.'
    },
    {
        nev: 'Dolce&Gabbana Light Blue Pour Homme',
        fajta: 'Eau de Parfum',
        fej: 'grapefruit, mandarin narancs',
        sziv: 'tengervíz, boróka',
        alap: '	pézsma, ámbrafa',
        fajtaja: 'bőrös, tengeries',
        leiras: 'A Dolce & Gabbana Light Blue Pour Homme Eau Intense egy frissítő, tengeri jellegű illat, amely tökéletes választás a nyári hónapokra. A parfüm nyitánya élénkítő grapefruit és mandarin narancs jegyekkel indít, amelyek azonnal energiával töltik fel a viselőjét. A szívjegyekben a boróka és a sós tengervíz akkordjai dominálnak, amelyek a tengerparti hangulatot idézik. Az alapjegyekben az ámbrafa és a pézsma melegséget és tartósságot kölcsönöznek az illatnak. Ez az illat tökéletes választás azok számára, akik egy friss, mégis karakteres parfümöt keresnek a melegebb napokra.'
    },
    {
        nev: 'Dolce&Gabbana Light Blue Pour Homme',
        fajta: 'Eau de Toilette',
        fej: 'szicíliai citrom',
        sziv: 'rozmaring',
        alap: 'indonéz pacsulilevél',
        fajtaja: 'aromás, fás',
        leiras: 'A Dolce&Gabbana Light Blue Pour Homme Eau de Toilette olyan, mint egy nyári kaland a tengerparton. A citrusos jegyeket aromás és fás akkordokkal ötvözi, amelyek aláhúzzák az Ön férfiasságát, örömét és belső erejét.'
    },
    {
        nev: 'Dolce&Gabbana Devotion For Men',
        fajta: 'Eau de Parfum',
        fej: 'citrom',
        sziv: 'kávé',
        alap: 'pacsuli',
        fajtaja: 'fűszeres, fás',
        leiras: 'Önben van odaadás, karizma és természetes elegancia – és a Dolce&Gabbana Devotion Pour Homme Eau de Parfum mindezeket a tulajdonságokat kiemeli. A mély érzelmekben, a szerelemben és az életörömben gyökerező férfiasságot ünnepli.'
    },
    {
        nev: 'Dolce&Gabbana Devotion For Men Parfum',
        fajta: 'Parfüm',
        fej: 'levendula',
        sziv: 'kávé, ciprus',
        alap: 'borostyán, tonkabab, vanília, tölgymoha',
        fajtaja: 'fás, fougere , pézsmás',
        leiras: 'A Dolce&Gabbana Devotion Pour Homme parfüm a férfielegancia lényegét ünnepli, kiegészítve az érzékiség még merészebb jegyeivel. A fougère akkord tiszteleg a szív állandó ereje és az iránti őszinte elkötelezettség előtt, ami igazán számít.'
    },
    {
        nev: 'Dolce&Gabbana K by Dolce & Gabbana',
        fajta: 'Eau de Parfum',
        fej: 'boróka, kardamon, vérnarancs, pezsgő citrus',
        sziv: 'gólyaorr, füge nektár, lavandin, pezsgő citrus, zsálya',
        alap: 'cédrus, nagarmotha, vetiverfű, pacsuli',
        fajtaja: 'aromás, fűszeres, fás',
        leiras: 'A modern idők minden férfijában ott rejtőzik a király, és a férfi Dolce & Gabbana K by Dolce & Gabbana Eau de Parfum a kulcs a szívéhez. Ez a mágikus illat azt a férfit testesíti meg, aki önmaga választja meg azt az utat, amelyen elébe megy sorsának. Tökéletesen kiemeli viselője szenvedélyes és magabiztos karakterét.'
    },
    {
        nev: 'Dolce&Gabbana K by Dolce & Gabbana',
        fajta: 'Eau de Toilette',
        fej: 'citrusok, vérnarancs, borókabogyó',
        sziv: 'citrusok, zsálya, gólyaorr, levendula',
        alap: 'cédrusfa, vetiverfű, pacsuli',
        fajtaja: 'aromás, fűszeres, fás',
        leiras: 'Most kezdődik a férfiasság új korszaka, Ön pedig az élenjárók közé tartozik. A férfi K by Dolce & Gabbana eau de toilette az Ön bőrén mindenkinek jelzi majd, hogy Ön erős személyiségű férfi és teljességében engedi megnyilvánulni természetes karizmáját.'
    },{
        nev: 'DIOR Sauvage',
        fajta: 'Eau de Parfum',
        fej: 'bergamott',
        sziv: 'vanília',
        alap: '',
        fajtaja: '	aromás, fougere',
        leiras: 'A Sauvage Eau de Parfum a kalábriai bergamott frissességét a Pápua Új-Guineából származó vaníliakivonat érzékiségével ötvözi. A citrusos-ámbrás jegyeket hordozó eau de parfum erőteljes, előkelő illatfelhőt hagy maga után.""A Sauvage Eau de Parfum megalkotása során nem az illat erőteljességére összpontosítottam, hisz jellegzetessége vitathatatlan. A célom nem is annak kihangsúlyozása vagy a kompozíció továbbtelítése volt. Fő szándékom inkább a domináns illatjegyek gazdagítása volt, hogy felfedjék új színüket."" François Demachy, a Dior parfümőre.A naplementében fürdő sivatag ihlette Sauvage Eau de Parfum sűrű kékkel árnyalt illatot áraszt. Jellegzetes nyomvonala az éjszaka hűvösségét vegyíti a sivatag égető levegőjével.A Sauvage Eau de Parfum 100 ml-es üvege újratölthető, a Dior-ház ökodizájn, valamint fenntartható szépségápolást támogató kezdeményezésének részeként. 1. Tisztálkodáskor használja a Sauvage tusfürdőt!2. Ápolja bőrét a Sauvage bőrápoló termékcsaláddal! 3. A Sauvage rituálét zárja a Sauvage Eau de Parfum felvitelével a pulzuspontokra: csuklóra és nyakra!'
    },
    {
        nev: 'Dior Sauvage Elixir',
        fajta: 'Parfüm',
        fej: 'grapefruit, fahéj, szerecsendió, kardamon',
        sziv: 'levendula, benzopyron, vanília',
        alap: 'borostyán, édesgyökér, haiti vetiver, pacsuli',
        leiras: 'A rendkívül magas koncentráció határait feszegető Sauvage Elixir újraírja a férfi parfümkészítés szabályait.* Az illat friss, fás és fűszeres jegyei a határaikig feszülnek és egyenként felmagasztalódnak, megalkotva a Sauvage Elixir nyomvonalát.*A Diornál.1. Tisztálkodáskor használja a Sauvage tusfürdőt!2. Nyugtassa bőrét borotválkozás után a Sauvage Aftershave lotion arcápolójával!3. Permetezze a Sauvage Elixir illatot a pulzuspontokra: nyakra és csuklókra!'
    },
     {
        nev: 'DIOR Sauvage',
        fajta: 'Utántölthető Parfüm',
        fej: 'kalabriai bergamott, mandarin',
        sziv: '	virginiai boróka, szantálfa',
        alap: 'absolut vanília',
        fajtaja: '	aromás, fougere',
        leiras: 'A Sauvage Parfum markáns illatkompozíció, meleg, ámbrás tónusokkal. A vad, érintetlen síkságok által ihletett férfi illat ódaként szól a tágas, nyílt terek varázsához.A magas koncentrációjú Sauvage Parfum a vanília abszolútum és a tonkabab friss, finom illatjegyeit árasztja. A Srí Lanka-i szantálfa szabadjára engedi a lágy, tejes akkordok valódi erejét.""A Sauvage kottája végtelen. Egy rendkívül markáns, sűrű kompozícióról van szó, amelyet finom nüanszok, s az általuk létrehozott fényvillanások árnyalnak. A Sauvage Parfum megalkotásakor elképzeltem, ahogy az intenzív frissesség belecsapódik az ámbra sima mélységébe. Megtartottam a Sauvage erőteljességét, lekerekítettem éleit és kiegészítettem éjszakai felhangokkal, valamint állatias vonzerővel."" François Demachy, a Dior parfümőre.A Sauvage Parfum 100 ml-es kiszerelése újratölthető, része a Dior-ház fenntartható szépségápolást támogató kezdeményezésének.1. Tisztálkodáskor használja a Sauvage tusfürdőt!2. Ápolja bőrét a Sauvage bőrápoló termékcsaláddal!3. A Sauvage rituálét zárja a Sauvage Parfum felvitelével a pulzuspontokra: csuklóra és nyakra!'
    },
    {
        nev: 'Dior Homme',
        fajta: 'Eau de Toilette',
        fej: 'cédrus',
        sziv: '	pacsuli',
        alap: '	vetiverfű',
        fajtaja: 'fás',
        leiras: 'Finom, fás szívjegy jellemzi.Egy Eau de Toilette érzéki illattal, amely egyszerre sugárzik erőtől és frissességtől; élénk, mégis szelíd.'
    },
    {
        nev: 'Dior Fahrenheit Parfum',
        fajta: 'Parfüm',
        fej: 'szicíliai mandarin',
        sziv: 'bőr, ibolya',
        alap: 'Bourbon vanília',
        fajtaja: 'orientális, fűszeres',
        leiras: 'Fahrenheit Parfum, az intenzitás új szintje.Az ellentétek erőt és eleganciát árasztó harmóniája.Élénk és érzéki összetétel jellemzi ibolyás és bőrös jegyekkel, amelyek a Bourbon vaníliában teljesednek ki.Egy értékes összetevőkkel gazdagított, ellenállhatatlanul egyedi illat.Kreativitás, kiválóság és karakter: A Fahrenheit férfias, mégis gyengéd illata a szabadságot ajándékozza viselőjének.'
    },
    {
        nev: 'Dior Homme parfum',
        fajta: 'parfum uraknak',
        fej: 'nőszirom',
        sziv: 'ámbrás jegy',
        alap: '',
        fajtaja: '	virágos, fás',
        leiras: 'A Dior Homme Parfum Francis Kurkdjian, a Parfums Dior kreatív igazgatójának alkotása: egy férfi illat, amely az íriszt ünnepli a maga teljességében, a virágtól egészen a gyökerekig.Az illat az erő és a lágyság határán egyensúlyozva az írisz jegye köré épül, amelyet az ámbrás fák erőteljes akkordjai emelnek ki. Érzéki nyomvonala a Dior Homme illatcsalád disztingvált vonzerejével van átitatva.A letisztult vonalakkal és érzéki színátmenettel bíró monolitikus üveg tetején egy elegáns, ezüstszínű fém plakettel ellátott kupak ül.1. Ébressze fel érzékeit a Dior Homme tusfürdő pezsdítő jegyeivel!2. Kényeztesse bőrét a Dior Homme borotválkozás utáni balzsammal!3. Utolsó lépésként vigye fel a Dior Homme dezodort!'
    },
    {
        nev: 'Dior Homme Cologne',
        fajta: 'Eau de Cologne',
        fej: 'kalabriai bergamott',
        sziv: 'grapefruit virága',
        alap: '	fehér pézsma',
        fajtaja: 'citrusos, aromás',
        leiras: 'Kicsattanóan friss kölni.Tiszta, radikális illat körülölelő illatfelhővel és visszafogott eleganciával, amely a hamisítatlan, kérkedés nélküli luxus megtestesülése.'
    },
    {
        nev: 'Dior Higher Energy',
        fajta: 'Eau de Toilette',
        fej: 'grapefruit',
        sziv: 'fekete bors',
        alap: '	vetiverfű',
        fajtaja: 'aromás, fás',
        leiras: 'Egy fiatal, városi illat, amely azoknak a férfiaknak készült, akik mindig nyitottak új perspektívákra és kilátásokra, a grapefruit, a paprika és a vetiver friss, fás és fűszeres jegyeinek harmóniája mentén.Fényes és élénk. Légies érzetet és sima energiát sugározva a Higher a kortárs, városi illatok pulzusa. A gyümölcsös akkord ragyogása és folyékonysága összeolvad a fűszerek energiájával és rezgéseivel.'
    },
    {
        nev: 'Dior Higher',
        fajta: 'Eau de Toilette',
        fej: 'bazsalikom, körte',
        sziv: 'kardamon',
        alap: '	virginiai boróka',
        fajtaja: 'aromás, fás',
        leiras: 'Ez a meglepő aromás, fás illat a modern városi ember számára készült, aki a jelen pillanatban él, mégis az örök férfiasságot testesíti meg.Hűvös és energikus, körte, citrus és bazsalikom jegyekkel, fűszeres szívjeggyel és pézsmás alapjeggyel.Légies érzetet és sima energiát sugározva a Higher a kortárs, városi illatok pulzusa. A gyümölcsös akkord ragyogása és folyékonysága összeolvad a fűszerek energiájával és rezgéseivel.'
    },
    {
        nev: 'DIOR Eau Suavage',
        fajta: 'Eau de Toilette',
        fej: 'kalabriai bergamott',
        sziv: 'hedione, levendula',
        alap: '	chypre jegyek',
        fajtaja: '	citrusos, aromás',
        leiras: 'A tegnap forradalma a ma legendája. Teljes mértékben modern. A jó ízlés és kifinomult férfiasság szimbóluma, az Eau Sauvage Eau de Toilette több, mint egy illa. Az abszolút elegancia szinonimája, maga a modernizált és örökkévaló „Dior szellemiség”. Ismert virágos-citrusos jegyei egyszerre kifinomultak és erőteljesek, elegánsak és frissek. A kizárólag az Eau Sauvage számára összegyűjtött San Carlo-i bergamot, a hedion bársonyosan virágos élénksége és a ciprus jellegzetes illata a bőrön. Egy olyan tiszta kompozíció, akár Mozart darabjai. Egyszerűnek hat, de valójában igencsak összetett. Egy bonyolult remekmű, amelyben minden jegy pontosan a helyén van. Az Eau Sauvage méltán viseli a parfüm elnevezést.'
    },{
        nev: 'Gucci Guilty Absolute',
        fajta: 'Eau de Parfum',
        fej: 'bőr',
        sziv: 'ciprus, pacsuli',
        alap: 'vetiverfű, fás tónusok',
        fajtaja: 'bőrös, fás',
        leiras: 'Intenzív, szenvedélyes és karizmatikus – ilyen a Gucci Guilty Absolute Eau de Parfum. Akárcsak a férfi, aki számára megalkották. Tökéletes esti viselethez vagy különleges alkalmakra, ahol állatias bőrjegyekkel, magával ragadó vetiverrel és jellegzetesen fás akkordokkal emeli ki a személyiségét.'
    },
   {
        nev: 'Gucci Guilty Pour Homme',
        fajta: 'Eau de Parfum Kivonat',
        fej: 'afrikai narancsfa, csili paprika, szerecsendió',
        sziv: 'orrisz gyökér, afrikai narancsfa, illatvirág',
        alap: 'ambroxan, benzoin, vanília, pacsuli',
        fajtaja: 'aromás',
        leiras: 'Legyen mindig önmaga. A Gucci Guilty Elixir de Parfum férfi parfümkivonat értékes összetevőkkel teli, élénkítő illatkompozíciója erre bátorítja Önt. '
    },
   {
        nev: 'Gucci Guilty Pour Homme',
        fajta: 'Eau de Parfum',
        fej: 'rózsa, paprika',
        sziv: 'levendula, narancsfa virág, keserűnarancs',
        alap: 'cédrusfa, pacsuli',
        fajtaja: 'aromás, fás',
        leiras: 'Bontakoztassa ki személyisége excentrikus és merész oldalát! A férfi Gucci Guilty Pour Homme eau de parfum érzéki illata arra készteti Önt, hogy teljes szabadságot adjon formabontó és némiképp titokzatos énjének. Soha nem látott intenzitással mutathatja meg a világnak, hogy mennyire férfias.'
    },
   {
        nev: 'Gucci Guilty Pour Homme',
        fajta: 'Parfüm',
        fej: 'lavandin',
        sziv: 'citrusok',
        alap: 'pacsuli',
        fajtaja: 'aromás, fás',
        leiras: 'Élvezze a szabadság érzését, és csak a saját szabályai szerint éljen. A Gucci Guilty pour Homme Parfum férfi illat a szabadság megtestesülése – felszabadulás az Önt körülölelő világ elvárásai alól. Éljen és szeressen természetesen, őrülten! És most még intenzívebben. '
    },
   {
        nev: 'Gucci Guilty Pour Homme',
        fajta: 'Eau de Toilet',
        fej: 'citrom, levendula',
        sziv: 'narancsfa virága',
        alap: 'virginiai boróka, pacsuli, vanília',
        fajtaja: 'aromás, fás',
        leiras: 'A Gucci Guilty Pour Homme Eau de Toilette olyan férfi számára készült, aki nem akarja, hogy elfelejtsék. A férfinak, aki tudja, hogy mit akar és azt mindig meg is kapja, aki minden napot úgy él meg, mintha az élete utolsó napja lenne.'
    },
   {
        nev: 'Gucci Guilty Essence',
        fajta: 'Eau de Toilette',
        fej: 'koriander',
        sziv: 'narancsfa virága, keserűnarancs, zöld tónusok',
        alap: 'pacsuli, cédrus',
        fajtaja: 'aromás',
        leiras: 'Ne törődjön mások véleményével, legyen öntörvényű és élvezze az életet! A Guilty Essence férfi Eau de Toilette tökéletesen kiegészíti az erős személyiséget és kiemeli a karizmát: egy bódító fougère illat, amely megtestesíti a bujaságot és az élet élvezetét, és kivívja önnek környezete csodálatát.  '
    },{
        nev:'Jean Paul Gaultier Le Male Le Parfum',
        fajta:'Eau de Parfum',
        fej:'kardamon',
        sziv:'levendula, nőszirom',
        alap:'vanília',
        fajtaja:'orientális, fás',
        leiras:'Halló, kapitány úr! Én erős kapitányom! Hallja ezt? Ez Önnek szól, mivel a testén kibontakozó Jean Paul Gaultier Le Male Le Parfum Eau de Parfum mindenkinek elárulja, hogy egy igazi tiszt áll előtte! A keleties fás aroma olyan férfias aurával veszi körül, amilyennel csak az erős, egyenruhás tisztek büszkélkedhetnek.'
    },
    {
        nev:'Jean Paul Gaultier Le Male Elixir',
        fajta:'Parfüm',
        fej:'levendula',
        sziv:'tonkabab',
        alap:'benzoin',
        fajtaja:'aromás, fás',
        leiras:'Vigyázat, hőhullám a láthatáron! A Jean Paul Gaultier Le Male Elixir férfiparfüm a felhevült fedélzetre repíti Önt, és intenzív, izzó szexepilben gazdag illatba burkolja. Mire vár még? Ragadja meg a kormányt, és induljon teljes gőzzel előre!'
    },
    {
        nev:'Jean Paul Gaultier Le Beau Le Parfum Intense',
        fajta:'Eau de Parfum',
        fej:'bergamott',
        sziv:'kókusz',
        alap:'tonkabab',
        fajtaja:'aromás, fás',
        leiras:'A tökéletes férfiasságot nincs miért rejtegetni! A férfi Jean Paul Gaultier Le Beau Le Parfum Eau de Parfum üvegcséjének az alakja egy izmos férfitorzó, amelyet csak egy levél takar. Úgy néz ki, mintha egyenesen a Paradicsomból lépett volna elő. Azonban az ő esetében szó sincs tiltott gyümölcsről. Egyértelműen kóstolásra késztető, friss, függőséget kiváltó illat.'
    },
    {
        nev:'Jean Paul Gaultier Le Male Elixir Absolut',
        fajta:'Eau de Parfum',
        fej:'szilva',
        sziv:'levendula',
        alap:'tonkabab',
        fajtaja:'aromás, fűszeres',
        leiras:'Figyelmeztetés a hőségriadóra a Jean Paul Gaultier Le Male Elixir Absolu parfüm Önt a világ legszexisebb férfijévé teszi. Hogyan? A Le Male legendás levendula összetevője a kompozícióban érzéki szilvával és tonkababokkal van gazdagítva, amelyek azt kellően felforrósítják. Elegendő egyetlen csepp ebből az ámbrás illatból, ami beivódik a bőrébe, és mindenkit magával ragad, aki csak körülveszi.'
    },
    {
        nev:'Jean Paul Gaultier Le Male',
        fajta:'Eau de Toilette',
        fej:'menta',
        sziv:'levendula',
        alap:'vanília',
        fajtaja:'orientális',
        leiras:'Egyenruhás férfiak tudja, hogy a nők csak nehezen tudnak ellenállni nekik? A Jean Paul Gaultier Le Male férfi Eau de Toilette a vonzó tengerész összes tulajdonságával felvértezi. Kap vele egy csipet érzékiséget, egy adag intenzitást és egy csepp klasszikust, ami az ön választottját is meghódítja.'
    },
    {
        nev:'Jean Paul Gaultier Le Beau Paradise Garden',
        fajta:'Eau de Parfum',
        fej:'kókusz víz',
        sziv:'füge',
        alap:'szantálfa',
        fajtaja:'fás',
        leiras:'Éljen át egy nem mindennapi egzotikus kalandot egy olyan helyen, ahol buja növények nyúlnak az ég felé, és a levegőt a sós víz illata járja át. A Jean Paul Gaultier Le Beau Paradise Garden férfi Eau de Parfum egy fantasztikus kertbe, a szenvedély és a szépség édenkertjébe repíti, megmutatva az Ön vadságát és természetes vonzerejét.'
    },
    {
        nev:'Jean Paul Gaultier Le Beau',
        fajta:'Eau de Toilette',
        fej:'bergamott',
        sziv:'kókusz',
        alap:'tonkabab',
        fajtaja:'aromás,fás',
        leiras:'Az üde, mégis intenzív Jean Paul Gaultier Le Beau eau de toilette minden férfit ellenállhatatlanul csábítóvá változtat. A függőséget keltő tonkababok telt aromája egyesül a kókuszfa egyedülálló illatával és a bergamott friss tónusaival.'
    },
    {
        nev:'Jean Paul Gaultier Le Beau Flower Edition',
        fajta:'Eau de Parfum',
        fej:'kumaquat',
        sziv:'lila ,levél',
        alap:'kaszmerán',
        fajtaja:'gyümölcsös, virágos, fás',
        leiras:'Üdvözöljük az Édenkertben, ahol valamennyi kísértés gyökere megtalálható. A Jean Paul Gaultier Le Beau Flower Edition Eau de Parfum meghívja Önt a tiltott élvezetekre. Az illat minden egyes gyümölcsös, virágos és fás jegyével Önt egy olyan világ mélységeibe húzza be, ahol a vágy virágzik. Bele fog esni a bűvöletébe?'
    },{
        nev:'Lattafa Pride Ishq Al Shuyukh Gold',
        fajta:'Eau de Parfum',
        fej:'karamell,sáfrány',
        sziv:'tonkabab,bőr',
        alap:'borostyán,vanília,pézsma',
        fajtaja:'orientális,gourmand',
        leiras:'Ezen illat csodája abban rejlik, hogy egyaránt tökéletesen megfelelő nők és férfiak számára. Mindenki megtalálja benne a magáét, mindenkin más illatot hagy. Az unisex Lattafa Pride Ishq Al Shuyukh Gold Eau de Parfum biztosan nem vész el az Ön toalettasztalán, és még a kedvesével is megoszthatja.'
    },
    {
        nev: 'Lattafa Pride Tharwah Gold',
        fajta: 'Eau de Parfum',
        fej: 'levendula, bergamott',
        sziv: 'narancsfa virág, jázmin',
        alap: 'vanília, vetiverfű, borostyán',
        fajtaja: 'orientális',
        leiras: 'Ébredjen minden reggel életvidáman egy olyan illattal, amely a temperamentumát ünnepli. A férfiak és nők számára egyaránt alkalmas Lattafa Pride Tharwah Gold Eau de Parfum a finom virágos jegyek és a melegség édes szimfóniáját nyújtja, hogy körülölelje Önt. Ez az illat olyan, mint egy ékszer, amely kiemeli az egyediségét és eleganciáját.'
    },
    {
        nev: 'Lattafa Asad',
        fajta: 'Eau De Parfum',
        fej: 'fűszeres tónusok ',
        sziv: 'vanília, borostyán',
        alap: 'szantálfa, szegfűszeg',
        fajtaja: 'orientális, fűszeres, gourmand',
        leiras: 'A füstös, orientális tónusokat ötvözi ügyesen titokzatosan fekete, luxusos flakonjában a Lattafa Asad Eau de Parfum uraknak. Kifinomult keveréke az édes, fás, és fűszeres jegyeknek amelyek egyedi illatot biztosítanak '
    },
    {
        nev: 'Lattafa Asad Zanzibar',
        fajta: 'Eau De Parfum',
        fej: 'levendula, fekete bors',
        sziv: 'kókusz víz, nőszirom, só',
        alap: 'vanília, tömjén',
        fajtaja: 'virágos, gourmand',
        leiras: 'Az életet maradéktalanul meg kell élni. A Lattafa Asad Zanzibar Eau de Parfum, amelyet egy egzotikus sziget ihletett, magában hordozza a tengeri szellő könnyedségét, a természet vaníliás bőségét és a távoli tájak aromás varázsát. A kaland akkor kezdődjön, amikor megáll és levegőt vesz.'
    },
    {
        nev: 'Lattafa Asad Bourbon',
        fajta: 'Eau De Parfum',
        fej: 'rózsabors, levendula, mirabolán',
        sziv: 'kakaó, davana, szerecsendió',
        alap: 'vetiverfű, vanília, borostyán',
        fajtaja: 'aromás, gourmand',
        leiras: 'Ön is a Bourbon vanília kedvelőinek táborába tartozik? Akkor ki kell próbálnia a Lattafa Asad Bourbon Eau de Parfum illatát. Bravúrosan ötvözi a merész jegyeket a kifinomult finomsággal. Minden cseppje kifinomultságot és szenvedélyt tükröz, így tökéletes társ a stílusos nappali és esti pillanatokhoz.'
    },
    {
        nev: 'Lattafa Khamrah',
        fajta: 'Eau De Parfum',
        fej: 'fahéj, szerecsendió, bergamott',
        sziv: 'praliné, datolya, tubarózsa, mahagóni',
        alap: 'vanília, tonkabab, mirha, benzoin, Akigalawood®, borostyán',
        fajtaja: 'orientális, gourmand',
        leiras: 'Luxusos dizájnú flakon, amely hasonlóan kivételes illatot rejt magában. A Lattafa Khamrah Eau de Parfum unisex tónusai azonnal elvarázsolják, és környezete figyelmét is felkeltik. '
    },
    {
        nev: 'Lattafa Khamrah Qahwa',
        fajta: 'Eau De Parfum',
        fej: 'fahéj, kardamon, gyömbér',
        sziv: 'praliné, kandírozott narancs, fehér virágok',
        alap: 'kávé, vanília, benzoin, pézsma, tonkabab',
        fajtaja: 'orientális, fűszeres',
        leiras: 'A kellemesen melengető, és csodásan édeskés tónusokat kombinálja magában a Lattafa Khamrah Qahwa Eau de Parfum. Egy igazán egyedi unisex kompozíció amely remek társa lesz a hidegebb napokon, vagy akár a kalandokkal teli éjszakákon is.'
    },
    {
        nev: 'Lattafa Habik',
        fajta: 'Eau De Parfum',
        fej: 'üröm, fekete bors, kardamon, bergamott',
        sziv: 'levendula, zsálya, fahéj',
        alap: 'borostyán, pacsuli, szantálfa, tonkabab, pézsma',
        fajtaja: 'aromás, fűszeres',
        leiras: 'A Lattafa Habik for Women illat olyan, mint egy álom, amely lassan oszlik el a bőrön. Virágos jellege finom, de nem veszít erejéből. Természetes hatást kelt, de felejthetetlen benyomást hagy maga után.'
    },
     {
        nev:'Valentino Born In Roma Intense Uomo',
        fajta:'Eau de Parfum',
        fej:'Bourbon vanília',
        sziv:'levendula',
        alap:'vetiverfű',
        fajtaja:'aromás, virágos',
        leiras:'Adja át magát az örök város, Róma éjszakai hangulatának! A Valentino Born In Roma Intense Uomo férfi Eau de Parfum merész és eredeti illata Önt is a kis történelmi utcákban zajló, véget nem érő ünnepi hangulatra hangolja. Tökéletesen ötvözi a kihívó és a frissítő illatjegyeket, megtestesítve az érzékek számára egyszerűen elragadó tökéletes hatást.aromás fougère illat pikáns jegyekkelaz Antoinea Maisondieu és Guillaume Flavigny parfümőrpáros alkotása az Eau de Parfum 2023-ban került kereskedelmi forgalomba'
        
    },
    {
        nev:'Valentino Born In Roma Coral Fantasy Uomo',
        fajta:'Eau de Toilette',
        fej:'piros alma, bergamott',
        sziv:'zsálya, gólyaorr, absolut vanília',
        alap:'dohánylevelek, pacsuli, absolut vanília',
        fajtaja:'gyümölcsös',
        leiras:'Róma városába invitálja, hogy a naplementében gyönyörködhessen a Valentino Born In Roma Coral Fantasy Uomo Eau de Toilette uraknak. A korallos égbolt borostyánsárga gyümölcsös illatot ihletett, amelyben a vörös alma, és a dohányakkordok váratlan kombinációja kelti fel figyelmét. az örök város gyönyörű naplementéi inspirálták hozzá illő, női változatban is kaphatóvirágos illat friss akkordokkal '
        
    },
    {
        nev: 'Valentino Born In Roma Green Stravaganza Uomo',
        fajta:'Eau de Toilette',
        fej:'kalabriai bergamott',
        sziv:'kávé',
        alap:'vetiverfű',
        fajtaja:'gyumölcsös',
        leiras:'A Valentino Born In Roma Green Stravaganza Uomo férfi Eau de Toilette a titokzatosság, a luxus és az egzotikum harmóniája, amely felejthetetlen nyomot hagy maga után. Ez az illat minden alkalomra erőt sugároz. Mert a Valentino zöldje merész és túlzó, szenvedélyes és extravagáns. A zöld életet visz minden banalitásba, és lehetővé teszi a kitűnést.'
        
    },
    {
        nev: 'Valentino Born In Roma Uomo Le Rendez-Vous',
        fajta:'Eau de Toilette',
        fej:'piros alma, bergamott',
        sziv:'kávé',
        alap:'vetiverfű',
        fajtaja:'aromás',
        leiras:'A Valentino Born In Roma Green Stravaganza Uomo férfi Eau de Toilette a titokzatosság, a luxus és az egzotikum harmóniája, amely felejthetetlen nyomot hagy maga után. Ez az illat minden alkalomra erőt sugároz. Mert a Valentino zöldje merész és túlzó, szenvedélyes és extravagáns. A zöld életet visz minden banalitásba, és lehetővé teszi a kitűnést.'
        
    },
    {
        nev:'Valentino Uomo',
        fajta:'Eau de Toilette',
        fej:'fűszeres tónusok, szerecsendió',
        sziv:'virginiai boróka',
        alap:'vanília, borostyán',
        fajtaja:'orientális',
        leiras:'Hagyja, hogy a férfi Valentino Born In Roma The Gold Uomo Eau de Toilette Ön helyett is elárulja, hogy olyan férfi jelent meg a színen, aki mindent megkap, amire csak vágyik. A férfias érzékiséggel, vonzerővel és szenvedéllyel teli illat senkit sem hagyhat hidegen a környezetében.'
        
    },
    {
        nev:'Valentino Born In Roma Extradose Uomo',
        fajta:'Parfüm',
        fej:'fűszeres tónusok',
        sziv:'levendula',
        alap:'vanília, borostyán',
        fajtaja:'citrusos, fűszeres',
        leiras:'Miért elégedjünk meg a kevéssel, ha mindent megkaphatunk? A Valentino Born in Roma Extradose Uomo férfi parfüm az eredeti, ikonikus Born in Roma illat magas koncentrációjú interpretációja. Hamisítatlan intenzitással ünnepli a hitelességet és a bátorságot. Az elegancia új perspektíváját mutatja be – nyers és érzéki.'
        
    },
    {
        nev: 'Valentino Born In Roma Uomo',
        fajta:'Eau de Toilette',
        fej:'ibolya levelek, vetiverfű',
        sziv:'tengeri só, zsálya',
        alap:'fa, gyömbér',
        fajtaja:'fűszeres, fás',
        leiras:'Mutassa meg a világnak, hogy néz ki a ma embere. A Valentino Born in Roma Uomo férfi eau de toilette a férfias eleganciából merített ihletet, ahogyan azt Róma diktálja. Ezzel az illattal a parfümök nyelvén fejezheti ki a gyökereire való büszkeségét, így személyiségének és értékrendjének ünnepévé válik minden napja.'
        
    },
    {
        nev:'Valentino Born In Roma The Gold Uomo',
        fajta:'Eau de Toilette',
        fej:'fűszeres tónusok, szerecsendió',
        sziv:'virginiai boróka',
        alap:'vanília, borostyány',
        fajtaja:'orientális',
        leiras:'Hagyja, hogy a férfi Valentino Born In Roma The Gold Uomo Eau de Toilette Ön helyett is elárulja, hogy olyan férfi jelent meg a színen, aki mindent megkap, amire csak vágyik. A férfias érzékiséggel, vonzerővel és szenvedéllyel teli illat senkit sem hagyhat hidegen a környezetében.'
        
    },{
        nev:'Versace Eros',
        fajta:'Eau de Parfum',
        fej:'menta,citrom',
        sziv:'zöldalma,gólyaorr',
        alap:'borostyán,absolutvanília,tonkabab',
        fajtaja:'aromás,orientális',
        leiras:'Maszkulin, és igazán magabiztos a Versace Eros parfüm. Szenvedélyes férfiaknak készült, fás, keleties, mégis frissítő illatba burkolja bőrét. Eros a szerelem istene ihlette kompozícióját. '
    },
    {
        nev:'Versace Eros',
        fajta:'Eau de Toilette',
        fej:'menta,olasz citrom,zöldalma',
        sziv:'tonkabab,gólyaorr,ambroxan',
        alap:'vanília,vetiverfű,cédrus,tölgymoha',
        fajtaja:'aromás',
        leiras:'Legyen olyan érzéki, mint a szerelem görög istene, Eros. A férfi Versace Eros Eau de Toilette tökéletesen tükrözi az erőt és a szenvedélyt. Illatkompozíciója a szerelmet és a vágyat szimbolizálja, és kifejezetten az olyan erős és magabiztos férfi számára készült, aki tisztában van azzal, hogy mit akar. Az illat titokzatos jegyei mindenkit magukkal ragadnak, így biztos lehet abban, hogy a környezetében egyetlen nő sem hagyja figyelmen kívül.'
    },
    {
        nev:'Versace Eros Energy',
        fajta:'Eau de Parfume',
        fej:'bergamott, vérnarancs, limett, grapefruit, citrom',
        sziv:'rózsabors, feketeribizli, fehér ámbra',
        alap:'citrusos, fás',
        fajtaja:'pacsuli, pézsma',
        leiras:'Mi mással lehetne szavakba önteni a természet leírhatatlan tökéletességét és a szépség összetettségét? A Versace Eros Energy férfi Eau de Parfum-öt a Földközi-tenger partvidékének lenyűgöző szépsége és a nyári életstílus ihlette – a levegő frissességét, a táj vadságát és a nyaralás luxusát hozza magával. Érezze az örömöt és a szabadságot, amelyet a citrusokkal és fehér ámbrával teli illata hoz.'
    },
    {
        nev:'Versace Dylan Blue Pour Homme',
        fajta:'Eau de Toilette',
        fej:'vízi tónusok, fügefa levél, kalabriai bergamott, grapefruit',
        sziv:'ibolya levelek, pacsuli, papirusz, fekete bors, ambroxan',
        alap:'pézsma, tonkabab, sáfrány, tömjén',
        fajtaja:'aromás',
        leiras:'Erő, karizma és csillapíthatatlan szenvedély. Ezt hívja elő önből a Versace Dylan Blue Pour Homme Eau de Toilette. A karakteres és individualitással teli parfüm, melyből a Földközi-tenger hívogató és üde illatjegyeivel sugárzik a csábító hódítás.'
    },
    {
        nev:'Versace Pour Homme',
        fajta:'Eau de Toilette',
        fej:'bergamott, citrom, keserűnarancs, keserű narancs',
        sziv:'jácint, gólyaorr, muskotályzsálya, cédrusfa',
        alap:'borostyán, pézsma, tonkabab, oud',
        fajtaja:'aromás',
        leiras:'Férfi klasszikus modern köntösben. Ez a Versace Pour Homme Eau de Toilette. Annak a jelenkori, magabiztos férfinek a személyiségét testesíti meg, aki vállalkozó szellemű és ösztönös, ugyanakkor gond nélkül képes összhangban élni a természettel.'
    },
    {
        nev:'Versace Eau Fraîche',
        fajta:'Eau de Toilette',
        fej:'citrom, fa, karambola',
        sziv:'cédrus, tárkony, zsálya',
        alap:'borostyán, fa, pézsma',
        fajtaja:'víz',
        leiras:'Miért adjunk alább az elvárásainkból, ha a legjobbat is mindig megkaphatjuk? A Versace Man Eau Fraîche borotválkozás utáni arcvíz férfiaknak tökéletes azoknak a modern uraknak, akik adnak a luxusra. A Versace Man Eau Fraîche borotválkozás utáni arcvíz aromás és citrusos jegyeket rejt magában, ahol a főszerep a citromé, a bergamotté és a melengető cédrusfáé.'
    },
    {
        nev:'Versace The Dreamer',
        fajta:'Eau de Toilette',
        fej:'boróka, tárkony, üröm',
        sziv:'nőszirom, liliom, Ien virága',
        alap:'borostyán, borostyán, dohány virága',
        fajtaja:'orientális',
        leiras:'A Versace The Dreamer azokat a férfiakat szólítja meg, akik egész életükben az álmaikat követik. Engedje meg Ön is, hogy magával ragadja a fantázia varázslatos világa! Ha lehunyja a szemét, hirtelen egy mágikus, illatozó erdei ösvényen találja magát, ahol a vékony ágak roppannak a talpa alatt, a levegőben a fenyvesek felemelő illata száll és a lelkét balzsamos nyugalom árasztja el. Merítsen Ön is erőt és energiát a Dreamer toalettvízből!'
    },
    {
        nev:'Versace Eros Flame',
        fajta:'Eau de Parfum',
        fej:'Chinotto citrus, fekete bors, mandarin, keserű narancs',
        sziv:'fás tónusok, rozmaring',
        alap:'pacsuli, vetiverfű',
        fajtaja:'aromás, fás',
        leiras:'Egy illat, ami teljesen megérinti a szívét és átadja önt a változatosságban rejlő méltóság és erő küldetésének. A Versace Eros Flame Eau de Parfum olyan férfinak való, aki biztos önmagában és minden helyzetben mély kapcsolatban van a saját érzéseivel.'
    },
    {
        nev:'Yves Saint Laurent Y',
        fajta:'Eau de Parfum',
        fej:'bergamott, alma, gyömbér, elemi, aldehidek',
        sziv:'boróka, zsálya, levendula, gólyaorr',
        alap:'vetiverfű, tömjén, tonkabab, borostyán',
        fajtaja:'fűszeres, fás',
        leiras:'Az Yves Saint Laurent Y annak a férfinek készült, aki már megvalósította az álmait, de továbbra is követi a céljait. Nem fél szembenézni a kihívásokkal, és nem vesz semmit könnyelműen. A fás illatkompozíció annak a férfinek az elszántságát testesíti meg, aki folyamatosan döntögeti a saját határait.'
    },
    {
        nev:'Yves Saint Laurent MYSLF',
        fajta:'Eau de Parfum',
        fej:'kalabriai bergamott',
        sziv:'narancsfa virág',
        alap:'pacsuli',
        fajtaja:'virágos, fás',
        leiras:'Legyen olyan férfi, mint amilyen. Az Yves Saint Laurent MYSLF Eau de Parfum uraknak a modern férfiasság kifejezése, annak minden aspektusával és érzelmével együtt. A kompozíció tudatosan ötvözi a fás és virágos jegyeket, hogy kiemelje a modernitás kontrasztját. '
    },
    {
        nev:'Yves Saint Laurent Y Le Parfum 2025',
        fajta:'Eau de Parfum',
        fej:'gyömbér, bergamott',
        sziv:'fenyő, fenyő',
        alap:'borostyán, pacsuli',
        fajtaja:'fás',
        leiras:'Magabiztosság, bátorság és ellenállhatatlan érzékiség. Mindezt az Yves Saint Laurent Y Le Parfum testesíti meg, amely az ikonikus Y illat intenzív változata. A gazdag fougère-kompozícióval, amelyben az aromás fenyő és a mély fás jegyek dominálnak, tökéletes társává válik a merész férfiaknak, akik nem félnek megmutatni erejüket és szenvedélyüket.'
    },
    {
        nev:'Yves Saint Laurent La Nuit deL Homme',
        fajta:'Eau de Toilette',
        fej:'kardamon, tonkabab',
        sziv:'bergamott, virginiai boróka, levendula',
        alap:'benzopyron, vetiverfű, szantálfa',
        fajtaja:'fűszeres, fás',
        leiras:'Az Yves Saint Laurent La Nuit de LHomme Eau de Toilette egy ellentétekkel és feszültségekkel teli kifejezetten férfias, érzéki illat.'
    },
    {
        nev:'Yves Saint Laurent MYSLF Le Parfum',
        fajta:'Eau de Parfum',
        fej:'fekete bors',
        sziv:'narancsfa virág',
        alap:'pacsuli, borostyán, Bourbon vanília, fa',
        fajtaja:'fás',
        leiras:'Az Ön illata, az Ön aláírása. Az Yves Saint Laurent MYSLF Le Parfum parfüm uraknak egy intenzív és érzéki kompozíció, amely a fás jegyek erejét a virágok finomságával ötvözi a vanília és a fekete bors társaságában. Tökéletesen feltárja a modern férfiasság kontrasztjait, és megtestesíti a férfias eleganciát és melegséget. Legyen önmaga, bárhol is van, bármi is történik. Myslf.'
    },
    {
        nev:'Yves Saint Laurent L Homme',
        fajta:'Eau de Parfum',
        fej:'keserű narancs',
        sziv:'vetiverfű',
        alap:'tölgy',
        fajtaja:'orientális',
        leiras:'Melengető, fás tónusú illatot rejt minimalista dizájnú flakonjában az Yves Saint Laurent LHomme Eau de Parfum. A narancssárga bourbon savanyúsága ihlette egyedi, férfias illatát. '
    },
    {
        nev:'Yves Saint Laurent MYSLF L Absolut',
        fajta:'Eau de Parfum',
        fej:'bergamott, kardamon, gyömbér',
        sziv:'keserűnarancs, narancsfa virág',
        alap:'pacsuli, fa',
        fajtaja:'citrusos, gyümölcsös, fás',
        leiras:'Élje át a magabiztosság egyedülálló pillanatát egy olyan illattal, amely egyesíti az erőt, a frissességet és az eleganciát. Az Yves Saint Laurent MYSLF LAbsolu Eau de Parfum a férfiasságot ünnepli a hűvös gyömbér, a gazdag narancsvirág és az érzéki meleg fa segítségével. Ez a kompozíció lehetővé teszi, hogy mindig önmaga legyen: olyan illatnyommal, amelyet lehetetlen nem felismerni.'
    },
    {
        nev:'Yves Saint Laurent Y EDP Intense',
        fajta:'Eau de Parfum',
        fej:'bergamott, boróka, gyömbér',
        sziv:'levendula, gólyaorr, zsálya',
        alap:'cédrusfa, pacsuli, vetiverfű',
        fajtaja:'gyümölcsös, virágos, fás',
        leiras:'Elérkezett az önmegvalósítás ideje. Az Yves Saint Laurent Y Eau de Parfum Intense Eau de Parfum-je szükséges mennyiségű adrenalint és magabiztosságot ad. Önnek már csak élveznie kell azt a mámorító érzést, ahogyan a kreatív energia felszabadul.'
    },
    {
        nev:'Yves Saint Laurent L Homme Le Parfum',
        fajta:'Eau de Parfum',
        fej:'szicíliai citrom',
        sziv:'kardamon, bazsalikom, gólyaorr, lila levél',
        alap:'vetiverfű, cédrusfa, ambroxan, kaszmerán',
        fajtaja:'citrusos',
        leiras:'A csábítás megtestesítője a Yves Saint Laurent LHomme Le Parfum eau de parfum uraknak. A népszerű LHomme illatcsalád tagja, amely igazán férfias, felejthetetlen illatokat tartalmaz. Frissítő citrusos illat amely bármikor, bárhol viselhető. Garantáltan elvarázsol majd minden nőt aki megérzi ezt az illatot.'
    }
    


]
export default osszesAdatok;